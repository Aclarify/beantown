import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import RichText from 'components/molecules/rich-text.molecule';
import ContentWrapper from 'components/organisms/content-wrapper.organism';
import Image from 'next/image';
import { HomePageContentProps } from 'pages';
import React, { useContext } from 'react';
import ServiceCard from './service-card';
import WaveWrapper from 'components/molecules/wave-wrapper.molecule';

export default function Services() {
	const { pageContent } =
		useContext<GlobalContextProps<HomePageContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const homeData = pageContent.page[0];

	const { servicesTitle, servicesDescription, servicesGroup } = homeData;
	return (
		<section
			id="services"
			className="z-1 relative mt-[-2rem] sm:mt-[-3rem] md:mt-[-5rem]  lg:mt-[-6rem] xl:mt-[-8rem] 2xl:mt-[-9rem] "
		>
			<WaveWrapper waveURL="/images/home/services/home-services-top-wave.svg"></WaveWrapper>
			<Image
				src={'/images/home/blob-shape-1.svg'}
				height={590}
				width={650}
				alt="Right Blob"
				className="absolute right-0 top-0 z-[-1] hidden translate-x-[59%] translate-y-[19%] transform md:block"
			/>
			<Image
				src={'/images/home/blob-shape-1.svg'}
				height={150}
				width={180}
				alt="Left Blob Mobile"
				className="absolute  top-0 left-0 z-[-1] -translate-x-[61%] translate-y-[25%] transform md:hidden "
			/>
			<Image
				src={'/images/home/blob-shape-1.svg'}
				height={180}
				width={200}
				alt="Right Blob Mobile"
				className="absolute right-0 top-0 z-[-1] translate-x-[55%] translate-y-[40%] transform md:hidden "
			/>
			<div className="lg:padding-for-section relative">
				<div className="flex flex-col items-center  text-center">
					<ContentWrapper>
						<ContentWrapper.Title>
							<h1 className="title-5 lg:title-2 text-primary-black mb-4">
								{servicesTitle}
							</h1>
						</ContentWrapper.Title>
						<ContentWrapper.Description>
							<RichText value={servicesDescription?.contentRaw} />
						</ContentWrapper.Description>
					</ContentWrapper>
				</div>
				<div className="mt-14 flex flex-wrap justify-center rounded-lg">
					{/* <div className="container my-12 mx-auto px-4 md:px-12">
					<div className="-mx-1 flex flex-wrap lg:-mx-4"> */}
					{servicesGroup?.map((service, index) => {
						return (
							service?.thumbnailImage?.asset?.url && (
								<div className="service-card-wrapper mb-5 mr-4 w-full max-w-[440px] lg:mr-0 lg:mb-0 lg:w-1/3 lg:min-w-[480px] lg:max-w-none lg:space-x-6 lg:pr-6 lg:pb-5">
									<ServiceCard
										key={index}
										title={service?.text || ''}
										buttonText={service?.button?.text || ''}
										hRef={service?.button?.href || ''}
										thumbnailSrc={service.thumbnailImage?.asset?.url || ''}
										thumbnailAltText={
											service.thumbnailImage?.asset?.altText || ''
										}
									/>
								</div>
							)
						);
					})}
					{/* </div> */}
				</div>
			</div>
			<Image
				src={'/images/home/blob-shape-1.svg'}
				height={590}
				width={650}
				alt="Left Blob "
				className="absolute  bottom-0 left-0 z-[-1] hidden -translate-x-[61%] transform md:block md:translate-y-[6%] lg:translate-y-[25%]"
			/>
		</section>
	);
}
