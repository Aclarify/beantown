import {
	faLocation,
	faMailBulk,
	faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import Link from 'next/link';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HomePageContentProps } from 'pages';
import Image from 'next/image';

export default function Footer() {
	const { pageContent } =
		useContext<GlobalContextProps<HomePageContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const homeData = pageContent.home[0];
	const { logo } = homeData;
	const footerData = pageContent.footer[0];
	const {
		description,
		socialMediaIcons,
		navLinks,
		navGroup,
		contactUsTitle,
		contactUs,
		copyright,
	} = footerData;
	return (
		<section id="footer">
			<div
				id="footerContainer"
				className="flex flex-col md:grid md:grid-cols-5   w-full h-auto bg-primary-shade-1   p-6 md:px-10"
			>
				<div
					id="linkSection"
					className="sm:col-span-4 sm:order-last  sm:flex sm:justify-between sm:p-10 basis-3/4"
				>
					{navGroup &&
						navGroup.map((linkGroup, index) => (
							<div key={index} className="pt-4 sm:pt-10 max-w-sm">
								<h1 className="para-3 md:para-1 text-white font-bold sm:font-normal sm:pb-6">
									{linkGroup?.groupTitle}
								</h1>
								<div className="flex justify-start sm:flex-col">
									{linkGroup?.links?.map((link, index) => {
										return (
											link && (
												<div key={index} className="pt-2 pr-4  ">
													<Link
														className="para-4 md:para-3 text-gray-300 "
														href={link?.href || '/'}
													>
														{link?.linkText}
													</Link>
												</div>
											)
										);
									})}
								</div>
							</div>
						))}
					<div id="contact" className="pt-4 sm:pt-10">
						<div className="pb-2 sm:pb-4">
							<span className=" para-3 md:para-1 text-white font-bold sm:font-normal">
								{contactUsTitle}
							</span>
						</div>
						{contactUs?.map((contactDtl, index) => {
							return (
								contactDtl?.iconImage && (
									<div
										key={index}
										className="flex justify-start pt-2 space-x-2 para-4 md:para-3 text-gray-300"
									>
										<Image
											alt={contactDtl.iconImage?.image?.asset?.altText || ''}
											width={15}
											height={15}
											src={contactDtl.iconImage?.image?.asset?.url || ''}
										/>
										<span>{contactDtl.text}</span>
									</div>
								)
							);
						})}
					</div>
				</div>
				<div id="logoSection" className="basis-1/4">
					<div className="flex space-x-4 pt-8">
						<div id="logoImage">
							<Image
								alt={logo?.asset?.altText || ''}
								width={200}
								height={300}
								src={logo?.asset?.url || ''}
							/>
						</div>
						<div
							id="socialMediaIconGroupMobile"
							className="sm:hidden flex align-middle items-center space-x-4"
						>
							{socialMediaIcons?.map((icon, index) => {
								return (
									icon && (
										<Image
											key={index}
											alt={icon?.image?.asset?.altText || ''}
											width={35}
											height={35}
											src={icon?.image?.asset?.url || ''}
										/>
									)
								);
							})}
						</div>
					</div>
					<div id="footerDescription" className="sm:pb-6 sm:pt-4">
						<p className="para-4 md:para-3 text-gray-300">{description}</p>
					</div>
					<div
						id="socialMediaIconGroupDesktop"
						className="hidden md:flex space-x-4 pb-8"
					>
						{socialMediaIcons?.map((icon, index) => {
							return (
								icon && (
									<Image
										key={index}
										alt={icon?.image?.asset?.altText || ''}
										width={35}
										height={35}
										src={icon?.image?.asset?.url || ''}
									/>
								)
							);
						})}
					</div>
				</div>
			</div>
			<div
				id="copyWrite"
				className="flex justify-center py-6 border-t-2 border-gray-shade-2 bg-[#15284C] text-gray-300 para-5 md:para-3"
			>
				<span className="">{copyright} </span>

				{navLinks?.map((link, index) => {
					return (
						link && (
							<div className="" key={index}>
								<span className="px-2"> . </span>
								<Link href={link?.href || '/'}>{link?.linkText}</Link>
							</div>
						)
					);
				})}
			</div>
		</section>
	);
}
