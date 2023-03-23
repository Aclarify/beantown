import React, { Fragment } from 'react';
import { Disclosure, Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Nav } from '@typing/gql/graphql';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import * as OutlineIcons from '@heroicons/react/24/outline';
import BookNowButton from 'components/atoms/book-now-button.atom';

function classNames(...classes: any) {
	return classes.filter(Boolean).join(' ');
}

interface IProps {
	fontColor?: string;
	logoDesktop: any;
	logoMobile: any;
	content: Nav;
	children: React.ReactNode;
	mobileBgColor: string;
	mobileButtonText: string;
}

export default function Header(props: IProps) {
	const { navLinks, navGroup } = props.content;
	const iconColor = 'text-primary-shade-1';
	const { logoDesktop, logoMobile } = props;

	const renderIconComponent = (iconName: string) => {
		if (!iconName) return null;
		if (!OutlineIcons) return null;
		const IconComponent = (OutlineIcons as any)[iconName];
		return (
			<IconComponent
				className={classNames(`${iconColor} h-6 w-6 transform `)}
				aria-hidden="true"
			/>
		);
	};
	return (
		<section className="2xl:padding-for-section absolute w-full px-5">
			<Popover className="relative z-30">
				<>
					{/* Desktop Menu  */}
					<div
						className={clsx(
							'flex items-center  justify-between py-4 lg:p-0',
							props.fontColor
						)}
					>
						<div className=" align-middle  ">
							<div className="image-wrapper relative h-[50px] w-[136px] focus:outline-none md:h-[80px] md:w-[230px]">
								<Link href="/">
									<Image
										alt={logoDesktop?.asset?.altText || ''}
										fill={true}
										priority={true}
										src={logoDesktop?.asset?.url || ''}
									/>
								</Link>
							</div>
						</div>
						<div className=" items-center  lg:hidden">
							<Popover.Button
								className="inline-flex rounded-md px-2 focus:outline-none  "
								aria-label="menu for navigation"
							>
								<span className="sr-only">Open menu</span>
								<Bars3Icon className="h-8 w-8 " aria-hidden="true" />
							</Popover.Button>
						</div>
						<Popover.Group
							as="nav"
							className="para hidden items-center  lg:flex lg:flex-grow lg:justify-center  "
						>
							{navLinks?.map((link, index) => {
								return (
									<Link
										key={index}
										href={link?.href || '/'}
										className="group inline-block p-8"
									>
										{link?.linkText}
									</Link>
								);
							})}

							{navGroup?.map((linkGroup, index) => {
								return (
									<Popover className="group inline-block pl-6" key={index}>
										{({ open }) => (
											<>
												<Popover.Button
													className={classNames(
														'min-w-32 flex  items-center rounded-sm  px-3 py-1 focus:outline-none  '
													)}
												>
													<span className="para flex-1 pr-1  ">
														{linkGroup?.groupTitle}
													</span>
													<ChevronDownIcon
														className={classNames(
															open ? 'rotate-180' : '',
															'h-5 w-5 flex-none'
														)}
														aria-hidden="true"
													/>
												</Popover.Button>

												<Transition
													as={Fragment}
													enter="transition ease-out duration-200"
													enterFrom="opacity-0 translate-y-1"
													enterTo="opacity-100 translate-y-0"
													leave="transition ease-in duration-150"
													leaveFrom="opacity-100 translate-y-0"
													leaveTo="opacity-0 translate-y-1"
												>
													<Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
														<div className="overflow-hidden rounded-lg shadow-lg ">
															<div
																className={classNames(
																	`relative grid gap-4 bg-white  px-5 py-6 sm:gap-6 sm:p-4  `
																)}
															>
																{linkGroup?.links &&
																	linkGroup?.links?.map((link, index) => {
																		return (
																			<Link key={index} href={link?.href || ''}>
																				<div className="ml-4 flex items-center">
																					<div className="icon-wrapper">
																						{link &&
																							link.heroIconName &&
																							renderIconComponent(
																								link.heroIconName
																							)}
																					</div>
																					<span className="para text-primary-black rounded-sm px-3 py-1">
																						{link?.linkText}
																					</span>
																				</div>
																			</Link>
																		);
																	})}
															</div>
														</div>
													</Popover.Panel>
												</Transition>
											</>
										)}
									</Popover>
								);
							})}
						</Popover.Group>
						{props.children}
					</div>
				</>
				<>
					{/* Mobile Menu */}
					<Transition
						as={Fragment}
						enter="duration-200 ease-out"
						enterFrom="opacity-0 scale-95"
						enterTo="opacity-100 scale-100"
						leave="duration-100 ease-in"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale-95"
					>
						<Popover.Panel
							focus
							className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition lg:hidden"
						>
							<div
								className={classNames(
									`${props.mobileBgColor} divide-y-2 divide-gray-50 rounded-lg  shadow-lg  `
								)}
							>
								<div className="px-5 pt-5 pb-6">
									<div className="flex items-center justify-between">
										<div className=" align-middle  ">
											<div className="image-wrapper relative h-[50px] w-[136px] focus:outline-none md:h-[80px] md:w-[230px] ">
												<Link href="/">
													<Image
														alt={logoMobile?.asset?.altText || ''}
														fill={true}
														priority={true}
														src={logoMobile?.asset?.url || ''}
													/>
												</Link>
											</div>
										</div>
										<div className="-mr-2">
											<Popover.Button className="inline-flex items-center justify-center rounded-md  p-2 ">
												<span className="sr-only">Close menu</span>
												<XMarkIcon className="h-6 w-6" aria-hidden="true" />
											</Popover.Button>
										</div>
									</div>
									<div className="mt-6">
										<nav className="grid gap-y-8">
											{navLinks?.map((link, index) => {
												return (
													<Link
														key={index}
														href={link?.href || '/'}
														className=" group inline-block   "
													>
														<span className="subtitle !font-neuePlak !font-medium">
															{link?.linkText}
														</span>
													</Link>
												);
											})}
											{navGroup?.map((linkGroup, index) => {
												return (
													<Disclosure as="div" className="-mx-3" key={index}>
														{({ open }) => (
															<>
																<Disclosure.Button className="  flex w-full items-center justify-between rounded-lg  pl-3 pr-3.5  ">
																	<span className="subtitle !font-neuePlak  !font-medium">
																		{linkGroup?.groupTitle}
																	</span>
																	<ChevronDownIcon
																		className={classNames(
																			open ? 'rotate-180' : '',
																			'h-5 w-5 flex-none'
																		)}
																		aria-hidden="true"
																	/>
																</Disclosure.Button>
																<Disclosure.Panel className="mt-2 space-y-2">
																	{linkGroup?.links &&
																		linkGroup?.links?.map((link, index) => {
																			return (
																				<Disclosure.Button
																					key={index}
																					as="a"
																					href={link?.href || ''}
																					className=" !font-neuePlak  block rounded-lg  pl-6 pr-3 "
																				>
																					<div className="ml-4 flex items-center">
																						<div className="icon-wrapper">
																							{link &&
																								link.heroIconName &&
																								renderIconComponent(
																									link.heroIconName
																								)}
																						</div>
																						<span className="para text-primary-black rounded-sm px-3 py-1">
																							{link?.linkText}
																						</span>
																					</div>
																				</Disclosure.Button>
																			);
																		})}
																</Disclosure.Panel>
															</>
														)}
													</Disclosure>
												);
											})}
										</nav>
									</div>
								</div>
								<div className="space-y-6 py-6 px-5">
									<BookNowButton
										fontColor="text-white"
										bgColor="bg-primary-shade-1"
										buttonStyle="button flex w-full items-center justify-center  shadow-sm"
									>
										{props.mobileButtonText}
									</BookNowButton>
								</div>
							</div>
						</Popover.Panel>
					</Transition>
				</>
			</Popover>
		</section>
	);
}
