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
			<section className="absolute w-full   lg:px-10">
				<Popover className="relative z-30">
					<div className="mx-auto px-4  justify-between items-center ">
						<div className="flex  py-6 lg:py-0 justify-between lg:justify-start ">
							<div className="hidden lg:flex align-middle ">
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
								<Popover.Button className="inline-flex rounded-md bg-white p-2 text-black  ">
									<Bars3Icon className="h-6 w-6" aria-hidden="true" />
								</Popover.Button>
							</div>
							<div className="hidden lg:justify-center lg:flex lg:flex-grow text-white items-center para-4 lg:para-3 ">
								{navLinks?.map((link, index) => {
									return (
										<Link
											key={index}
											href={link?.href || '/'}
											className="p-8 pr-1 group inline-block"
										>
											{link?.linkText}
										</Link>
									);
								})}

								{navGroup?.map((linkGroup, index) => {
									return (
										<div key={index} className="group inline-block">
											<Link
												href={'/'}
												className="outline-none focus:outline-none  px-3 py-1  rounded-sm flex items-center min-w-32"
											>
												<span className="pr-1 flex-1 para-4 lg:para-3 ">
													{linkGroup?.groupTitle}
												</span>
												<span>
													<svg
														className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 20 20"
													>
														<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
													</svg>
												</span>
											</Link>
											<ul className="rounded-sm transform scale-0 group-hover:scale-100 absolute  transition duration-500 ease-in-out origin-top min-w-32">
												{linkGroup?.links?.map((link, index) => {
													return (
														<Link key={index} href={link?.href || '/'}>
															<li className="rounded-sm px-3 py-1 para-4 lg:para-3 ">
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
							<div className="hidden lg:justify-center lg:flex lg:flex-grow">
								<Link href={'/'}>
									<Button fontColor="text-primary-shade-1" bgColor="bg-white">
										{headerButton?.text}
									</Button>
								</Link>
							</div>
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
							<div className="rounded-lg bg-primary-white-shade-1">
								<div className="px-5 pt-5 pb-6">
									<div className="flex justify-end">
										<div className="-mr-2">
											<Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset ">
												<XMarkIcon className="h-6 w-6" aria-hidden="true" />
											</Popover.Button>
										</div>
									</div>
									<div className="mt-6 ">
										<nav className="grid ">
											{childNavLinks &&
												childNavLinks.length &&
												childNavLinks.map((link, index) => (
													<Link
														key={index}
														href={link?.href || '/'}
														className=" pr-2 group inline-block"
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
