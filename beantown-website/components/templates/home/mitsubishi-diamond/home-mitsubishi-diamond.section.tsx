import React from 'react';
import SectionContentWrapper from 'components/molecules/section-content-wrapper.molecule';
import HomeMitsubishiDiamondContent from './home-mitsubishi-diamond.content';
import topWave from 'public/images/home/brands/home-brands-top-wave.svg';
import WaveWrapper from 'components/molecules/wave-wrapper.molecule';

const HomeMitsubishiDiamond = () => {
	return (
		<section id="mitsubishiDiamondSection" className="relative mt-[-8em]">
			<WaveWrapper waveURL={topWave}></WaveWrapper>
			<div className="bg-primary-white-shade-1 pb-16 pt-8">
				<SectionContentWrapper>
					<HomeMitsubishiDiamondContent />
				</SectionContentWrapper>
			</div>
		</section>
	);
};

export default HomeMitsubishiDiamond;
