import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faArrowRight,
	faArrowLeft,
	faMapLocation,
} from '@fortawesome/free-solid-svg-icons';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HomePageContentProps } from 'pages';
import Image from 'next/image';

export default function ServiceAreas() {
	const { pageContent } =
		useContext<GlobalContextProps<HomePageContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const homeData = pageContent.home[0];
	const {
		serviceAreaTitle,
		serviceAreaDescription,
		serviceAreas,
		serviceAreaImage,
	} = homeData;
	return (
		<section id="serviceAreas">
			<div className="p-6 md:px-10">
				<div className="md:flex">
					<div className="md:border-r-2 md:w-1/2">
						<h1 className="title-5 md:title-2 text-primary-black pr-20">
							{serviceAreaTitle}
						</h1>
					</div>
					<div className="pl-20 pt-4 w-full md:w-1/2 para-4 md:para-2 text-primary-shade-1">
						<p>{serviceAreaDescription}</p>
					</div>
				</div>

				<div className="relative pt-12 ">
					<Image
						src={serviceAreaImage?.asset?.url || ''}
						alt={serviceAreaImage?.asset?.altText || ''}
						width="1000"
						height="600"
					/>
					<div className="bg-[#FFFFFF] absolute inset-x-5 -bottom-64	md:inset-x-1/2 	md:inset-y-1/4 md:h-2/3 md:w-1/3  border rounded-lg   ">
						<div className="p-4">
							<h1 className="subtitle-6 md:subtitle-3 text-primary-black">
								{serviceAreas?.title}
							</h1>
						</div>
						<div className="grid grid-cols-2 justify-evenly mx-2 h-auto ">
							{serviceAreas?.listItem?.map((serviceArea, index) => {
								return (
									<div
										key={index}
										className="py-2 w-36 my-2 md:w-56 justify-center flex  space-x-2 bg-secondary-shade-3 para-6 md:para-2 rounded-md align-middle items-center"
									>
										<div>
											<img
												src={'./images/home_page/location-icon.svg'}
												alt={'location Icon'}
												className="w-5 h-5"
											/>
										</div>

										<span>{serviceArea?.split(',').join(', ')}</span>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
