import React from 'react';
import useWindowDimensions from '@lib/hooks/use-window-dimensions.hook';
import WaveWrapper from 'components/molecules/wave-wrapper.molecule';
import Image from 'next/image';
import SectionContentWrapper from 'components/molecules/section-content-wrapper.molecule';
import HeatingCoolingMassSaveContent from './heating-cooling-mass-save.content';
const HeatingCoolingMassSaveSection = () => {
	const { width } = useWindowDimensions();
	return (
		<section
			id="massSave"
			className=" relative z-10 -mb-[2em] sm:-mb-[2em] md:-mb-[3em] lg:-mb-[4em] 2xl:-mb-[6em]"
		>
			<SectionContentWrapper>
				<HeatingCoolingMassSaveContent />
			</SectionContentWrapper>
			<Image
				src={'/images/heating-cooling/hc-blob.svg'}
				height={180}
				width={200}
				alt="Right Blob Mobile"
				className="absolute right-0 bottom-0 z-[-1] translate-x-[38%]  -translate-y-[87%] transform md:hidden"
			/>
			<WaveWrapper
				waveURL={
					width > 1023
						? '/images/heating-cooling/mass-save/hc-mass-save-bottom-wave.svg'
						: '/images/heating-cooling/mass-save/hc-mass-save-bottom-wave-mobile.svg'
				}
			></WaveWrapper>
		</section>
	);
};

export default HeatingCoolingMassSaveSection;
