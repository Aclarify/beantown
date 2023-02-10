import React, { useContext } from 'react';
import Link from 'next/link';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HomePageContentProps } from 'pages';
import Image from 'next/image';
import topWave from 'public/images/home/footer-top-wave.svg';

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
			<div className=" relative bottom-[11em] z-10 -mb-[10em] max-h-40 overflow-hidden xl:bottom-[13em]">
				<Image src={topWave} alt="footer wave bg" style={{ width: '100vw' }} />
			</div>
			<div className="relative z-20">
				<div
					id="footerContainer"
					className="bg-primary-shade-1 flex h-auto w-full flex-col px-6 pt-20  lg:grid lg:grid-cols-5 lg:px-10"
				>
					<div
						id="linkSection"
						className="basis-3/4 lg:order-last  lg:col-span-4 lg:flex lg:justify-between lg:p-10"
					>
						{navGroup &&
							navGroup.map((linkGroup, index) => (
								<div key={index} className="max-w-sm pt-4 lg:pt-10">
									<h1 className="para-3 lg:para-1 font-bold text-white lg:pb-6 lg:font-normal">
										{linkGroup?.groupTitle}
									</h1>
									<div className="flex justify-start lg:flex-col">
										{linkGroup?.links?.map((link, index) => {
											return (
												link && (
													<div key={index} className="pt-2 pr-4  ">
														<Link
															className="para-4 lg:para-3 text-gray-300 "
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
						<div id="contact" className="pt-4 lg:pt-10">
							<div className="pb-2 lg:pb-4">
								<span className=" para-3 lg:para-1 font-bold text-white lg:font-normal">
									{contactUsTitle}
								</span>
							</div>
							{contactUs?.map((contactDtl, index) => {
								return (
									contactDtl?.iconImage && (
										<div
											key={index}
											className="para-4 lg:para-3 flex justify-start space-x-2 pt-2 text-gray-300"
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
								className="flex items-center space-x-4 align-middle lg:hidden"
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
						<div id="footerDescription" className="lg:pb-6 lg:pt-4">
							<p className="para-4 lg:para-3 text-gray-300">{description}</p>
						</div>
						<div
							id="socialMediaIconGroupDesktop"
							className="hidden space-x-4 pb-8 lg:flex"
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
					className="border-gray-shade-2 para-5 lg:para-3 flex justify-center border-t-2 bg-[#15284C] py-6 text-gray-300"
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
			</div>
		</section>
	);
}
