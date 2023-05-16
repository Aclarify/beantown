import React from 'react';
import MassSaveFaqContent from './mass-save-faq.content';
import bottomWave from 'public/images/mass-save/mass-save-faq-bottom-wave.svg';
import WaveWrapper from 'components/molecules/wave-wrapper.molecule';
import Image from 'next/image'

const MassSaveFaqSection = () => {
	return (
		<>
			<section
				id="mass-save-faq"
				className=" z-5  3xl:mt-[15em] relative mb-[6em] 2xl:mt-[10em]  "
			>
				<div>
					<MassSaveFaqContent />
					<WaveWrapper waveURL={bottomWave}></WaveWrapper>
				</div>
				
			</section>
		</>
	);
};

export default MassSaveFaqSection;
