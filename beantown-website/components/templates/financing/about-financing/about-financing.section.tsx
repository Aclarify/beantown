import React from 'react';
import useWindowDimensions from '@lib/hooks/use-window-dimensions.hook';
import WaveWrapper from 'components/molecules/wave-wrapper.molecule';
import Image from 'next/image';
import SectionContentWrapper from 'components/molecules/section-content-wrapper.molecule';
import AboutFinancingContent from './about-financing.content';
import topWave from 'public/images/about-us/mission/about-us-mission-top-wave.svg';
import topWaveMobile from 'public/images/about-us/mission/about-us-mission-top-wave-mobile.svg';
import { SCREEN_BREAKPOINTS } from '@typing/common/interfaces/devices.interface';
import FinancingPlanCardsContent from '../plan-financing/financing-plan-card.content';

const AboutFinancingSection = () => {
	const { width } = useWindowDimensions();
	return (
		<section
			id="aboutFinancing"
			className="  xs:-mt-[2em] 3xl:-mt-[12em] 4xl:-mt-[16em] relative z-10 -mt-[3em] sm:-mt-[3em] md:-mt-[5em] xl:-mt-[7em] 2xl:-mt-[9em]"
		>
			<WaveWrapper
				waveURL={width > SCREEN_BREAKPOINTS.MD ? topWave : topWaveMobile}
			></WaveWrapper>
			<Image
				src={'/images/about-us/mission/about-us-mission-right-blob.svg'}
				height={600}
				width={500}
				alt="Right top Blob"
				className="3xl:translate-x-[45%] 3xl:translate-y-[120%]  absolute right-0 top-0 z-[15] hidden translate-x-[65%] translate-y-[35%] transform lg:block xl:translate-x-[60%] xl:translate-y-[45%] 2xl:translate-x-[60%] 2xl:translate-y-[60%]"
			/>
			<Image
				src={'/images/about-us/mission/about-us-mission-right-blob-mobile.svg'}
				height={180}
				width={200}
				alt="Right Blob Mobile"
				className="xs:translate-x-[53%] xs:translate-y-[180%] absolute right-0 top-0 z-[-1] translate-x-[60%] translate-y-[188%] transform md:translate-x-[50%] md:translate-y-[206%] lg:hidden"
			/>
			<Image
				src={'/images/about-us/mission/about-us-mission-right-blob.svg'}
				height={600}
				width={500}
				alt="Right bottom Blob"
				className=" absolute right-0 top-0 z-[15] hidden lg:block  2xl:translate-x-[60%] 2xl:translate-y-[450%]"
			/>
			<Image
				src={'/images/about-us/values/about-us-values-left-blob.svg'}
				height={600}
				width={500}
				alt="Left Blob"
				className="  3xl:translate-x-[-45%] 3xl:translate-y-[-35%] absolute left-0 bottom-0 z-[-1] hidden translate-x-[-77%] translate-y-[-2%] transform lg:block xl:translate-x-[-75%] xl:translate-y-[4%] 2xl:translate-x-[-60%] 2xl:translate-y-[0%]"
			/>
			<Image
				src={'/images/about-us/values/about-us-left-blob-mobile.svg'}
				height={100}
				width={150}
				alt="Left Blob Mobile"
				className=" xs:translate-y-[5%] absolute left-0  bottom-0 z-[-1] translate-x-[-19%] translate-y-[11%] transform md:translate-x-[-19%]  md:translate-y-[20%]  lg:hidden"
			/>
			<div className="3xl:mt-[-10em] 4xl:-mt-[15em] 3xl:mb-[-10em] xs:mb-[0em] relative z-20 md:mt-[-4em] xl:mt-[-8em] xl:mb-[-3em] 2xl:mb-[-6em] ">
				<SectionContentWrapper>
					<FinancingPlanCardsContent />
					<AboutFinancingContent />
				</SectionContentWrapper>
			</div>
		</section>
	);
};

export default AboutFinancingSection;
