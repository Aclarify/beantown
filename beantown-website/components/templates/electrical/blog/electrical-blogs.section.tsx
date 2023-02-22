import React from 'react';
import WaveWrapper from 'components/molecules/wave-wrapper.molecule';
import SectionContentWrapper from 'components/molecules/section-content-wrapper.molecule';
import HeatingCoolingBlogsContent from './electrical-blogs.content';

const ElectricalBlogsSection = () => {
	return (
		<section
			id="electrical-blogs"			
			className=" lg:mb[2em] 3xl:mb-[3em] 
				relative z-10 -mt-[2em]  mb-[3em] sm:-mt-[3em] md:-mt-[3em] md:mb-[2em] lg:-mt-[3em] lg:mb-[2em] xl:mb-[3em] 2xl:mb-[5em] 2xl:-mt-[4em]"
		>
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
