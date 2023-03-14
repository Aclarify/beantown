import React from 'react';
import WaveWrapper from 'components/molecules/wave-wrapper.molecule';
import useWindowDimensions from '@lib/hooks/use-window-dimensions.hook';
import HeatingCoolingBrandsContent from './heating-cooling-brands.content';
import topWave from 'public/images/heating-cooling/brands/hc-brands-top-wave.svg';
import topWaveMobile from 'public/images/heating-cooling/brands/hc-brands-top-wave-mobile.svg';

const HeatingCoolingBrandsSection = () => {
	const { width } = useWindowDimensions();
	return (
		<section
			id="brand-desktop"
			className=" lg:mb[2em] 3xl:mb-[3em] 
				3xl:-mt-[5em] 4xl:-mt-[7em] relative z-10  -mt-[2em] mb-[3em] sm:-mt-[3em] md:-mt-[3em] md:mb-[2em] lg:-mt-[3em] lg:mb-[2em] xl:mb-[3em] 2xl:mb-[5em] 2xl:-mt-[4em]"
		>
			<WaveWrapper
				waveURL={width > 1023 ? topWave : topWaveMobile}
			></WaveWrapper>
			<HeatingCoolingBrandsContent />
		</section>
	);
};

export default HeatingCoolingBrandsSection;
