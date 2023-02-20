import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HomePageContentProps } from 'pages';
import Image from 'next/image';

const LocationCard = ({ text }: { text: string }) => {
	return (
		<div className="location-card flex  h-[32px] w-[154px] items-center py-2 pl-4 lg:min-h-[54px] lg:min-w-[315px]">
			<div className="icon-image-wrapper h-[12px] w-[12px] lg:h-[24px] lg:w-[24px]">
				<Image
					src={'/images/home/location-icon.svg'}
					alt="location icon"
					width="100"
					height="100"
					style={{
						width: '100%',
					}}
				></Image>
			</div>
			<div className="text-container para-6 lg:para-2 pl-[10px]">
				<span>{text}</span>
			</div>
		</div>
	);
};

export default function ServiceAreas() {
	const { pageContent } =
		useContext<GlobalContextProps<HomePageContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const homeData = pageContent.page[0];
	const {
		serviceAreaTitle,
		serviceAreaDescription,
		serviceAreas,
		serviceAreaImage,
	} = homeData;
	return (
		<section id="serviceAreas" className="bg-primary-white-shade-1 mt-20">
			<div className="mt-20 p-6 lg:px-10">
				<div className="mt-20 pb-6 lg:mt-40 lg:flex 2xl:pt-16">
					<div className="lg:w-1/2 lg:border-r-2">
						<h1 className="title-5 lg:title-2  text-primary-black pl-2 lg:pr-20 lg:pl-6">
							{serviceAreaTitle}
						</h1>
					</div>
					<div className="para-4 lg:para-2 text-primary-shade-1 w-full pl-2 pt-4 lg:w-1/2 lg:pl-20 ">
						<p>{serviceAreaDescription}</p>
					</div>
				</div>

				<div className="flex flex-col lg:flex-row">
					<div className="image-wrapper rounded-2xl lg:w-3/4">
						<Image
							src={serviceAreaImage?.asset?.url || ''}
							alt={serviceAreaImage?.asset?.altText || ''}
							width="2000"
							height="1200"
							style={{
								width: '100%',
								height: '100%',
								objectFit: 'cover',
							}}
						></Image>
					</div>
					<div className="service-area-padding-container lg:py-20">
						<div
							id="service-area-outer-container"
							className="bg-primary-white-shade-1 -mt-8 rounded-3xl p-4 lg:-ml-[25%] lg:mt-0 lg:p-6"
						>
							<div
								id="service-areas-inner-container"
								className="rounded-lg bg-white px-4  pt-2 pb-4 shadow-md lg:rounded-2xl lg:py-4 lg:pt-1"
							>
								<h1 className="subtitle-7 lg:subtitle-3 text-primary-black mt-2 pb-2 lg:pl-6 ">
									{serviceAreas?.title || 'Service Areas'}
								</h1>

								<div
									id="service-area-container"
									className="grid grid-cols-2 gap-x-4 gap-y-1 lg:gap-4 lg:pl-6"
								>
									{serviceAreas?.listItem?.map((serviceArea, index) => {
										return (
											<div
												key={index}
												className="bg-secondary-shade-3 rounded lg:rounded-lg"
											>
												<LocationCard
													text={
														serviceArea ? serviceArea.split(',').join(', ') : ''
													}
												/>
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
