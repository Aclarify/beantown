import RichText from 'components/molecules/rich-text.molecule';
import ContentWrapper from 'components/organisms/content-wrapper.organism';
import React from 'react';
import Image from 'next/image';

export default function HeatingCoolingServiceCard() {
	return (
		<section id="heatingCard ">
			<div className="relative z-10 my-4 flex flex-col items-center text-center sm:h-[674]  sm:w-[1488]">
				<ContentWrapper>
					<ContentWrapper.Title>
						<h1 className="title-5 lg:title-2 text-primary-black mb-4">
							{'heating & Cooling Services'}
						</h1>
					</ContentWrapper.Title>
					<ContentWrapper.Description>
						{/* <RichText value={servicesDescription?.contentRaw} /> */}
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam.
						</p>
					</ContentWrapper.Description>
				</ContentWrapper>
			</div>

			<div className="mx-12 grid  grid-cols-1 items-center gap-10 p-4 sm:gap-24  sm:p-8 lg:grid-cols-4 ">
				<div className="flex h-[288] w-[320px] flex-col items-center justify-center  space-y-4  rounded-lg bg-[FFFFFF] p-8 text-center shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]   sm:h-[448px] sm:w-[354px] ">
					<Image
						src="/images/home/blob-shape-1.svg"
						alt="service-card-Image"
						width={80}
						height={80}
					></Image>

					<p className="subtitle-1">Installation</p>
					<div className="sm:h-[180px] sm:w-[284px]">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam.
						</p>
					</div>
				</div>
				<div className="flex h-[288] w-[320px] flex-col items-center justify-center  space-y-4   rounded-lg bg-[FFFFFF] p-8 text-center shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]   sm:h-[448px] sm:w-[354px] ">
					<Image
						src="/images/home/blob-shape-1.svg"
						alt="service-card-Image"
						width={80}
						height={80}
					></Image>

					<p className="subtitle-1">Installation</p>
					<div className="sm:h-[180px] sm:w-[284px]">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam.
						</p>
					</div>
				</div>
				<div className="flex h-[288] w-[320px] flex-col items-center justify-center   rounded-lg space-y-4 bg-[FFFFFF] p-8 text-center shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]   sm:h-[448px] sm:w-[354px] ">
					<Image
						src="/images/home/blob-shape-1.svg"
						alt="service-card-Image"
						width={80}
						height={80}
					></Image>

					<p className="subtitle-1">Installation</p>
					<div className="sm:h-[180px] sm:w-[284px]">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam.
						</p>
					</div>
				</div>
				<div className="flex h-[288] w-[320px] flex-col items-center justify-center rounded-lg  space-y-4 bg-[FFFFFF] p-8 text-center shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]   sm:h-[448px] sm:w-[354px] ">
					<Image
						src="/images/home/blob-shape-1.svg"
						alt="service-card-Image"
						width={80}
						height={80}
					></Image>

					<p className="subtitle-1">Installation</p>
					<div className="sm:h-[180px] sm:w-[284px]">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
