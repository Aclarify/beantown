import React from 'react';
import WaveWrapper from 'components/molecules/wave-wrapper.molecule';
import SectionContentWrapper from 'components/molecules/section-content-wrapper.molecule';
import HeatingCoolingBlogsContent from './heating-cooling-blogs.content';
import topWave from 'public/images/heating-cooling/blogs/hc-blogs-top-wave.svg';
import bottomWave from 'public/images/heating-cooling/blogs/hc-blogs-bottom-wave.svg';

const HeatingCoolingBlogsSection = () => {
	return (
		<section id="blogs" className="relative z-10 -mb-[11em] ">
			<WaveWrapper waveURL={topWave}></WaveWrapper>
			<div className="bg-service-red-bg">
				<SectionContentWrapper>
					<HeatingCoolingBlogsContent />
				</SectionContentWrapper>
			</div>
			<WaveWrapper waveURL={bottomWave}></WaveWrapper>
		</section>
	);
};

export default HeatingCoolingBlogsSection;
