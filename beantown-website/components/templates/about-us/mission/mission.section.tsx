import React from 'react';
import useWindowDimensions from '@lib/hooks/use-window-dimensions.hook';
import WaveWrapper from 'components/molecules/wave-wrapper.molecule';
import Image from 'next/image';
import SectionContentWrapper from 'components/molecules/section-content-wrapper.molecule';
import MissionContent from './mission.content';
import ValuesContent from '../values/values.content';
import ValuesCards from '../values/values-card.content';

const MissionValuesSection = () => {
	const { width } = useWindowDimensions();
	return (
		<section
			id="ourMissionOurValues"
			className="  xs:-mt-[2em] 3xl:-mt-[12em] 4xl:-mt-[16em] relative z-10 -mt-[3em] sm:-mt-[3em] md:-mt-[5em] xl:-mt-[7em] 2xl:-mt-[9em]"
		>
			<WaveWrapper
				waveURL={
					width > 1023
						? '/images/about-us/mission/about-us-mission-top-wave.svg'
						: '/images/about-us/mission/about-us-mission-top-wave-mobile.svg'
				}
			></WaveWrapper>
			<div className="3xl:mt-[-10em] 4xl:-mt-[15em] 3xl:mb-[-10em] xs:mb-[0em] relative z-20 md:mt-[-4em] xl:mt-[-8em] xl:mb-[-3em] 2xl:mb-[-6em] ">
				<SectionContentWrapper>
					<MissionContent />
					<ValuesContent />
					<ValuesCards />
				</SectionContentWrapper>
			</div>
			<WaveWrapper
				waveURL={
					width > 1023
						? '/images/about-us/values/about-us-values-bottom-wave.svg'
						: '/images/about-us/values/about-us-values-bottom-wave-mobile.svg'
				}
			></WaveWrapper>
		</section>
	);
};

export default MissionValuesSection;
