import React from 'react';
import WaveWrapper from 'components/molecules/wave-wrapper.molecule';
import SectionContentWrapper from 'components/molecules/section-content-wrapper.molecule';
import HeatingCoolingBlogsContent from './heating-cooling-blogs.content';

const HeatingCoolingBlogsSection = () => {
	return (
		<section id="blogs" className="relative z-10 -mb-[11em] ">
			<WaveWrapper waveURL="/images/heating-cooling/blogs/hc-blogs-top-wave.svg"></WaveWrapper>
			<div className="bg-service-red-bg">
				<SectionContentWrapper>
					<HeatingCoolingBlogsContent />
				</SectionContentWrapper>
			</div>
			<WaveWrapper waveURL="/images/heating-cooling/blogs/hc-blogs-bottom-wave.svg"></WaveWrapper>
		</section>
	);
};

export default HeatingCoolingBlogsSection;
