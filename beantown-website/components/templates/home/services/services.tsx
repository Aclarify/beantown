import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import RichText from 'components/molecules/rich-text.molecule';
import ContentWrapper from 'components/organisms/content-wrapper.organism';
import Image from 'next/image';
import { HomePageContentProps } from 'pages';
import React, { useContext } from 'react';
import ServiceCard from './service-card';
import WaveWrapper from 'components/molecules/wave-wrapper.molecule';
import useWindowDimensions from '@lib/hooks/use-window-dimensions.hook';
import { SCREEN_BREAKPOINTS } from '@typing/common/interfaces/devices.interface';
import Animate from 'components/molecules/animate.molecule';
import topWave from 'public/images/home/services/home-services-top-wave.svg';

export default function Services() {
	const { pageContent } =
		useContext<GlobalContextProps<HomePageContentProps>>(GlobalContext);
	const { width } = useWindowDimensions();

	if (!pageContent) {
		return null;
	}

	const homeData = pageContent.page[0];

	const { servicesTitle, servicesDescription, servicesGroup } = homeData;
	let clonedServicesGroup = servicesGroup ? [...servicesGroup] : [];

	if (
		width &&
		width < SCREEN_BREAKPOINTS.SM &&
		servicesGroup &&
		servicesGroup.length > 0
	) {
		// Find the service which is marked as main service and make it the first element
		const mainServiceIndex = servicesGroup.findIndex(
			(service) => service?.isMainService
		);
		if (mainServiceIndex !== -1) {
			const mainService = clonedServicesGroup.splice(mainServiceIndex, 1);
			clonedServicesGroup = [...mainService, ...clonedServicesGroup];
		}
	}
	return (
		<section
			id="services"
			className="z-1 relative mt-[-2rem] sm:mt-[-3rem] md:mt-[-5rem]  lg:mt-[-6rem] xl:mt-[-8rem] 2xl:mt-[-9rem] "
		>
			<WaveWrapper waveURL={topWave}></WaveWrapper>
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
			<div className="2xl:padding-for-section relative">
				<div className="flex flex-col items-center  pt-[4em] text-center lg:pt-0">
					<ContentWrapper>
						<ContentWrapper.Title>
							<Animate>
								<h2 className="text-primary-black mb-4">{servicesTitle}</h2>
							</Animate>
						</ContentWrapper.Title>
						<ContentWrapper.Description className=" px-10 sm:px-20  lg:px-80 ">
							<Animate bottom>
								<RichText value={servicesDescription?.contentRaw} />
							</Animate>
						</ContentWrapper.Description>
					</ContentWrapper>
				</div>
				<div className="mt-14 flex flex-wrap justify-center rounded-lg">
					{clonedServicesGroup?.map((service, index) => {
						return (
							service?.thumbnailImage?.asset?.url && (
								<div
									key={index}
									className="service-card-wrapper mb-5 w-full px-4 sm:px-10 md:basis-1/2 md:px-4 lg:mr-0 lg:mb-0 lg:space-x-6   lg:pr-6 lg:pb-5 xl:basis-1/3"
								>
									<ServiceCard
										key={index}
										title={service?.name || ''}
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
				</div>
			</div>
			<Image
				src={'/images/home/blob-shape-1.svg'}
				height={590}
				width={650}
				alt="Left Blob "
				className="absolute  bottom-0 left-0 z-[-1] hidden -translate-x-[65%] transform md:block md:translate-y-[6%] lg:translate-y-[45%]"
			/>
		</section>
	);
}
