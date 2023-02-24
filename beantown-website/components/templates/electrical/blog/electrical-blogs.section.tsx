import React from 'react';
import WaveWrapper from 'components/molecules/wave-wrapper.molecule';
import SectionContentWrapper from 'components/molecules/section-content-wrapper.molecule';
import ElectricalBlogsContent from './electrical-blogs.content';
import useWindowDimensions from '@lib/hooks/use-window-dimensions.hook';
import ElectricalRIULMoreContent from '../electrical-services-list.content';

const ElectricalBlogsSection = () => {
	const { width } = useWindowDimensions();
	return (
		<section
			id="electrical-blogs"
			className="3xl:mt-[-6em] relative z-10 mt-[-2em] md:mt-[-3em] 2xl:mt-[-4em]   "
		>
			<WaveWrapper
				waveURL={
					width > 1023
						? '/images/electrical/blogs/electrical-blogs-top-wave.svg'
						: '/images/electrical/blogs/electrical-blogs-top-wave-mobile.svg'
				}
			></WaveWrapper>
			<div className="bg-service-yellow-bg">
				<SectionContentWrapper>
					<ElectricalBlogsContent />
				</SectionContentWrapper>
			</div>
			<WaveWrapper waveURL="/images/electrical/blogs/electrical-blogs-bottom-wave.svg"></WaveWrapper>
		</section>
	);
};

export default ElectricalBlogsSection;
