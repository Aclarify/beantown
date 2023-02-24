import React from 'react';
import WaveWrapper from 'components/molecules/wave-wrapper.molecule';
import SectionContentWrapper from 'components/molecules/section-content-wrapper.molecule';
import PlumbingBlogsContent from './plumbing-blogs.content';
import useWindowDimensions from '@lib/hooks/use-window-dimensions.hook';

const PlumbingBlogsSection = () => {
	const { width } = useWindowDimensions();
	return (
		<section
			id="blogs"
			className="3xl:mt-[-6em] relative z-10 mt-[-2em] md:mt-[-3em] 2xl:mt-[-4em]   "
		>
			<WaveWrapper
				waveURL={
					width > 1023
						? '/images/plumbing/blogs/plumbing-blogs-top-wave.svg'
						: '/images/plumbing/blogs/plumbing-blogs-top-wave-mobile.svg'
				}
			></WaveWrapper>
			<div className="bg-service-green-bg">
				<SectionContentWrapper>
					<PlumbingBlogsContent />
				</SectionContentWrapper>
			</div>
			<WaveWrapper waveURL="/images/plumbing/blogs/plumbing-blogs-bottom-wave.svg"></WaveWrapper>
		</section>
	);
};

export default PlumbingBlogsSection;
