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
			className=" 3xl:top-[-8em] lg:top[-4em] relative top-[-5em] z-10 sm:top-[-6em] md:top-[-8em] 2xl:top-[-6em] "
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
				className="absolute left-0 hidden -translate-x-[40%] translate-y-[25%] transform md:block"
			/>
			<SectionContentWrapper>
				<AboutPlumbingServiceContent />
				<PlumbingServicesList />
			</SectionContentWrapper>
			<Image
				src={'/images/plumbing/about/plumbing-green-blob-mobile.svg'}
				height={180}
				width={200}
				alt="Right Blob Mobile"
				className="absolute right-0 bottom-0 z-[-1] translate-x-[38%]  translate-y-[8%] transform md:hidden"
			/>
		</section>
	);
};

export default AboutPlumbingServiceSection;
