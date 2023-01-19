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
				className="flex flex-col md:grid md:grid-cols-5   w-full h-auto bg-[#15284C] text-white px-4 "
			>
				<div
					id="linkSection"
					className="sm:col-span-4 sm:order-last  sm:flex sm:justify-between  "
				>
					{navGroup &&
						navGroup.map((linkGroup, index) => (
							<div key={index} className="pt-10 max-w-sm">
								<h1 className="text-xl font-bold">{linkGroup?.groupTitle}</h1>
								{linkGroup?.links?.map((link, index) => {
									return (
										link && (
											<div key={index}>
												<Link href={link?.href || '/'}>{link?.linkText}</Link>
											</div>
										)
									);
								})}
							</div>
						))}
					<div id="contact" className="pt-10">
						<div>
							<span className="font-bold text-xl">{contactUsTitle}</span>
						</div>
						{contactUs?.map((contactDtl, index) => {
							return (
								contactDtl?.iconImage && (
									<div
										key={index}
										className="flex justify-start pt-2 space-x-2"
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
				<div id="logoSection" className="">
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
							className="sm:hidden flex align-middle items-center space-x-2"
						>
							{socialMediaIcons?.map((icon, index) => {
								return (
									icon && (
										<Image
											key={index}
											alt={icon?.image?.asset?.altText || ''}
											width={20}
											height={20}
											src={icon?.image?.asset?.url || ''}
										/>
									)
								);
							})}
						</div>
					</div>
					<div id="footerDescription" className="pb-8 ">
						<p>{description}</p>
					</div>
					<div
						id="socialMediaIconGroupDesktop"
						className="hidden md:flex space-x-2 pb-8"
					>
						{socialMediaIcons?.map((icon, index) => {
							return (
								icon && (
									<Image
										key={index}
										alt={icon?.image?.asset?.altText || ''}
										width={40}
										height={40}
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
				className="flex justify-center items-center align-middle pt-6 border-t-2 border-grey-100 bg-[#15284C] text-white"
			>
				<span className="text-xs">{copyright} </span>

				{navLinks?.map((link, index) => {
					return (
						link && (
							<div className="text-xs">
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
