import React, { Fragment, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
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

	const { logoDesktop, logoMobile } = props;
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	return (
		<section className="2xl:padding-for-section absolute w-full px-5">
			<Popover className="relative z-30">
				<div
					className={clsx(
						'flex items-center  justify-between py-4 lg:p-0',
						props.fontColor
					)}
				>
					<div className=" align-middle  ">
						<Link href="/">
							<div className="image-wrapper relative h-[80px] w-[230px]">
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
							onClick={() => setMobileMenuOpen(true)}
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
													//open ? 'text-gray-900' : 'text-gray-500',
													'min-w-32 flex  items-center rounded-sm  px-3 py-1  '
												)}
											>
												<span className="para-4 lg:para-3 flex-1 pr-1 ">
													{linkGroup?.groupTitle}
												</span>
												<ChevronDownIcon
													// className={classNames(
													// 	'h-4 w-4 transform fill-current transition duration-150 ease-in-out group-hover:-rotate-180'
													// )}
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
																		<a
																			key={index}
																			href={link?.href || '/'}
																			//className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
																		>
																			{/* <link.icon
																				className="h-6 w-6 flex-shrink-0 text-indigo-600"
																				aria-hidden="true"
																			/> */}
																			<div className="ml-4 flex items-center">
																				<div className="icon-wrapper">
																					<IconComponent
																						className={classNames(
																							'h-4 w-4 transform text-red-800 transition duration-150 ease-in-out group-hover:-rotate-180'
																						)}
																						// className={classNames(
																						// 	open ? 'rotate-180' : '',
																						// 	'h-5 w-5 flex-none'
																						// )}
																						aria-hidden="true"
																					/>
																				</div>
																				<span className="para-4 lg:para-3 text-primary-shade-1 rounded-sm px-3 py-1">
																					{link?.linkText}
																				</span>
																			</div>
																		</a>
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

				<Dialog
					as="div"
					className="lg:hidden"
					open={mobileMenuOpen}
					onClose={setMobileMenuOpen}
				>
					<div className="fixed inset-0 z-10 " />
					<Dialog.Panel className="bg-primary-white-shade-1 fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm ">
						<div className="flex items-center justify-between">
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
							<button
								type="button"
								className="  inline-flex items-center justify-center rounded-md  p-2  "
								onClick={() => setMobileMenuOpen(false)}
							>
								<span className="sr-only">Close menu</span>
								<XMarkIcon className="h-6 w-6" aria-hidden="true" />
							</button>
						</div>
						<div className="mt-6 ">
							<div className="-my-6 divide-y divide-gray-500/10">
								<div className="space-y-2 py-6">
									{navLinks?.map((link, index) => {
										return (
											<Link
												key={index}
												href={link?.href || '/'}
												className="para-4 lg:para-3 group inline-block py-2  "
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
																linkGroup?.links?.map((link, index) => (
																	<Disclosure.Button
																		key={index}
																		as="a"
																		href={link?.href || ''}
																		className="para-4 !font-neuePlak  block rounded-lg py-2 pl-6 pr-3 "
																	>
																		<span className="para-4 !font-neuePlak !font-light">
																			{link?.linkText}
																		</span>
																	</Disclosure.Button>
																))}
														</Disclosure.Panel>
													</>
												)}
											</Disclosure>
										);
									})}
								</div>
								<div className="py-6">{props.children}</div>
							</div>
						</div>
					</Dialog.Panel>
				</Dialog>
			</Popover>
		</section>
	);
}
