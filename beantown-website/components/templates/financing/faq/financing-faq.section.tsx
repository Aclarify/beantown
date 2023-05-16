import React from 'react';
import bottomWave from 'public/images/mass-save/mass-save-faq-bottom-wave.svg';
import WaveWrapper from 'components/molecules/wave-wrapper.molecule';
import FinancingFaqContent from './financing-faq.content';

const FinancingFaqSection = () => {
	return (
		<>
			<section
				id="faq"
				className=" z-5  3xl:mt-[15em] relative mb-[6em] 2xl:mt-[10em]  "
			>
				<div>
					<FinancingFaqContent />
					<WaveWrapper waveURL={bottomWave}></WaveWrapper>
				</div>
			</section>
		</>
	);
};

export default FinancingFaqSection;
