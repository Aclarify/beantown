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
			<div className="p-4">
				<div className="md:flex">
					<div className="md:border-r-2 md:w-1/2">
						<h1 className="text-xl font-bold">{serviceAreaTitle}</h1>
					</div>
					<div className="pt-4 w-full md:w-1/2">
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
					<div className="bg-[#FFFFFF] absolute inset-x-5 -bottom-64	md:inset-x-1/2 	md:inset-y-1/3  md:h-1/2 md:w-1/2  border rounded-lg  w-[1000] ">
						<div className="p-4">
							<h1 className="text-lg font-bold">{serviceAreas?.title}</h1>
						</div>
						<div className="grid grid-cols-2 justify-evenly mx-10 ">
							{serviceAreas?.listItem?.map((serviceArea, index) => {
								return (
									<div
										key={index}
										className="px-4 py-2  my-2 w-44 justify-center flex space-x-2 bg-blue-50 	 text-xs rounded-md"
									>
										<span>
											{/* <FontAwesomeIcon icon={faMapLocation} /> */}
											<img
												src={'./images/home_page/locationIcon.svg'}
												alt={'location Icon'}
												className="w-3 h-3"
											/>
										</span>
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
