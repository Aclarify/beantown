import React from 'react';
import useWindowDimensions from '@lib/hooks/use-window-dimensions.hook';
import WaveWrapper from 'components/molecules/wave-wrapper.molecule';
import Image from 'next/image';
import SectionContentWrapper from 'components/molecules/section-content-wrapper.molecule';
import OurMissionContent from './mission-values-cards-content/our-mission.content';
import OurValuesCards from './mission-values-cards-content/our-values-card.content';
import OurValuesContent from './mission-values-cards-content/our-values.content';


const OurMissionOurValuesSection = () => {
	const { width } = useWindowDimensions();
	return (
		<section
			id="ourMissionOurValues"
			className="bg-secondary-shade-3  3xl-[-8em] lg:mt-4em] relative z-10 mt-[-5em] sm:mt-[-7em] md:mt-[-12em] 2xl:mt-[-12em] "
		>
			<WaveWrapper
				waveURL={
					width > 1023
						? '/images/about-us/mission/about-us-mission-top-wave.svg'
						: '/images/about-us/mission/about-us-mission-top-wave-mobile.svg'
				}
			></WaveWrapper>

			<SectionContentWrapper>
				<OurMissionContent />
				<OurValuesContent />
				<OurValuesCards />
			</SectionContentWrapper>
			<Image
				src={'/images/about-us/mission/about-us-right-blob-mobile.svg'}
				height={280}
				width={300}
				alt="Right Blob Mobile"
				className="absolute right-0 bottom-0 z-[-1]   translate-x-[40%] translate-y-[-55%] transform lg:hidden"
			/>
		</section>
	);
};

export default OurMissionOurValuesSection;
