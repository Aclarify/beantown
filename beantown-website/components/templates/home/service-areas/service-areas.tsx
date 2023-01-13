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
export default function ServiceAreas() {
	const { pageContent } =
		useContext<GlobalContextProps<HomePageContentProps>>(GlobalContext);
	if (!pageContent) {
		return;
	}
	const homeData = pageContent.allHome[0];
	const { serviceAreaTitle, serviceAreaDescription, serviceAreas } = homeData;
	return (
		<section id="serviceAreas" className=" ">
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
					<img src="images/home_page/beantownServiceArea.svg" />
					<div className="bg-[#FFFFFF]  border rounded-lg p-4">
						<div>
							<h1 className="text-lg font-bold">"Service Areas"</h1>
						</div>

						{/* {serviceAreas[0]?.listItem?.map((serviceArea, index) => {
							return ( */}
						<div className="flex flex-wrap justify-around space-y-2 bg-[#FFFFFF] ">
							<div className="px-4 py-2 justify-center flex space-x-2 bg-blue-100 border text-xs rounded-lg">
								<span>
									<FontAwesomeIcon icon={faMapLocation} />
								</span>
								<span>"Plymouth,MA"</span>
							</div>
						</div>
						{/* );
						})} */}
					</div>
				</div>
			</div>
		</section>
	);
}
