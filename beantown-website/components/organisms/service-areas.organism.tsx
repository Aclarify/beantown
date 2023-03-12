import React from 'react';
import Image from 'next/image';
import { TextList as ServiceAreas, Maybe } from '@typing/gql/graphql';
import LocationCard from './location-card.organism';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	serviceAreaSectionTitle: string;
	serviceAreaDescription: string;
	serviceAreaListTitle: string;
	serviceAreaImageSrc: string;
	serviceAreaImageAltText: string;
	serviceAreaList: Maybe<ServiceAreas>;
}

const ServiceAreas: React.FC<IProps> = (props) => {
	return (
		<div className=" z-1 bg-primary-white-shade-1 2xl:padding-for-section p-5   lg:pr-6">
			<div className=" pb-6  lg:flex 2xl:pt-16">
				<div className="lg:w-1/2 lg:border-r-2">
					<h2 className="  text-primary-black  lg:pr-20 lg:pl-6">
						{props.serviceAreaSectionTitle}
					</h2>
				</div>
				<div className="  text-primary-shade-1 w-full  pt-4  lg:w-[60%] lg:pl-20 ">
					<p>{props.serviceAreaDescription}</p>
				</div>
			</div>

			<div className="flex flex-col pl-4 lg:flex-row ">
				<div className="image-wrapper rounded-2xl lg:w-3/4">
					<Image
						src={props.serviceAreaImageSrc}
						alt={props.serviceAreaImageAltText}
						width="2000"
						height="1200"
						style={{
							width: '100%',
							height: '100%',
							objectFit: 'fill',
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
							<span className="subtitle text-primary-black   mt-2 pb-2 lg:pl-6 ">
								{props.serviceAreaListTitle || 'Service Areas'}
							</span>

							<div
								id="service-area-container"
								className="grid grid-cols-2 gap-x-2 gap-y-1 sm:gap-x-4 lg:gap-4 lg:pl-6"
							>
								{props.serviceAreaList &&
									props.serviceAreaList?.listItem?.map((serviceArea, index) => {
										return (
											<div
												key={index}
												className="bg-secondary-shade-3 rounded pl-1 lg:rounded-lg"
											>
												<LocationCard
													locationText={
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
	);
};

export default ServiceAreas;
