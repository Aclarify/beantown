import React from 'react';
import WaveWrapper from 'components/molecules/wave-wrapper.molecule';
import Image from 'next/image';
import SectionContentWrapper from 'components/molecules/section-content-wrapper.molecule';
import AboutMassSaveContent from './about-mass-save.content';
import topWave from 'public/images/mass-save/mass-save-hero-wave-blob.svg';
import MassSaveFeaturesContent from '../features/mass-save-features.content';
import MassSaveAdditionalFeaturesContent from '../features/mass-save-additional-features.content';

const AboutMassSaveSection = () => {
	return (
		<section
			id="aboutMassSave"
			className="  xs:-mt-[5em] 3xl:-mt-[32em] 4xl:-mt-[40em] relative z-10 -mt-[7em] sm:-mt-[9em] md:-mt-[11em] lg:-mt-[14em] xl:-mt-[17em] 2xl:-mt-[27em]"
		>
			<WaveWrapper waveURL={topWave}></WaveWrapper>
			<Image
				src={'/images/mass-save/mass-save-blob.svg'}
				height={180}
				width={200}
				alt="Right Blob Mobile"
				className="xs:translate-x-[55%] xs:translate-y-[445%]  absolute right-0 bottom-0 z-[-1] translate-x-[45%] translate-y-[355%] transform md:translate-x-[45%]  lg:hidden"
			/>
			<Image
				src={'/images/mass-save/mass-save-blob.svg'}
				height={600}
				width={500}
				alt="Right Blob "
				className="lg:block translate-x-[65%] translate-y-[230%]  absolute right-0 bottom-0 z-[-1]  hidden"
			/>
			<div className="3xl:mt-[-10em] 4xl:-mt-[15em] 3xl:mb-[-10em] xs:mb-[0em] relative z-20 md:mt-[-4em] xl:mt-[-8em] xl:mb-[-3em] 2xl:mb-[-6em] ">
				<SectionContentWrapper>
					<AboutMassSaveContent />
					<MassSaveFeaturesContent />
					<MassSaveAdditionalFeaturesContent />
				</SectionContentWrapper>
			</div>
			<Image
				src={'/images/mass-save/mass-save-blob.svg'}
				height={600}
				width={500}
				alt="Left Blob"
				className="  3xl:translate-x-[-45%] 3xl:translate-y-[35%] absolute left-0 bottom-0 z-[-1] hidden  lg:block xl:translate-x-[-75%] xl:translate-y-[64%] 2xl:translate-x-[-60%] 2xl:translate-y-[75%]"
			/>

			<Image
				src={'/images/mass-save/mass-save-blob.svg'}
				height={100}
				width={150}
				alt="Left Blob Mobile"
				className=" xs:translate-x-[-45%] absolute left-0  bottom-0 z-[-1] translate-x-[-40%] translate-y-[100%] transform md:translate-x-[-35%]    lg:hidden"
			/>
		</section>
	);
};

export default AboutMassSaveSection;
