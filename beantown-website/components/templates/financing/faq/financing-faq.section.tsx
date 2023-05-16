import React from 'react';
import bottomWave from 'public/images/mass-save/mass-save-faq-bottom-wave.svg';
import WaveWrapper from 'components/molecules/wave-wrapper.molecule';
import FinancingFaqContent from './financing-faq.content';

const FinancingFaqSection = () => {
	return (
		<>
			<section
				id="faq"
				className=" z-5   relative mb-[-4em]  "
			>
				<div className='-mt-28 '>
					<FinancingFaqContent />
					<WaveWrapper waveURL={bottomWave}></WaveWrapper>
				</div>
			</section>
		</>
	);
};

export default FinancingFaqSection;
