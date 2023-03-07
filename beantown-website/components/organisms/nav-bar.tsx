import React, { Fragment, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import {
	ArrowPathIcon,
	Bars3Icon,
	BookmarkSquareIcon,
	CalendarIcon,
	ChartBarIcon,
	ChartPieIcon,
	CursorArrowRaysIcon,
	FingerPrintIcon,
	LifebuoyIcon,
	PhoneIcon,
	PlayIcon,
	ShieldCheckIcon,
	Squares2X2Icon,
	XMarkIcon,
	SquaresPlusIcon,
} from '@heroicons/react/24/outline';
import { Nav } from '@typing/gql/graphql';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import Image from 'next/image';

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

export default function RefinedHeader(props: IProps) {
	const { navLinks, navGroup } = props.content;
	const childLinks = navGroup?.map((nav) => nav?.links).flat();

	const allNavLinks = [
		...(navLinks ? navLinks : []),
		...(childLinks ? childLinks : []),
	];
	const { logoDesktop, logoMobile } = props;
	const childNavLinks = allNavLinks.filter((element) => {
		return element !== null;
	});
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	console.log('navGroup-->', navGroup);
	return (
		<section className="2xl:padding-for-section absolute w-full px-5">
			<Popover className="relative z-30">
				<div className="mx-auto max-w-7xl px-6">
					<div className="flex items-center justify-between py-6  text-white md:justify-start md:space-x-10">
						<div className=" align-middle  ">
							<Link href="/">
								<Image
									alt={logoDesktop?.asset?.altText || ''}
									width={200}
									height={300}
									priority={true}
									src={logoDesktop?.asset?.url || ''}
								/>
							</Link>
						</div>
						<div className=" items-center text-white lg:hidden">
							<Popover.Button
								className="inline-flex items-center justify-center rounded-md  p-2  "
								aria-label="menu for navigation"
								onClick={() => setMobileMenuOpen(true)}
							>
								<span className="sr-only">Open menu</span>
								<Bars3Icon className="h-8 w-8 " aria-hidden="true" />
							</Popover.Button>
						</div>
						<Popover.Group as="nav" className="hidden space-x-10 md:flex">
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
									<Popover className="relative" key={index}>
										{({ open }) => (
											<>
												<Popover.Button
													className={classNames(
														//open ? 'text-gray-900' : 'text-gray-500',
														'group inline-flex items-center rounded-md text-base  font-medium text-white hover:text-gray-900 focus:outline-none focus:ring-2  focus:ring-offset-2'
													)}
												>
													<span>{linkGroup?.groupTitle}</span>
													<ChevronDownIcon
														className={classNames(
															// open ? 'text-gray-600' : 'text-gray-400',
															// 'ml-2 h-5 w-5 group-hover:text-gray-500'
															'ml-2 h-5 w-5 text-white'
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
														<div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
															<div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
																{linkGroup?.links &&
																	linkGroup?.links?.map((link, index) => {
																		return (
																			<a
																				key={index}
																				href={link?.href || '/'}
																				className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
																			>
																				{/* <link.icon
																				className="h-6 w-6 flex-shrink-0 text-indigo-600"
																				aria-hidden="true"
																			/> */}
																				<div className="ml-4">
																					<p className="text-base font-medium text-gray-900">
																						{link?.linkText}
																					</p>
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
				</div>

				<Dialog
					as="div"
					className="lg:hidden"
					open={mobileMenuOpen}
					onClose={setMobileMenuOpen}
				>
					<div className="fixed inset-0 z-10" />
					<Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
						<div className="flex items-center justify-between">
							<a href="#" className="-m-1.5 p-1.5">
								<Image
									alt={logoMobile?.asset?.altText || ''}
									width={150}
									height={100}
									priority={true}
									src={logoMobile?.asset?.url || ''}
								/>
							</a>
							<button
								type="button"
								className="-m-2.5 rounded-md p-2.5 text-gray-700"
								onClick={() => setMobileMenuOpen(false)}
							>
								<span className="sr-only">Close menu</span>
								<XMarkIcon className="h-6 w-6" aria-hidden="true" />
							</button>
						</div>
						<div className="mt-6 flow-root">
							<div className="-my-6 divide-y divide-gray-500/10">
								<div className="space-y-2 py-6">
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
											<Disclosure as="div" className="-mx-3" key={index}>
												{({ open }) => (
													<>
														<Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
															{linkGroup?.groupTitle}
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
																		className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
																	>
																		{link?.linkText}
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

				{/* <Transition
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
						className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
					>
						<div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
							<div className="px-5 pt-5 pb-6">
								<div className="flex items-center justify-between">
									<div>
										<img
											className="h-8 w-auto"
											src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
											alt="Your Company"
										/>
									</div>
									<div className="-mr-2">
										<Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
											<span className="sr-only">Close menu</span>
											<XMarkIcon className="h-6 w-6" aria-hidden="true" />
										</Popover.Button>
									</div>
								</div>
								<div className="mt-6">
									<nav className="grid gap-y-8">
										{solutions.map((item) => (
											<a
												key={item.name}
												href={item.href}
												className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
											>
												<item.icon
													className="h-6 w-6 flex-shrink-0 text-indigo-600"
													aria-hidden="true"
												/>
												<span className="ml-3 text-base font-medium text-gray-900">
													{item.name}
												</span>
											</a>
										))}
									</nav>
								</div>
							</div>
							<div className="space-y-6 py-6 px-5">
								<div className="grid grid-cols-2 gap-y-4 gap-x-8">
									<a
										href="#"
										className="text-base font-medium text-gray-900 hover:text-gray-700"
									>
										Pricing
									</a>

									<a
										href="#"
										className="text-base font-medium text-gray-900 hover:text-gray-700"
									>
										Docs
									</a>
									{resources.map((item) => (
										<a
											key={item.name}
											href={item.href}
											className="text-base font-medium text-gray-900 hover:text-gray-700"
										>
											{item.name}
										</a>
									))}
								</div>
								<div>
									<a
										href="#"
										className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
									>
										{props.children}
									</a>
								</div>
							</div>
						</div>
					</Popover.Panel>
				</Transition> */}
			</Popover>
		</section>
	);
}
