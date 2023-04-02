import React, { useContext, useState, FormEvent, ChangeEvent } from 'react';
import toast from 'react-hot-toast';
import { GlobalContext } from '../../contexts/global/global.context';
import { MembershipsContentProps } from '../../pages/memberships';
import { GlobalContextProps } from '../../typing/common/interfaces/contexts.interface';

import Image from 'next/image';
import FormLabel from '../atoms/form-label.atom';
import FormInput from '../atoms/form-input.atom';
import { ServiceMembershipCard } from '../../typing/gql/graphql';
import { MembershipsContext } from '../../contexts/memberships/memberships.context';
import clsx from 'clsx';
import useWindowDimensions from '../../lib/hooks/use-window-dimensions.hook';
import { config } from 'lib/config';

import dynamic from 'next/dynamic';
import { CreateBookingInboundDto } from '@lib/api/crm/service-titan/createBooking.handler';
import { createBooking } from '@lib/clients/services/crm/booking.crm.service';
import FormCheckBox from 'components/atoms/form-checkbox';

const AddressAutofill = dynamic(
	() => import('@mapbox/search-js-react').then((c) => c.AddressAutofill),
	{
		ssr: false,
	}
);

interface Props {
	onSumissionSuccess: (choice: ServiceMembershipCard) => void;
}

export const MembershipForm: React.FC<Props> = ({ onSumissionSuccess }) => {
	const { pageContent } =
		useContext<GlobalContextProps<MembershipsContentProps>>(GlobalContext);
	const { selectedMembership, setSelectedMembership } =
		useContext(MembershipsContext);
	const { activeServiceMembership } = useContext(MembershipsContext);
	const { width } = useWindowDimensions();
	const mapBoxAccessToken = config.mapBoxAccessToken;

	// ***************
	const [firstName, setFirstName] = useState<string>('');
	const [lastName, setLastName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [phoneNumber, setPhoneNumber] = useState<string>('');

	const [address, setAddres] = useState<string>('');
	const [city, setCity] = useState<string>('');
	const [state, setState] = useState<string>('');
	const [zipCode, setZipCode] = useState<string>('');
	// TODO:
	const [isFirstTimeClient, setIsFirstTimeClient] = useState<boolean>(true);
	// **************

	if (!pageContent) {
		return null;
	}
	if (!activeServiceMembership) {
		return null;
	}

	const pageData = pageContent.page[0];
	const { logoDark } = pageData;

	// **************
	const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
		setFirstName(event.target.value);
	};

	const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
		setLastName(event.target.value);
	};

	const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};

	const handlePhoneNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
		setPhoneNumber(event.target.value);
	};

	const handleAddressChange = (event: ChangeEvent<HTMLInputElement>) => {
		setAddres(event.target.value);
	};

	const handleCityChange = (event: ChangeEvent<HTMLInputElement>) => {
		setCity(event.target.value);
	};

	const handleStateChange = (event: ChangeEvent<HTMLInputElement>) => {
		setState(event.target.value);
	};

	const handleZipCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
		setZipCode(event.target.value);
	};

	const toggleIsFirstTimeClient = () => {
		setIsFirstTimeClient((state) => !state);
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		// Submit form data to server
		if (selectedMembership) {
			const bookingDetails: CreateBookingInboundDto = {
				name: `${firstName} ${lastName}`,
				summary: `Interested in the ${selectedMembership.membershipTitle} Membership for ${activeServiceMembership?.name} Services`,
				isFirstTimeClient: isFirstTimeClient,
				contacts: [
					{
						type: 'Email',
						value: email,
					},
					{
						type: 'Phone',
						value: phoneNumber,
					},
				],
				address: {
					street: address,
					city: city,
					state: state,
					zip: zipCode,
					country: 'USA',
				},
			};

			const bookingPromise = createBooking(bookingDetails);

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

	// *************

	return (
		<>
			{width > 768 ? (
				<section
					id="membershipForm"
					className="flex min-w-[50vw] flex-col rounded-2xl bg-white"
				>
					<div className="form-header">
						<div className="px-auto flex flex-col items-center border-b bg-white">
							<div className="flex w-3/4 items-center ">
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
						onSubmit={handleSubmit}
						className="form-body flex flex-col py-4"
					>
						<div className="flex flex-col gap-4 py-2 lg:py-5 ">
							<div className="mx-auto flex w-3/5 flex-row gap-4">
								<div className="flex w-full flex-col gap-2">
									<FormLabel inputId="first-name" labelText="First Name" />
									<FormInput
										id="first-name"
										placeholderText="Enter your first name"
										value={firstName}
										onChange={handleFirstNameChange}
									/>
								</div>
								<div className="flex w-full flex-col gap-2">
									<FormLabel inputId="last-name" labelText="Last Name" />
									<FormInput
										id="last-name"
										placeholderText="Enter your last name"
										value={lastName}
										onChange={handleLastNameChange}
									/>
								</div>
							</div>
							<div className="mx-auto flex w-3/5 flex-row gap-4">
								<div className="flex w-full flex-col gap-2">
									<FormLabel inputId="email" labelText="Email" />
									<FormInput
										id="email"
										type="email"
										placeholderText="Enter your mail"
										value={email}
										onChange={handleEmailChange}
									/>
								</div>
								<div className="flex w-full flex-col gap-2">
									<FormLabel inputId="phone-number" labelText="Phone number" />
									<FormInput
										id="phone-number"
										type="phone"
										placeholderText="Enter your phone number"
										value={phoneNumber}
										onChange={handlePhoneNumberChange}
									/>
								</div>
							</div>
							<div className="mx-auto flex w-3/5 flex-row gap-4">
								<div className="flex w-full flex-col gap-2">
									<FormLabel inputId="address" labelText="Address" />
									{mapBoxAccessToken ? (
										<AddressAutofill accessToken={mapBoxAccessToken}>
											<FormInput
												id="address"
												type="text"
												placeholderText="Enter your home address"
												autoComplete="address-line1"
												value={address}
												onChange={handleAddressChange}
											/>
										</AddressAutofill>
									) : (
										<FormInput
											id="address"
											type="text"
											placeholderText="Enter your home address"
											autoComplete="address-line1"
											value={address}
											onChange={handleAddressChange}
										/>
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
										value={city}
										onChange={handleCityChange}
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
										value={state}
										onChange={handleStateChange}
									/>
								</div>
							</div>
							<div className="mx-auto flex w-3/5 flex-row gap-4">
								<div className="flex w-full flex-col gap-2">
									<FormLabel inputId="zipcode" labelText="Zip Code" />
									<FormInput
										id="zipcode"
										type="text"
										placeholderText="Enter your Zip Code"
										autoComplete="postal-code"
										value={zipCode}
										onChange={handleZipCodeChange}
									/>
								</div>
								<div className="flex w-full flex-row items-center gap-4">
									<div className={clsx('translate-y-4', 'transform')}>
										<span className={clsx('mr-3')}>
											<FormCheckBox
												id="isFirstTime"
												checked={isFirstTimeClient}
												onChange={toggleIsFirstTimeClient}
											/>
										</span>
										<FormLabel
											inputId="isFirstTime"
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
						onSubmit={handleSubmit}
						className="form-body flex w-full flex-col px-4 py-4"
					>
						<div className="flex flex-col gap-4">
							<div className="flex w-full flex-col gap-2">
								<FormLabel inputId="first-name" labelText="First Name" />
								<FormInput
									id="first-name"
									placeholderText="Enter your first name"
									value={firstName}
									onChange={handleFirstNameChange}
								/>
							</div>
							<div className="flex w-full flex-col gap-2">
								<FormLabel inputId="last-name" labelText="Last Name" />
								<FormInput
									id="last-name"
									placeholderText="Enter your last name"
									value={lastName}
									onChange={handleLastNameChange}
								/>
							</div>
							<div className="flex w-full flex-col gap-2">
								<FormLabel inputId="email" labelText="Email" />
								<FormInput
									id="email"
									type="email"
									placeholderText="Enter your mail"
									value={email}
									onChange={handleEmailChange}
								/>
							</div>
							<div className="flex w-full flex-col gap-2">
								<FormLabel inputId="phone-number" labelText="Phone number" />
								<FormInput
									id="phone-number"
									type="phone"
									placeholderText="Enter your phone number"
									value={phoneNumber}
									onChange={handlePhoneNumberChange}
								/>
							</div>
							<div className="flex w-full flex-col gap-2">
								<FormLabel inputId="home-address" labelText="Address" />
								{mapBoxAccessToken ? (
									<AddressAutofill accessToken={mapBoxAccessToken}>
										<FormInput
											id="address"
											type="text"
											placeholderText="Enter your home address"
											autoComplete="address-line1"
											value={address}
											onChange={handleAddressChange}
										/>
									</AddressAutofill>
								) : (
									<FormInput
										id="address"
										type="text"
										placeholderText="Enter your home address"
										autoComplete="address-line1"
										value={address}
										onChange={handleAddressChange}
									/>
								)}
							</div>
							<div className="flex w-full flex-col gap-2">
								<FormLabel inputId="city" labelText="City" />
								<FormInput
									id="city"
									type="text"
									placeholderText="Enter your city"
									autoComplete="address-level2"
									value={city}
									onChange={handleCityChange}
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
										value={state}
										onChange={handleStateChange}
									/>
								</div>
							</div>
							<div className="flex w-full flex-col gap-2">
								<FormLabel inputId="zipcode" labelText="Zip Code" />
								<FormInput
									id="zipcode"
									type="text"
									placeholderText="Enter your Zip Code"
									autoComplete="postal-code"
									value={zipCode}
									onChange={handleZipCodeChange}
								/>
							</div>
							<div className="flex w-full flex-row items-center gap-4">
								<FormCheckBox
									id="isFirstTime"
									checked={isFirstTimeClient}
									onChange={toggleIsFirstTimeClient}
								/>
								<FormLabel
									inputId="isFirstTime"
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
