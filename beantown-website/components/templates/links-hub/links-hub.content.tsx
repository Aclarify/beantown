import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { LinksHubContentProps } from 'pages/links-hub';
import React, { useContext } from 'react';
import Image from 'next/image';
import * as OutlineIcons from '@heroicons/react/24/outline';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import CMSImageWrapper from 'components/molecules/cms-image-wrapper.molecule';

const LinksHubContent = () => {
	const { pageContent } =
		useContext<GlobalContextProps<LinksHubContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const {
		logoDark,
		linksHubTitle,
		linksHubDescription,
		socialMediaIcons,
		links,
	} = pageData;
	const renderSocialMediaIcons = () => {
		return socialMediaIcons?.map((icon, index) => {
			return (
				icon && (
					<a
						href={icon?.href || ''}
						target="_blank"
						rel="noreferrer"
						key={index}
					>
						<CMSImageWrapper
							altText={icon?.image?.asset?.altText || ''}
							image={icon?.image || null}
							style={{
								objectFit: 'contain',
							}}
						/>
					</a>
				)
			);
		});
	};

	const renderIconComponent = (iconName: string) => {
		if (!iconName) return null;
		if (!OutlineIcons) return null;
		const IconComponent = (OutlineIcons as any)[iconName];
		return (
			<IconComponent
				className="text-primary-black h-6 w-6 transform "
				aria-hidden="true"
			/>
		);
	};
	return (
		<div
			id="section-wrapper"
			className=" xs:top-32 relative top-36 z-10  flex  justify-center    md:top-40 lg:top-48  "
		>
			<div className="max-w-[1000px] rounded-3xl bg-white lg:rounded-[40px]">
				<div className=" flex flex-col text-center align-middle ">
					<div className=" text-primary-black border-secondary-shade-2 border-b-2 py-5  text-center  ">
						<h4>{linksHubTitle}</h4>
					</div>
					<div className="flex justify-center">
						<div className="image-wrapper  relative  mt-8 h-[60px] w-[170px]  md:h-[80px] md:w-[230px]">
							<Image
								alt={logoDark?.image?.asset?.altText || ''}
								fill
								className="object-contain"
								priority={true}
								src={logoDark?.image?.asset?.url || ''}
							/>
						</div>
					</div>
					<div className=" text-gray-shade-1  px-6 pt-4 pb-8 text-center md:px-10 xl:px-32  ">
						<p className="text-primary-black !text-xl !font-light">
							{linksHubDescription}
						</p>
					</div>
					<div
						id="socialMediaIconGroupMobile"
						className="flex items-center justify-center space-x-4"
					>
						{renderSocialMediaIcons()}
					</div>
				</div>
				<div className=" flex justify-center pt-12 pb-12 lg:pt-[60px]">
					<div className="grid grid-cols-1  gap-y-4 sm:gap-x-4 lg:grid-cols-2 lg:gap-4 ">
						{links &&
							links?.map((link, index) => {
								return (
									<div
										key={index}
										className="bg-secondary-shade-3  h-[42px] w-[300px] rounded-xl  lg:h-[60px] lg:w-[370px] lg:rounded-2xl"
									>
										<div className=" flex items-center justify-center p-2 lg:p-4 ">
											<div className="icon-wrapper  basis-[10%]">
												{link &&
													link.heroIconName &&
													renderIconComponent(link.heroIconName)}
											</div>
											<div className="basis-[80%]">
												<span className="text-primary-black  rounded-sm px-3">
													{link?.linkName}
												</span>
											</div>
											<div className="basis-[10%]">
												<Link href={link?.href || ''}>
													<ChevronRightIcon
														aria-hidden="true"
														className="h-5 w-5"
													/>
												</Link>
											</div>
										</div>
									</div>
								);
							})}
					</div>
				</div>
			</div>
		</div>
	);
};
export default LinksHubContent;
