import useWindowDimensions from '@lib/hooks/use-window-dimensions.hook';
import WaveWrapper from 'components/molecules/wave-wrapper.molecule';
import Image from 'next/image';
import React from 'react';
import MassSaveStagesContent from './mass-save-stages.content';
import bottomWaveMobile from 'public/images/services/services-hero-bottom-wave-mobile.svg';
import bottomWave from 'public/images/services/services-hero-bottom-wave.svg';

const MassSaveStagesSection = () => {
	const { width } = useWindowDimensions();
	return (
		<section
			id="cooling-and-heating-services"
			className="z-5  relative mb-[3em]   "
		>
			<MassSaveStagesContent />
		</section>
	);
};

export default MassSaveStagesSection;
