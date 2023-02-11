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

	const allNavLinks = [
		...(navLinks ? navLinks : []),
		...(childLinks ? childLinks : []),
	];

	const childNavLinks = allNavLinks.filter((element) => {
		return element !== null;
	});

	return (
		<>
			<section className="lg:padding-for-section absolute w-full">
				<Popover className="relative z-30">
					<div className=" mx-auto flex items-center  justify-between px-4 py-6 text-white lg:p-0">
						<div className="hidden align-middle lg:flex ">
							<Image
								alt={logo?.asset?.altText || ''}
								width={200}
								height={300}
								src={logo?.asset?.url || ''}
							/>
						</div>
						<div className="flex align-middle lg:hidden">
							<Image
								alt={logo?.asset?.altText || ''}
								width={100}
								height={100}
								src={logo?.asset?.url || ''}
							/>
						</div>
						<div className="-my-2  lg:hidden">
							<Popover.Button
								className="inline-flex rounded-md p-2 "
								aria-label="menu for navigation"
							>
								<Bars3Icon className="h-6 w-6" aria-hidden="true" />
							</Popover.Button>
						</div>
						<div className="para-4 lg:para-3 hidden items-center  lg:flex lg:flex-grow lg:justify-center  ">
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
									<div key={index} className="group inline-block pl-8">
										<Link
											href={'/'}
											className="min-w-32 flex  items-center rounded-sm  px-3 py-1 outline-none focus:outline-none"
										>
											<span className="para-4 lg:para-3 flex-1 pr-1 ">
												{linkGroup?.groupTitle}
											</span>
											<span>
												<svg
													className="h-4 w-4 transform fill-current transition duration-150 ease-in-out group-hover:-rotate-180"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
												>
													<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
												</svg>
											</span>
										</Link>
										<ul className="min-w-32 absolute origin-top scale-0 transform  rounded-sm transition duration-500 ease-in-out group-hover:scale-100">
											{linkGroup?.links?.map((link, index) => {
												return (
													<Link
														key={index}
														href={link?.href || '/'}
														aria-label={`Go to ${link?.linkText} page`}
													>
														<li className="para-4 lg:para-3 rounded-sm px-3 py-1 ">
															{link?.linkText}
														</li>
													</Link>
												);
											})}
										</ul>
									</div>
								);
							})}
						</div>
						<div className=" hidden lg:flex lg:justify-end ">
							<Button fontColor="text-primary-shade-1" bgColor="bg-white">
								{headerButton?.text}
							</Button>
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
							className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition lg:hidden"
						>
							<div className="bg-primary-white-shade-1 rounded-lg">
								<div className="px-5 pt-5 pb-6">
									<div className="-mr-2 flex justify-end">
										<Popover.Button
											className="inline-flex items-center justify-center rounded-md  p-2   "
											aria-label="menu for close button"
										>
											<XMarkIcon className="h-6 w-6" aria-hidden="true" />
										</Popover.Button>
									</div>
									<div className="mt-6 ">
										<nav className="grid ">
											{childNavLinks &&
												childNavLinks.length &&
												childNavLinks.map((link, index) => (
													<Link
														key={index}
														href={link?.href || '/'}
														className=" group inline-block pr-2"
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
			</section>
		</>
	);
}
