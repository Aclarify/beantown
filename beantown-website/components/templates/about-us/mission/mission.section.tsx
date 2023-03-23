import React from 'react';
import useWindowDimensions from '@lib/hooks/use-window-dimensions.hook';
import WaveWrapper from 'components/molecules/wave-wrapper.molecule';
import Image from 'next/image';
import SectionContentWrapper from 'components/molecules/section-content-wrapper.molecule';
import MissionContent from './mission.content';
import ValuesContent from '../values/values.content';
import ValuesCards from '../values/values-card.content';
import topWave from 'public/images/about-us/mission/about-us-mission-top-wave.svg';
import topWaveMobile from 'public/images/about-us/mission/about-us-mission-top-wave-mobile.svg';
import bottomWave from 'public/images/about-us/values/about-us-values-bottom-wave.svg';
import bottomWaveMobile from 'public/images/about-us/values/about-us-values-bottom-wave-mobile.svg';

const MissionValuesSection = () => {
	const { width } = useWindowDimensions();
	return (
		<section
			id="ourMissionOurValues"
			className="  xs:-mt-[2em] 3xl:-mt-[12em] 4xl:-mt-[16em] relative z-10 -mt-[3em] sm:-mt-[3em] md:-mt-[5em] xl:-mt-[7em] 2xl:-mt-[9em]"
		>
			<WaveWrapper
				waveURL={width > 1023 ? topWave : topWaveMobile}
			></WaveWrapper>
			<Image
				src={'/images/about-us/mission/about-us-mission-right-blob.svg'}
				height={600}
				width={500}
				alt="Right Blob"
				className="3xl:translate-x-[45%] 3xl:translate-y-[120%]  absolute right-0 top-0 z-[15] hidden translate-x-[65%] translate-y-[35%] transform lg:block xl:translate-x-[60%] xl:translate-y-[45%] 2xl:translate-x-[60%] 2xl:translate-y-[65%]"
			/>
			<Image
				src={'/images/about-us/mission/about-us-mission-right-blob-mobile.svg'}
				height={180}
				width={200}
				alt="Right Blob Mobile"
				className="xs:translate-x-[53%] xs:translate-y-[180%] absolute right-0 top-0 z-[-1] translate-x-[60%] translate-y-[170%] transform md:translate-x-[50%] md:translate-y-[186%] lg:hidden"
			/>

			<Image
				src={'/images/about-us/values/about-us-values-left-blob.svg'}
				height={600}
				width={500}
				alt="Left Blob"
				className="  3xl:translate-x-[-45%] 3xl:translate-y-[190%] absolute left-0 bottom-[50%] z-[-1] hidden translate-x-[-77%] translate-y-[65%] transform lg:block xl:translate-x-[-75%] xl:translate-y-[70%] 2xl:translate-x-[-60%] 2xl:translate-y-[100%]"
			/>
			<Image
				src={'/images/about-us/values/about-us-left-blob-mobile.svg'}
				height={100}
				width={150}
				alt="Left Blob Mobile"
				className=" absolute left-0 bottom-[50%]  z-[-1] translate-x-[-19%] translate-y-[121%] transform md:translate-x-[-19%]  md:translate-y-[196%]  lg:hidden"
			/>
			<div className="3xl:mt-[-10em] 4xl:-mt-[15em] 3xl:mb-[-10em] xs:mb-[0em] relative z-20 md:mt-[-4em] xl:mt-[-8em] xl:mb-[-3em] 2xl:mb-[-6em] ">
				<SectionContentWrapper>
					<MissionContent />
					<ValuesContent />
				</SectionContentWrapper>
				<ValuesCards />
			</div>
			<WaveWrapper
				waveURL={width > 1023 ? bottomWave : bottomWaveMobile}
			></WaveWrapper>
		</section>
	);
};

export default MissionValuesSection;
