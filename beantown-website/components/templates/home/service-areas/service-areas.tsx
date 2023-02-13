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
						className="bg-primary-white-shade-1 relative top-[-20px] left-2 w-[95%] md:left-4 lg:absolute  lg:inset-x-1/2 lg:top-[10%] lg:h-fit lg:w-1/2 lg:rounded-3xl  lg:p-10 "
					>
						<div
							id="service-areas-inner-container"
							className="translate-y-[-10px] rounded-2xl bg-white pt-1  shadow-md lg:translate-y-0 lg:p-1"
						>
							<h1 className="subtitle-7 lg:subtitle-3 text-primary-black mt-2 pl-6 pb-2 ">
								{serviceAreas?.title}
							</h1>

							<div
								id="service-area-container"
								className="mx-6 grid h-auto grid-cols-2 place-items-center pb-2 md:my-4"
							>
								{serviceAreas?.listItem?.map((serviceArea, index) => {
									return (
										<div
											key={index}
											className="bg-secondary-shade-3 para-6 lg:para-2 my-2 mr-2 flex w-32 items-center  justify-center space-x-2 rounded-md py-2 align-middle md:w-56 lg:w-56"
										>
											<Image
												src={'/images/home/location-icon.svg'}
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
									className="opacity-1 absolute -right-[95%] top-[4em] z-10 hidden h-full  w-full md:hidden lg:block  "
								>
									<Image
										src="/images/home/blue-blob-shape-2.svg"
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
										src="/images/home/blue-blob-shape-2-mobile.svg"
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
