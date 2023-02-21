import useWindowDimensions from '@lib/hooks/use-window-dimensions.hook';
import WaveWrapper from 'components/molecules/wave-wrapper.molecule';
import Image from 'next/image';
import React from 'react';
import HeatingCoolingServicesContent from './heating-cooling-services.content';

const HeatingCoolingHeroServicesSection = () => {
	const { width } = useWindowDimensions();
	return (
		<section
			id="cooling-and-heating-services"
			className="z-5 -sm:mt-[6em] 3xl:-mt-[7em] relative -mt-[5em] md:-mt-[9em]  lg:-mt-[4em] "
		>
			<WaveWrapper
				waveURL={
					width > 1023
						? '/images/heating-cooling/services/hc-services-top-wave.svg'
						: '/images/services/services-hero-mobile-wave.svg'
				}
			></WaveWrapper>

			<Image
				src={'/images/heating-cooling/hc-blob.svg'}
				height={600}
				width={500}
				alt="Left Blob "
				className="absolute left-0 hidden -translate-x-[40%] transform md:block"
			/>
			<Image
				src={'/images/heating-cooling/hc-blob.svg'}
				height={180}
				width={200}
				alt="Top Left Blob Mobile"
				className=" absolute left-0 translate-y-[61%] -translate-x-[38%] transform md:hidden"
			/>
			<HeatingCoolingServicesContent />
			<Image
				src={'/images/heating-cooling/hc-blob.svg'}
				height={600}
				width={500}
				alt="Right Blob"
				className="absolute right-0 bottom-0 z-[-1] hidden translate-x-[40%] translate-y-[30%] transform md:block"
			/>
			<Image
				src={'/images/heating-cooling/hc-blob.svg'}
				height={180}
				width={200}
				alt="Bottom Left Blob Mobile"
				className=" absolute left-0 bottom-0 z-[-1] -translate-x-[36%] -translate-y-[2%] transform md:hidden"
			/>
			<Image
				src={'/images/heating-cooling/hc-blob.svg'}
				height={180}
				width={200}
				alt="Right Blob Mobile"
				className="absolute right-0 bottom-0 z-[-1] translate-x-[27%]  -translate-y-[354%] transform md:hidden"
			/>
		</section>
	);
};

export default HeatingCoolingHeroServicesSection;
