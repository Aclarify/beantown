import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HomePageContentProps } from 'pages';
import Image from 'next/image';
import WaveWrapper from 'components/molecules/wave-wrapper.molecule';
import ServiceAreas from 'components/organisms/service-areas.organism';
import topWave from 'public/images/home/service-area/home-service-area-top-wave.svg';

export default function HomeServiceAreas() {
	const { pageContent } =
		useContext<GlobalContextProps<HomePageContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const homeData = pageContent.page[0];
	const { serviceAreaSection } = homeData;
	return (
		<section id="serviceAreas" className="relative mt-20 ">
			<WaveWrapper waveURL={topWave}></WaveWrapper>
			<ServiceAreas
				serviceAreaSectionTitle={serviceAreaSection?.serviceAreaTitle || ''}
				serviceAreaDescription={
					serviceAreaSection?.serviceAreaDescription || ''
				}
				serviceAreaImageSrc={
					serviceAreaSection?.serviceAreaImage?.asset?.url || ''
				}
				serviceAreaImageAltText={
					serviceAreaSection?.serviceAreaImage?.asset?.altText || ''
				}
				serviceAreaList={serviceAreaSection?.serviceAreas || null}
				serviceAreaListTitle={serviceAreaSection?.serviceAreas?.title || ''}
			/>
			<Image
				src={'/images/home/blue-blob-shape-2.svg'}
				height={590}
				width={650}
				alt="Right Blob  "
				className="absolute bottom-0 right-0 z-20 hidden translate-x-[78%] translate-y-[30%]  transform  lg:block "
			/>
		</section>
	);
}
