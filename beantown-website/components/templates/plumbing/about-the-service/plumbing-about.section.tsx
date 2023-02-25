import React from 'react';
import useWindowDimensions from '@lib/hooks/use-window-dimensions.hook';
import WaveWrapper from 'components/molecules/wave-wrapper.molecule';
import Image from 'next/image';
import SectionContentWrapper from 'components/molecules/section-content-wrapper.molecule';
import AboutPlumbingServiceContent from './plumbing-about.content';
import PlumbingServicesList from '../plumbing-services-list';
const AboutPlumbingServiceSection = () => {
	const { width } = useWindowDimensions();
	return (
		<section
			id="PlumbingRepairs"
			className="3xl-[-8em] relative z-10 mt-[-5em] sm:mt-[-7em] md:mt-[-9em] lg:mt-[-4em] 2xl:mt-[-6em] "
		>
			<WaveWrapper
				waveURL={
					width > 1023
						? '/images/services/services-hero-bottom-wave.svg'
						: '/images/services/services-hero-bottom-wave-mobile.svg'
				}
			></WaveWrapper>
			<Image
				src={'/images/plumbing/about/plumbing-green-blob.svg'}
				height={600}
				width={500}
				alt="Left Blob "
				className="absolute left-0 hidden -translate-x-[40%] translate-y-[35%] transform lg:block"
			/>
			<SectionContentWrapper>
				<AboutPlumbingServiceContent />
				<PlumbingServicesList />
			</SectionContentWrapper>
			<Image
				src={'/images/plumbing/about/plumbing-green-blob-mobile.svg'}
				height={280}
				width={300}
				alt="Right Blob Mobile"
				className="absolute right-0 bottom-0 z-[-1]   translate-x-[40%] translate-y-[-55%] transform lg:hidden"
			/>
			<WaveWrapper
				waveURL={
					width > 1023
						? '/images/plumbing/about/plumbing-about-bottom-wave.svg'
						: '/images/plumbing/about/plumbing-about-bottom-wave-mobile.svg'
				}
			></WaveWrapper>
		</section>
	);
};

export default AboutPlumbingServiceSection;
