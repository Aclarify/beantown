import React, { Fragment } from 'react';
import { Disclosure, Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Nav } from '@typing/gql/graphql';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import dynamic from 'next/dynamic';

function classNames(...classes: any) {
	return classes.filter(Boolean).join(' ');
}

interface IProps {
	fontColor?: string;
	logoDesktop: any;
	logoMobile: any;
	content: Nav;
	children: React.ReactNode;
}

export default function Header(props: IProps) {
	const { navLinks, navGroup } = props.content;
	const iconColor = 'text-primary-black';
	const { logoDesktop, logoMobile } = props;
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
							<Link href="/">
								<div className="image-wrapper relative h-[50px] w-[136px] md:h-[80px] md:w-[230px] lg:h-[80px] lg:w-[230px]">
									<Image
										alt={logoDesktop?.asset?.altText || ''}
										fill={true}
										priority={true}
										src={logoDesktop?.asset?.url || ''}
									/>
								</div>
							</Link>
						</div>
						<div className=" items-center  lg:hidden">
							<Popover.Button
								className="inline-flex  rounded-md  px-2  "
								aria-label="menu for navigation"
							>
								<span className="sr-only">Open menu</span>
								<Bars3Icon className="h-8 w-8 " aria-hidden="true" />
							</Popover.Button>
						</div>
						<Popover.Group
							as="nav"
							className="para-4 lg:para-3 hidden items-center  lg:flex lg:flex-grow lg:justify-center  "
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
														'min-w-32 flex  items-center rounded-sm  px-3 py-1  '
													)}
												>
													<span className="para-4 lg:para-3 flex-1 pr-1 ">
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
															<div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
																{linkGroup?.links &&
																	linkGroup?.links?.map((link, index) => {
																		const IconComponent = dynamic(async () => {
																			const mod = await import(
																				'@heroicons/react/24/outline'
																			);
																			if (link && link.heroIconName) {
																				/* tslint:disable-next-line */
																				return (mod as any)[link.heroIconName];
																			}
																		}) as React.ComponentType<
																			React.ComponentProps<'svg'>
																		>;
																		return (
																			<Link key={index} href={link?.href || ''}>
																				<div className="ml-4 flex items-center">
																					<div className="icon-wrapper">
																						<IconComponent
																							className={classNames(
																								`${iconColor} h-6 w-6 transform `
																							)}
																							aria-hidden="true"
																						/>
																					</div>
																					<span className="para-4 lg:para-3 text-primary-black rounded-sm px-3 py-1">
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
							<div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
								<div className="px-5 pt-5 pb-6">
									<div className="flex items-center justify-between">
										<div className=" align-middle  ">
											<Link href="/">
												<div className="image-wrapper relative h-[50px] w-[136px] md:h-[80px] md:w-[230px]">
													<Image
														alt={logoMobile?.asset?.altText || ''}
														fill={true}
														priority={true}
														src={logoMobile?.asset?.url || ''}
													/>
												</div>
											</Link>
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
														className=" group inline-block py-2  "
													>
														<span className="para-4 !font-neuePlak !font-medium">
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
																<Disclosure.Button className="  flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5  ">
																	<span className="para-4 !font-neuePlak  !font-medium">
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
																			const IconComponent = dynamic(
																				async () => {
																					const mod = await import(
																						'@heroicons/react/24/outline'
																					);
																					if (link && link.heroIconName) {
																						/* tslint:disable-next-line */
																						return (mod as any)[
																							link.heroIconName
																						];
																					}
																				}
																			) as React.ComponentType<
																				React.ComponentProps<'svg'>
																			>;
																			return (
																				<Disclosure.Button
																					key={index}
																					as="a"
																					href={link?.href || ''}
																					className="para-4 !font-neuePlak  block rounded-lg py-2 pl-6 pr-3 "
																				>
																					<div className="ml-4 flex items-center">
																						<div className="icon-wrapper">
																							<IconComponent
																								className={classNames(
																									`${iconColor} h-6 w-6 transform `
																								)}
																								aria-hidden="true"
																							/>
																						</div>
																						<span className="para-4 text-primary-black rounded-sm px-3 py-1">
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
							</div>
						</Popover.Panel>
					</Transition>
				</>
			</Popover>
		</section>
	);
}
