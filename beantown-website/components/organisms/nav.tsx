import Link from 'next/link';
import React, { useContext, Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
	Bars3Icon,
	ChevronDownIcon,
	XMarkIcon,
} from '@heroicons/react/24/outline';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HomePageContentProps } from 'pages';
import Image from 'next/image';
import Button from 'components/atoms/button.atom';

export default function Nav() {
	const { pageContent } =
		useContext<GlobalContextProps<HomePageContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const homeData = pageContent.home[0];
	const { logo } = homeData;
	const navData = pageContent.header[0];
	const { navLinks, navGroup, headerButton } = navData;
	const childLinks = navGroup?.map((nav) => nav?.links).flat();
	console.log('childLinks:::', childLinks?.flat());

	const allNavLinks = [
		...(navLinks ? navLinks : []),
		...(childLinks ? childLinks : []),
	];
	// console.log('navGroup-->', navGroup?[0]?.);
	return (
		// <nav className="absolute w-full  px-10 z-10">
		// 	<div className="hidden md:flex  mx-auto  justify-between items-center">
		// 		<div className="align-middle items-center">
		// 			<Image
		// 				alt={logo?.asset?.altText || ''}
		// 				width={200}
		// 				height={300}
		// 				src={logo?.asset?.url || ''}
		// 			/>
		// 		</div>
		// 		<div className=" text-white items-center para-4 md:para-3 justify-center">
		// 			{navLinks?.map((link, index) => {
		// 				return (
		// 					<Link
		// 						key={index}
		// 						href={link?.href || '/'}
		// 						className="p-8 pr-1 group inline-block"
		// 					>
		// 						{link?.linkText}
		// 					</Link>
		// 				);
		// 			})}

		// 			{navGroup?.map((linkGroup, index) => {
		// 				return (
		// 					<div key={index} className="group inline-block">
		// 						<Link
		// 							href={'/'}
		// 							className="outline-none focus:outline-none  px-3 py-1  rounded-sm flex items-center min-w-32"
		// 						>
		// 							<span className="pr-1 flex-1 para-4 md:para-3 ">
		// 								{linkGroup?.groupTitle}
		// 							</span>
		// 							<span>
		// 								<svg
		// 									className="fill-current h-4 w-4 transform group-hover:-rotate-180
		//                 transition duration-150 ease-in-out"
		// 									xmlns="http://www.w3.org/2000/svg"
		// 									viewBox="0 0 20 20"
		// 								>
		// 									<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
		// 								</svg>
		// 							</span>
		// 						</Link>
		// 						<ul className="rounded-sm transform scale-0 group-hover:scale-100 absolute  transition duration-500 ease-in-out origin-top min-w-32">
		// 							{linkGroup?.links?.map((link, index) => {
		// 								return (
		// 									<Link key={index} href={link?.href || '/'}>
		// 										<li className="rounded-sm px-3 py-1 para-4 md:para-3 ">
		// 											{link?.linkText}
		// 										</li>
		// 									</Link>
		// 								);
		// 							})}
		// 						</ul>
		// 					</div>
		// 				);
		// 			})}
		// 		</div>
		// 		<div className="">
		// 			{/* <button className="border rounded-lg text-lg font-light md:text-xl bg-white py-2 px-8">
		// 				{headerButton?.text}
		// 			</button> */}
		// 			<Link href={'/'}>
		// 				<Button fontColor="text-primary-shade-1" bgColor="bg-white">
		// 					{headerButton?.text}
		// 				</Button>
		// 			</Link>
		// 		</div>
		// 	</div>
		// </nav>
		<section className="relative ">
			<Popover className="relative z-10   ">
				<div className="mx-auto max-w-7xl px-6  sm:px-8 ">
					<div className="flex items-center justify-between py-6 lg:py-0  md:justify-start md:space-x-10">
						<div className="flex justify-start flex-shrink">
							<div className="align-middle items-center">
								<Image
									alt={logo?.asset?.altText || ''}
									width={200}
									height={300}
									src={logo?.asset?.url || ''}
								/>
							</div>
						</div>
						<div className="-my-2 -mr-2 md:hidden">
							<Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
								<Bars3Icon className="h-6 w-6" aria-hidden="true" />
							</Popover.Button>
						</div>
						{/* == Links == */}
						<Popover.Group
							as="nav"
							className="hidden space-x-10 md:justify-end md:flex md:flex-grow text-black "
						>
							{navLinks &&
								navLinks.length &&
								navLinks.map((link, index) => (
									<Link
										key={index}
										href={link?.href || '/'}
										className="p-8 pr-1 group inline-block"
									>
										{link?.linkText}
									</Link>
								))}
							{navGroup &&
								navGroup.length &&
								navGroup.map((childLink, index) => (
									<Popover className="relative" key={index}>
										{({ open }) => (
											<>
												<Popover.Button className="flex w-full justify-between rounded-lg  px-4 py-2 text-left subtitle-4 md:subtitle-2 text-primary-shade-1 hover:bg-black-200 focus:outline-none focus-visible:ring focus-visible:ring-black-500 focus-visible:ring-opacity-75">
													<span className="text-black">
														{navGroup[index]?.linkGroupName || ''}
													</span>
													<ChevronDownIcon
														className={`${
															open ? 'rotate-180 transform' : ''
														} h-5 w-5 text-black-500`}
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
													<Popover.Panel className="absolute left-[-41%] z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 ">
														<div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
															<div className="relative grid gap-6 bg-white text-black px-5 py-6 sm:gap-8 sm:p-8">
																{childLink?.links &&
																	childLink?.links.length &&
																	childLink?.links.map(
																		(link, index) =>
																			link?.linkName && (
																				<Link
																					key={link?.linkName || ''}
																					href={link?.href || '/'}
																					className="rounded-sm px-3 py-1 para-4 md:para-3"
																				>
																					{link?.linkText}
																				</Link>
																			)
																	)}
															</div>
														</div>
													</Popover.Panel>
												</Transition>
											</>
										)}
									</Popover>
								))}
						</Popover.Group>
					</div>
				</div>

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
						className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
					>
						<div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
							<div className="px-5 pt-5 pb-6">
								<div className="flex items-center justify-between">
									<div className="align-middle items-center">
										<Image
											alt={logo?.asset?.altText || ''}
											width={200}
											height={300}
											src={logo?.asset?.url || ''}
										/>
									</div>
									<div className="-mr-2">
										<Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
											<XMarkIcon className="h-6 w-6" aria-hidden="true" />
										</Popover.Button>
									</div>
								</div>
								<div className="mt-6 ">
									<nav className="grid gap-y-8">
										{allNavLinks &&
											allNavLinks.length &&
											allNavLinks.map((link, index) => (
												<Link
													key={index}
													href={link?.href || '/'}
													className="p-8 pr-1 group inline-block"
												>
													{link?.linkText}
												</Link>
											))}
									</nav>
								</div>
							</div>
						</div>
					</Popover.Panel>
				</Transition>
			</Popover>
			<div className="">
				<Link href={'/'}>
					<Button fontColor="text-primary-shade-1" bgColor="bg-white">
						{headerButton?.text}
					</Button>
				</Link>
			</div>
		</section>
	);
}
