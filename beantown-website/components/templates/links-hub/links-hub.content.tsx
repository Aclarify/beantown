import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { LinksHubContentProps } from 'pages/links-hub';
import React, { useContext } from 'react';
import Image from 'next/image';
import * as OutlineIcons from '@heroicons/react/24/outline';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

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
					// Add target blank to open in new tab
					<a
						href={icon?.href || ''}
						target="_blank"
						rel="noreferrer"
						key={index}
					>
						<Image
							key={index}
							alt={icon?.image?.asset?.altText || 'Social Media Icon'}
							width={35}
							height={35}
							src={icon?.image?.asset?.url || ''}
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
			className=" 2xl:padding-for-section z-10 mx-auto flex flex-col rounded-3xl bg-white px-5 pb-20 lg:rounded-[40px]"
		>
			<div className="my-40  flex flex-col justify-center text-center align-middle ">
				<div className=" text-primary-black border-secondary-shade-2 border-b-2 pb-8  pt-[2em] text-center  lg:pt-0 ">
					<h4>{linksHubTitle}</h4>
				</div>
				<div>
					<div className="image-wrapper relative mx-auto mt-8 h-[60px] w-[170px] text-center md:h-[80px] md:w-[230px]">
						<Image
							alt={logoDark?.image?.asset?.altText || ''}
							fill
							className="object-contain"
							priority={true}
							src={logoDark?.image?.asset?.url || ''}
						/>
					</div>
				</div>
				<div className=" text-gray-shade-1  pt-4 pb-8  text-center  ">
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
			<div className="grid grid-cols-1 gap-x-2 gap-y-4 sm:gap-x-4 lg:grid-cols-2 lg:gap-4 lg:pl-6">
				{links &&
					links?.map((link, index) => {
						return (
							<div
								key={index}
								className="bg-secondary-shade-3 h-[42px] w-[340px] rounded-xl pl-1 lg:h-[60px] lg:w-[370px] lg:rounded-2xl"
							>
								<div className="ml-4 flex items-center justify-around p-4 ">
									<div className="icon-wrapper basis-[10%]">
										{link &&
											link.heroIconName &&
											renderIconComponent(link.heroIconName)}
									</div>
									<div className="basis-[80%]">
										<span className="text-primary-black rounded-sm px-3 text-2xl">
											{link?.linkName}
										</span>
									</div>
									<div className="basis-[10%]">
										<ChevronRightIcon
											href={link?.href || ''}
											aria-hidden="true"
											className="h-5 w-5"
										/>
									</div>
								</div>
							</div>
						);
					})}
			</div>
			{/* <div className="mx-auto h-[295px] w-[385px] lg:h-[962px] lg:w-[1254px] "></div> */}
		</div>
	);
};
export default LinksHubContent;
