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
			<div className="p-6 lg:px-10 mt-20">
				<div className="lg:flex mt-40 pb-6">
					<div className="lg:border-r-2 lg:w-1/2">
						<h1 className="title-5 lg:title-2  text-primary-black lg:pr-20 pl-2 lg:pl-6">
							{serviceAreaTitle}
						</h1>
					</div>
					<div className="pl-2 lg:pl-20 pt-4 w-full lg:w-1/2 para-4 lg:para-2 text-primary-shade-1 ">
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
						className="bg-primary-white-shade-1 relative top-[-20px] left-2 w-[95%] bottom-[20%] lg:absolute  lg:p-10 lg:inset-x-1/2 lg:top-[15%] lg:h-2/3 lg:w-1/2  lg:rounded-3xl "
					>
						<div
							id="service-areas-inner-container p-4"
							className="bg-white rounded-2xl"
						>
							<h1 className="subtitle-6 lg:subtitle-3 text-primary-black pl-6 pb-2 ">
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
											className="py-2 w-36 my-2 mr-2 lg:w-56 justify-center flex  space-x-2 bg-secondary-shade-3 para-6 lg:para-2 rounded-md align-middle items-center"
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
