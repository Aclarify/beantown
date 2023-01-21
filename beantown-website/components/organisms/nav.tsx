import Link from 'next/link';
import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HomePageContentProps } from 'pages';
import Image from 'next/image';

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

	return (
		<nav className="absolute w-full  ">
			<div className="hidden md:flex max-w-6xl mx-auto  justify-between items-center">
				<div className="align-middle items-center">
					<Image
						alt={logo?.asset?.altText || ''}
						width={200}
						height={300}
						src={logo?.asset?.url || ''}
					/>
				</div>
				<div className=" text-white items-center text-xl font-light justify-center">
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
									<span className="pr-1  flex-1 ">{linkGroup?.groupTitle}</span>
									<span>
										<svg
											className="fill-current h-4 w-4 transform group-hover:-rotate-180
                        transition duration-150 ease-in-out"
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
												<li className="rounded-sm px-3 py-1">
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
				<div className="">
					<button className="border rounded-lg text-lg font-light md:text-xl bg-white py-2 px-8">
						{headerButton?.text}
					</button>
				</div>
			</div>
		</nav>
	);
}
