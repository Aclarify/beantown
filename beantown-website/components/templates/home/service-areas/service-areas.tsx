import React, { useContext } from 'react';
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
				<div className="lg:flex lg:mt-40 mt-20 pb-6">
					<div className="lg:border-r-2 lg:w-1/2">
						<h1 className="title-5 lg:title-2  text-primary-black lg:pr-20 pl-2 lg:pl-6">
							{serviceAreaTitle}
						</h1>
					</div>
					<div className="pl-2 lg:pl-20 pt-4 w-full lg:w-1/2 para-4 lg:para-2 text-primary-shade-1 ">
						<p>{serviceAreaDescription}</p>
					</div>
				</div>

				<div className="relative text-left ">
					<Image
						src={serviceAreaImage?.asset?.url || ''}
						alt={serviceAreaImage?.asset?.altText || ''}
						width="1000"
						height="600"
						className="lg:w-3/4"
					></Image>
					<div
						id="service-area-outer-container"
						className="bg-primary-white-shade-1 relative top-[-20px] left-2 md:left-4 w-[95%] lg:absolute  lg:p-10 lg:inset-x-1/2 lg:top-[10%] lg:h-fit lg:w-1/2  lg:rounded-3xl "
					>
						<div
							id="service-areas-inner-container"
							className="bg-white pt-1 rounded-2xl shadow-md  lg:p-1 translate-y-[-10px] lg:translate-y-0"
						>
							<h1 className="subtitle-7 lg:subtitle-3 text-primary-black pl-6 pb-2 mt-2">
								{serviceAreas?.title}
							</h1>

							<div
								id="service-area-container"
								className="grid grid-cols-2 mx-6 h-auto md:my-4 pb-2 place-items-center"
							>
								{serviceAreas?.listItem?.map((serviceArea, index) => {
									return (
										<div
											key={index}
											className="py-2 w-32 md:w-56 my-2 mr-2 lg:w-56 justify-center flex  space-x-2 bg-secondary-shade-3 para-6 lg:para-2 rounded-md align-middle items-center"
										>
											<Image
												src={'/images/home_page/location-icon.svg'}
												alt={serviceAreaImage?.asset?.altText || ''}
												width="24"
												height="20"
											></Image>

											<span>{serviceArea?.split(',').join(', ')}</span>
										</div>
									);
								})}

								<div
									id="right-blob-desktop"
									className="hidden lg:block md:hidden absolute opacity-1 -right-[95%] top-[2em]  z-10 h-full w-full  "
								>
									<Image
										src="/blue-blob-shape-2.svg"
										alt="Right-blob"
										width={500}
										height={500}
									></Image>
								</div>
								{/* <div
									id="right-blob-mobile"
									className="block  lg:hidden absolute opacity-1 -right-[90%] top-[10em] h-full w-full  overflow-hidden"
								>
									<Image
										src="/blue-blob-shape-2-mobile.svg"
										alt="Right-blob"
										width={200}
										height={200}
									></Image>
								</div> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
