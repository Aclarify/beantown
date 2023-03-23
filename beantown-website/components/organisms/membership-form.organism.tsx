import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../../contexts/global/global.context';
import { MembershipsContentProps } from '../../pages/memberships';
import { GlobalContextProps } from '../../typing/common/interfaces/contexts.interface';
import Animate from '../molecules/animate.molecule';
import Image from 'next/image';
import FormLabel from '../atoms/form-label.atom';
import FormInput from '../atoms/form-input.atom';
import { ServiceMembershipCard } from '../../typing/gql/graphql';
import { MembershipsContext } from '../../contexts/memberships/memberships.context';
import clsx from 'clsx';
import useWindowDimensions from '../../lib/hooks/use-window-dimensions.hook';

interface Props {
	onSumissionSuccess: (choice: ServiceMembershipCard) => void;
}

export const MembershipForm: React.FC<Props> = ({ onSumissionSuccess }) => {
	const { pageContent } =
		useContext<GlobalContextProps<MembershipsContentProps>>(GlobalContext);
	const [selectedMembership, setSelectedMemberdship] =
		useState<ServiceMembershipCard | null>();

	const { activeServiceMembership } = useContext(MembershipsContext);

	const { width } = useWindowDimensions();

	useEffect(() => {
		if (activeServiceMembership?.serviceMembershipCards) {
			setSelectedMemberdship(
				activeServiceMembership?.serviceMembershipCards[0]
			);
		}
	}, [activeServiceMembership]);

	if (!pageContent) {
		return null;
	}
	if (!activeServiceMembership) {
		return null;
	}

	const pageData = pageContent.page[0];
	const { logoDark } = pageData;

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		// Submit form data to server
		if (selectedMembership) {
			onSumissionSuccess(selectedMembership);
		}
	};

	return (
		<>
			{width > 768 ? (
				<section
					id="membershipForm"
					className="flex flex-col rounded-2xl bg-white py-4 sm:h-[700px] md:w-[900px] lg:w-[1200px]"
				>
					<div className="form-header">
						<Animate>
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
									<div className="flex-1  px-3 py-4">
										<Animate>
											<span className="subtitle text-primary-shade-1 pb-4 sm:pb-8">
												Membership Inquiry
											</span>
										</Animate>
										<Animate>
											<div className="mt-4 mb-6 grid grid-cols-3 gap-4">
												{activeServiceMembership?.serviceMembershipCards?.map(
													(membership: any, index: number) => {
														return (
															<button
																key={index}
																onClick={() =>
																	setSelectedMemberdship(membership)
																}
																className={clsx(
																	'rounded-lg border py-3 px-4 ',
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
										</Animate>
									</div>
								</div>
							</div>
						</Animate>
					</div>

					<form
						onSubmit={handleSubmit}
						className="form-body flex flex-col py-8"
					>
						<Animate>
							<div className="flex flex-col gap-4 py-2 lg:py-5 ">
								<div className="mx-auto flex w-3/5 flex-row gap-4">
									<div className="flex w-full flex-col gap-2">
										<FormLabel inputId="first-name" labelText="First Name" />
										<FormInput
											id="first-name"
											placeholderText="Enter your first name"
										/>
									</div>
									<div className="flex w-full flex-col gap-2">
										<FormLabel inputId="last-name" labelText="Last Name" />
										<FormInput
											id="last-name"
											placeholderText="Enter your last name"
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
										/>
									</div>
									<div className="flex w-full flex-col gap-2">
										<FormLabel
											inputId="phone-number"
											labelText="Phone number"
										/>
										<FormInput
											id="phone-number"
											type="phone"
											placeholderText="Enter your phone number"
										/>
									</div>
								</div>
								<div className="mx-auto flex w-3/5 flex-row gap-4">
									<div className="flex w-full flex-col gap-2">
										<FormLabel inputId="home-address" labelText="Address" />
										<FormInput
											id="home-address"
											type="address"
											placeholderText="Enter your home address"
										/>
									</div>
								</div>
							</div>
						</Animate>
						<Animate>
							<button
								type="submit"
								className="bg-primary-shade-1 para-2 mx-auto mt-2 w-1/3 rounded-xl py-3 text-white "
							>
								Submit information
							</button>
						</Animate>
					</form>
				</section>
			) : (
				<section
					id="membershipForm"
					className="flex flex-col items-center rounded-2xl bg-white py-4"
				>
					<div className="form-header w-full">
						<Animate>
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
						</Animate>
					</div>

					<Animate>
						<div className="mt-6 mb-6 grid grid-cols-3 gap-4 px-4">
							{activeServiceMembership?.serviceMembershipCards?.map(
								(membership: any, index: number) => {
									return (
										<button
											key={index}
											onClick={() => setSelectedMemberdship(membership)}
											className={clsx('rounded-lg border py-3 px-4 ', {
												'bg-secondary-shade-1 text-white':
													membership == selectedMembership,
											})}
										>
											{membership?.membershipTitle}
										</button>
									);
								}
							)}
						</div>
					</Animate>

					<Animate>
						<span className="subtitle text-primary-shade-1">
							Membership Inquiry
						</span>
					</Animate>

					<form
						onSubmit={handleSubmit}
						className="form-body flex w-full flex-col px-4 py-4"
					>
						<Animate>
							<div className="flex flex-col gap-4">
								<div className="flex w-full flex-col gap-2">
									<FormLabel inputId="first-name" labelText="First Name" />
									<FormInput
										id="first-name"
										placeholderText="Enter your first name"
									/>
								</div>
								<div className="flex w-full flex-col gap-2">
									<FormLabel inputId="last-name" labelText="Last Name" />
									<FormInput
										id="last-name"
										placeholderText="Enter your last name"
									/>
								</div>
								<div className="flex w-full flex-col gap-2">
									<FormLabel inputId="email" labelText="Email" />
									<FormInput
										id="email"
										type="email"
										placeholderText="Enter your mail"
									/>
								</div>
								<div className="flex w-full flex-col gap-2">
									<FormLabel inputId="phone-number" labelText="Phone number" />
									<FormInput
										id="phone-number"
										type="phone"
										placeholderText="Enter your phone number"
									/>
								</div>

								<div className="flex w-full flex-col gap-2">
									<FormLabel inputId="home-address" labelText="Address" />
									<FormInput
										id="home-address"
										type="address"
										placeholderText="Enter your home address"
									/>
								</div>
							</div>
						</Animate>
						<Animate>
							<button
								type="submit"
								className="bg-primary-shade-1 para-2 mx-auto mt-6 w-full rounded-xl py-3 text-white "
							>
								Submit information
							</button>
						</Animate>
					</form>
				</section>
			)}
		</>
	);
};