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
				<div className="flex-col md:flex ">
					<div className="border-r-4 md:w-1/2">
						<h1 className="text-xl font-bold">{serviceAreaTitle}</h1>
					</div>
					<div className="pt-4">
						<p>{serviceAreaDescription}</p>
					</div>
				</div>

				<div className=" pt-12">
					<Image
						src={serviceAreaImage?.asset?.url || ''}
						alt={serviceAreaImage?.asset?.altText || ''}
						width="1070"
						height="708"
					/>
					<div className="bg-[#FFFFFF]  border rounded-lg ">
						<div className="p-4">
							<h1 className="text-lg font-bold">{serviceAreas?.title}</h1>
						</div>
						<div className="flex flex-wrap justify-evenly   bg-[#FFFFFF] ">
							{serviceAreas?.listItem?.map((serviceArea, index) => {
								return (
									<div
										key={index}
										className="px-4 py-2  my-2 w-36 justify-center flex space-x-2 bg-blue-100 border text-xs rounded-lg"
									>
										<span>
											<FontAwesomeIcon icon={faMapLocation} />
										</span>
										<span>{serviceArea}</span>
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
