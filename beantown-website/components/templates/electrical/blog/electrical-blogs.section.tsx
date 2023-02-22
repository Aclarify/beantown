import React from 'react';
import WaveWrapper from 'components/molecules/wave-wrapper.molecule';
import SectionContentWrapper from 'components/molecules/section-content-wrapper.molecule';
import HeatingCoolingBlogsContent from './electrical-blogs.content';

const ElectricalBlogsSection = () => {
	return (
		<section id="electrical-logs" className="relative z-10 -mb-[11em] ">
			<WaveWrapper waveURL="/images/electrical/blogs/electrical-blogs-top-wave.svg"></WaveWrapper>
			<div className="bg-service-yellow-bg">
				<SectionContentWrapper>
					<HeatingCoolingBlogsContent />
				</SectionContentWrapper>
			</div>
			<WaveWrapper waveURL="/images/electrical/blogs/electrical-blogs-bottom-wave.svg"></WaveWrapper>
		</section>
	);
};

export default ElectricalBlogsSection;
