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
		<section id="serviceAreas" className="bg-[#FCFDFC] mt-20">
			<div className="p-6 md:px-10 mt-20">
				<div className="md:flex mt-40 pb-6">
					<div className="md:border-r-2 md:w-1/2">
						<h1 className="title-5 md:title-2  text-primary-black md:pr-20 pl-2 md:pl-6">
							{serviceAreaTitle}
						</h1>
					</div>
					<div className="pl-2 md:pl-20 pt-4 w-full md:w-1/2 para-4 md:para-2 text-primary-shade-1 ">
						<p>{serviceAreaDescription}</p>
					</div>
				</div>
				{/* <div className="relative flex"> */}
				<div className="relative text-left">
					<Image
						src={serviceAreaImage?.asset?.url || ''}
						alt={serviceAreaImage?.asset?.altText || ''}
						width="1000"
						height="600"
					></Image>
					<div
						id="service-area-outer-container"
						className="bg-primary-white-shade-1 relative top-[-20px] left-2 w-[95%] bottom-[20%] md:absolute  md:p-10 md:inset-x-1/2 md:top-[15%] md:h-2/3 md:w-1/2  md:rounded-3xl "
					>
						<div
							id="service-areas-inner-container p-4"
							className="bg-white rounded-2xl"
						>
							<h1 className="subtitle-6 md:subtitle-3 text-primary-black pl-6 pb-2 ">
								{serviceAreas?.title}
							</h1>
							<div
								id="service-area-container"
								className="grid grid-cols-2 mx-6 h-auto "
							>
								{serviceAreas?.listItem?.map((serviceArea, index) => {
									return (
										<div
											key={index}
											className="py-2 w-36 my-2 mr-2 md:w-56 justify-center flex  space-x-2 bg-secondary-shade-3 para-6 md:para-2 rounded-md align-middle items-center"
										>
											<div className="">
												<img
													src={'./images/home_page/location-icon.svg'}
													alt={'location Icon'}
													className="w-6 h-5"
												/>
											</div>
											<div className="">
												<span>{serviceArea?.split(',').join(', ')}</span>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
					{/* </div> */}
				</div>
			</div>
		</section>
	);
}
