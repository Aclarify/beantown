import useWindowDimensions from '@lib/hooks/use-window-dimensions.hook';
import WaveWrapper from 'components/molecules/wave-wrapper.molecule';
import React from 'react';
import MassSaveStagesContent from './mass-save-stages.content';
import bottomWave from 'public/images/home/blogs/home-blogs-bottom-wave.svg';

const MassSaveStagesSection = () => {
	const { width } = useWindowDimensions();
	return (
		<section
			id="mass-save-stages"
			className="xs:mb-[-2em] 3xl:mb-[-21em]  relative z-10 mb-[-3em] pt-[4em] md:mb-[-5em] xl:mb-[-6em] 2xl:mb-[-15em] "
		>
			<MassSaveStagesContent />
			<WaveWrapper waveURL={bottomWave}></WaveWrapper>
		</section>
	);
};

export default MassSaveStagesSection;
