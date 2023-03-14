import React from 'react';
import WaveWrapper from 'components/molecules/wave-wrapper.molecule';
import SectionContentWrapper from 'components/molecules/section-content-wrapper.molecule';
import ElectricalBlogsContent from './electrical-blogs.content';
import useWindowDimensions from '@lib/hooks/use-window-dimensions.hook';
import topWave from 'public/images/electrical/blogs/electrical-blogs-top-wave.svg';
import topWaveMobile from 'public/images/electrical/blogs/electrical-blogs-top-wave-mobile.svg';
import bottomWave from 'public/images/electrical/blogs/electrical-blogs-bottom-wave.svg';

const ElectricalBlogsSection = () => {
	const { width } = useWindowDimensions();
	return (
		<section
			id="electrical-blogs"
			className="3xl:mt-[-6em] relative z-10 mt-[4em]  md:mt-[-3em] 2xl:mt-[-4em]  "
		>
			<WaveWrapper
				waveURL={width > 1023 ? topWave : topWaveMobile}
			></WaveWrapper>
			<div className="bg-service-yellow-bg  md:mt-[-2em]  lg:mt-[-1em] 2xl:mt-0">
				<SectionContentWrapper>
					<ElectricalBlogsContent />
				</SectionContentWrapper>
			</div>
			<WaveWrapper waveURL={bottomWave}></WaveWrapper>
		</section>
	);
};

export default ElectricalBlogsSection;
