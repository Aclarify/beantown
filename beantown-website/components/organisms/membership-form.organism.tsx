import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { GlobalContext } from 'contexts/global/global.context';
import { MembershipsContentProps } from 'pages/memberships';
import { GlobalContextProps } from 'typing/common/interfaces/contexts.interface';
import Image from 'next/image';
import FormLabel from 'components/atoms/form-label.atom';
import FormInput from 'components/atoms/form-input.atom';
import FormCheckBox from 'components/atoms/form-checkbox';
import { ServiceMembershipCard } from 'typing/gql/graphql';
import { MembershipsContext } from 'contexts/memberships/memberships.context';
import clsx from 'clsx';
import useWindowDimensions from 'lib/hooks/use-window-dimensions.hook';
import { config } from 'lib/config';

import dynamic from 'next/dynamic';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { createBooking } from '@lib/clients/services/crm/booking.crm.service';
import { CreateBookingInboundDto } from '@lib/api/crm/service-titan/createBooking.handler';
import { LOGROCKET_ID } from '@lib/tracking/logRocket.tracking';
import LogRocket from 'logrocket';

const AddressAutofill = dynamic(
	() => import('@mapbox/search-js-react').then((c) => c.AddressAutofill),
	{
		ssr: false,
	}
);

interface Props {
	onSumissionSuccess: (choice: ServiceMembershipCard) => void;
}

type MembershipFormValues = {
	email: string;
	firstName: string;
	lastName: string;
	phoneNumber: string;
	address: string;
	city: string;
	state: string;
	zipCode: string;
	isFirstTimeClient: boolean;
};

// form validation rules
const validationSchema = Yup.object().shape({
	email: Yup.string()
		.required('Your email is required')
		.email('Email is invalid'),
	firstName: Yup.string().required('Your first name is required'),
	lastName: Yup.string().required('Your last name is required'),
	address: Yup.string().required('Your address is required'),
	city: Yup.string().required('Your city is required'),
	state: Yup.string().required('Your state is required'),
	// The regular expression ^\d{5}(-\d{4})?$ matches a 5-digit ZIP code
	// with an optional 4-digit extension
	zipCode: Yup.string()
		.matches(/^\d{5}(-\d{4})?$/, 'Zip code is not valid')
		.required('Your zip code is required'),
	isFirstTimeClient: Yup.boolean().default(true),
	// The regular expression ^\+?\d{10,14}$ matches phone numbers
	// that start with an optional plus sign (+), followed by 10 to 14 digits.
	phoneNumber: Yup.string()
		.matches(/^\+?\d{10,14}$/, 'Phone number is not valid') //
		.required('Your phone number is required'),
});

export const MembershipForm: React.FC<Props> = ({ onSumissionSuccess }) => {
	const { pageContent } =
		useContext<GlobalContextProps<MembershipsContentProps>>(GlobalContext);
	const { selectedMembership, setSelectedMembership } =
		useContext(MembershipsContext);
	const { activeServiceMembership } = useContext(MembershipsContext);
	const { width } = useWindowDimensions();
	const mapBoxAccessToken = config.mapBoxAccessToken;

	// ***************
	// get functions to build form with useForm() hook
	const formOptions = { resolver: yupResolver(validationSchema) };
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<MembershipFormValues>(formOptions);

	if (!pageContent) {
		return null;
	}
	if (!activeServiceMembership) {
		return null;
	}

	const pageData = pageContent.page[0];
	const { logoDark } = pageData;

	const onSubmit: SubmitHandler<MembershipFormValues> = async (data) => {
		// Submit form data to server
		if (selectedMembership) {
			const bookingDetails: CreateBookingInboundDto = {
				name: `${data.firstName} ${data.lastName}`,
				summary: `Interested in the ${selectedMembership.membershipTitle} Membership for the ${activeServiceMembership?.name} Service`,
				isFirstTimeClient: data.isFirstTimeClient,
				contacts: [
					{
						type: 'Email',
						value: data.email,
					},
					{
						type: 'Phone',
						value: data.phoneNumber,
					},
				],
				address: {
					street: data.address,
					city: data.city,
					state: data.state,
					zip: data.zipCode,
					country: 'USA',
				},
			};
			const bookingPromise = createBooking(bookingDetails);

			// Identify  User for LogRocket
			LogRocket.identify(LOGROCKET_ID, {
				name: `${data.firstName} ${data.lastName}`,
				email: data.email,
			});

			toast.promise(
				bookingPromise,
				{
					loading: 'Loading',
					error: (err) => {
						console.error('Error: ', err);
						return `Cannot complete this operation, please try again later`;
					},
					success: () => {
						onSumissionSuccess(selectedMembership);
						return `Successfully submitted`;
					},
				},
				{
					style: {
						minWidth: '250px',
					},
				}
			);
		}
	};

	return (
		<>
			{width > 768 ? (
				<section
					id="membershipForm"
					className="flex min-w-[50vw] flex-col rounded-2xl bg-white"
				>
					<div className="form-header">
						<div className="px-auto flex flex-col items-center border-b bg-white">
							<div className="flex w-4/5 items-center ">
								<div className="image-wrapper relative h-[32px] w-[170px] md:h-[80px] md:w-[230px]">
									<Image
										alt={logoDark?.image?.asset?.altText || ''}
										fill={true}
										priority={true}
										src={logoDark?.image?.asset?.url || ''}
									/>
								</div>
								<div className="mx-4 h-20 border-l"></div>
								<div className="flex-1 px-3 py-2">
									<span className="subtitle text-primary-shade-1 pb-4 sm:pb-8">
										Membership Inquiry
									</span>
									<div className="mt-4 mb-6 grid grid-cols-3 gap-4">
										{activeServiceMembership?.serviceMembershipCards?.map(
											(membership: any, index: number) => {
												return (
													<button
														key={index}
														onClick={() => setSelectedMembership(membership)}
														className={clsx(
															'rounded-lg border py-3 px-4 text-center align-middle',
															{
																'bg-secondary-shade-1 text-white':
																	membership == selectedMembership,
															}
														)}
													>
														{membership?.membershipTitle}
													</button>
												);
											}
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="form-body flex flex-col py-4"
					>
						<div className="flex flex-col gap-4 py-2 lg:py-5 ">
							<div className="mx-auto flex w-3/5 flex-row gap-4">
								<div className="flex w-full flex-col gap-2">
									<FormLabel inputId="firstName" labelText="First Name" />
									<FormInput
										id="firstName"
										placeholderText="Enter your first name"
										name={'firstName'}
										register={register}
										error={errors.firstName}
									/>
								</div>
								<div className="flex w-full flex-col gap-2">
									<FormLabel inputId="lastName" labelText="Last Name" />
									<FormInput
										id="lastName"
										placeholderText="Enter your last name"
										name={'lastName'}
										register={register}
										error={errors.lastName}
									/>
								</div>
							</div>
							<div className="mx-auto flex w-3/5 flex-row gap-4">
								<div className="flex w-full flex-col gap-2">
									<FormLabel inputId="email" labelText="Email" />
									<FormInput
										id="email"
										type="email"
										placeholderText="Enter your email"
										name={'email'}
										register={register}
										error={errors.email}
									/>
								</div>
								<div className="flex w-full flex-col gap-2">
									<FormLabel inputId="phoneNumber" labelText="Phone number" />
									<FormInput
										id="phoneNumber"
										type="phone"
										placeholderText="Enter your phone number"
										name={'phoneNumber'}
										register={register}
										error={errors.phoneNumber}
									/>
								</div>
							</div>
							<div className="mx-auto w-3/5">
								<div className={`flex w-full flex-col gap-2`}>
									<FormLabel inputId="address" labelText="Address" />

									{mapBoxAccessToken ? (
										<AddressAutofill accessToken={mapBoxAccessToken}>
											<FormInput
												id="address"
												type="text"
												placeholderText="Enter your home address"
												autoComplete="address-line1"
												name={'address'}
												register={register}
												error={errors.address}
												showErrorText={false}
											/>
										</AddressAutofill>
									) : (
										<FormInput
											id="address"
											type="text"
											placeholderText="Enter your home address"
											autoComplete="address-line1"
											name={'address'}
											register={register}
											error={errors.address}
										/>
									)}
									{errors.address && (
										<p className="text-service-red -mt-1 text-sm">
											{errors.address.message}
										</p>
									)}
								</div>
							</div>
							<div className="mx-auto flex w-3/5 flex-row gap-4">
								<div className="flex w-full flex-col gap-2">
									<FormLabel inputId="city" labelText="City" />
									<FormInput
										id="city"
										type="text"
										placeholderText="Enter your city"
										autoComplete="address-level2"
										name={'city'}
										register={register}
										error={errors.city}
									/>
								</div>
							</div>
							<div className="mx-auto flex w-3/5 flex-row gap-4">
								<div className="flex w-full flex-col gap-2">
									<FormLabel inputId="state" labelText="State" />
									<FormInput
										id="state"
										type="text"
										placeholderText="Enter your state"
										autoComplete="address-level1"
										name={'state'}
										register={register}
										error={errors.state}
									/>
								</div>
							</div>
							<div className="mx-auto flex w-3/5 flex-row gap-4">
								<div className="flex w-full flex-col gap-2">
									<FormLabel inputId="zipCode" labelText="Zip Code" />
									<FormInput
										id="zipCode"
										type="text"
										placeholderText="Enter your Zip Code"
										autoComplete="postal-code"
										name={'zipCode'}
										register={register}
										error={errors.zipCode}
									/>
								</div>
								<div className="flex w-full flex-row items-center gap-4">
									<div className={clsx('translate-y-4', 'transform')}>
										<span className={clsx('mr-3')}>
											<FormCheckBox
												id="isFirstTimeClient"
												defaultValue={true}
												name={'isFirstTimeClient'}
												register={register}
											/>
										</span>
										<FormLabel
											inputId="isFirstTimeClient"
											labelText="Is this your first time using Beantown's services?"
										/>
									</div>
								</div>
							</div>
						</div>
						<button
							type="submit"
							className="bg-primary-shade-1 para-2 mx-auto mt-2 w-1/3 rounded-xl py-3 text-white "
						>
							Submit information
						</button>
					</form>
				</section>
			) : (
				<section
					id="membershipForm"
					className="flex flex-col items-center rounded-2xl bg-white"
				>
					<div className="form-header w-full">
						<div className="flex w-full flex-col items-center border-b bg-white">
							<div className="image-wrapper relative mb-4 h-[50px] w-[150px]">
								<Image
									alt={logoDark?.image?.asset?.altText || ''}
									fill={true}
									priority={true}
									src={logoDark?.image?.asset?.url || ''}
								/>
							</div>
						</div>
					</div>
					<div className="mt-6 mb-6 grid grid-cols-3 gap-2 px-2">
						{activeServiceMembership?.serviceMembershipCards?.map(
							(membership: any, index: number) => {
								return (
									<button
										key={index}
										onClick={() => setSelectedMembership(membership)}
										className={clsx(
											'rounded-lg border py-3 px-3 text-center text-sm',
											{
												'bg-secondary-shade-1   text-white':
													membership == selectedMembership,
											}
										)}
									>
										{membership?.membershipTitle}
									</button>
								);
							}
						)}
					</div>
					<span className="subtitle text-primary-shade-1">
						Membership Inquiry
					</span>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="form-body flex w-full flex-col px-4 py-4"
					>
						<div className="flex flex-col gap-4">
							<div className="flex w-full flex-col gap-2">
								<FormLabel inputId="firstName" labelText="First Name" />
								<FormInput
									id="firstName"
									placeholderText="Enter your first name"
									name={'firstName'}
									register={register}
									error={errors.firstName}
								/>
							</div>
							<div className="flex w-full flex-col gap-2">
								<FormLabel inputId="lastName" labelText="Last Name" />
								<FormInput
									id="lastName"
									placeholderText="Enter your last name"
									name={'lastName'}
									register={register}
									error={errors.lastName}
								/>
							</div>
							<div className="flex w-full flex-col gap-2">
								<FormLabel inputId="email" labelText="Email" />
								<FormInput
									id="email"
									type="email"
									placeholderText="Enter your mail"
									name={'email'}
									register={register}
									error={errors.email}
								/>
							</div>
							<div className="flex w-full flex-col gap-2">
								<FormLabel inputId="phoneNumber" labelText="Phone number" />
								<FormInput
									id="phoneNumber"
									type="phone"
									placeholderText="Enter your phone number, eg. 5551234567"
									name={'phoneNumber'}
									register={register}
									error={errors.phoneNumber}
								/>
							</div>
							<div className="flex w-full flex-col gap-2">
								<FormLabel inputId="address" labelText="Address" />
								{mapBoxAccessToken ? (
									<AddressAutofill accessToken={mapBoxAccessToken}>
										<FormInput
											id="address"
											type="text"
											placeholderText="Enter your home address"
											autoComplete="address-line1"
											name={'address'}
											register={register}
											error={errors.address}
											showErrorText={false}
										/>
									</AddressAutofill>
								) : (
									<FormInput
										id="address"
										type="text"
										placeholderText="Enter your home address"
										autoComplete="address-line1"
										name={'address'}
										register={register}
										error={errors.address}
									/>
								)}

								{errors.address && (
									<p className="text-service-red -mt-1 text-sm">
										{errors.address.message}
									</p>
								)}
							</div>
							<div className="flex w-full flex-col gap-2">
								<FormLabel inputId="city" labelText="City" />
								<FormInput
									id="city"
									type="text"
									placeholderText="Enter your city"
									autoComplete="address-level2"
									name={'city'}
									register={register}
									error={errors.city}
								/>
							</div>
							<div className="flex w-full flex-col gap-2">
								<div className="flex w-full flex-col gap-2">
									<FormLabel inputId="state" labelText="State" />
									<FormInput
										id="state"
										type="text"
										placeholderText="Enter your state"
										autoComplete="address-level1"
										name={'state'}
										register={register}
										error={errors.state}
									/>
								</div>
							</div>
							<div className="flex w-full flex-col gap-2">
								<FormLabel inputId="zipCode" labelText="Zip Code" />
								<FormInput
									id="zipCode"
									type="text"
									placeholderText="Enter your Zip Code"
									autoComplete="postal-code"
									name={'zipCode'}
									register={register}
									error={errors.zipCode}
								/>
							</div>
							<div className="flex w-full flex-row items-center gap-4">
								<FormCheckBox
									id="isFirstTimeClient"
									defaultValue={true}
									register={register}
									name={'isFirstTimeClientClient'}
								/>
								<FormLabel
									inputId="isFirstTimeClient"
									labelText="Is this your first time using Beantown's services?"
								/>
							</div>
						</div>
						<button
							type="submit"
							className="bg-primary-shade-1 para-2 mx-auto mt-6 w-full rounded-xl py-3 text-white "
						>
							Submit information
						</button>
					</form>
				</section>
			)}
		</>
	);
};
