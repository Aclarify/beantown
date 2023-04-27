import React from 'react';
import Image from 'next/image';
import SectionContentWrapper from 'components/molecules/section-content-wrapper.molecule';
import JobApplicationHeroContent from './job-application-hero-content';

const JobApplicationHeroSection = () => {
	return (
		<section id="job-application-hero-section" className="relative z-10  ">
			<Image
				src={'/images/job-application/hero/blob-shape.svg'}
				height={100}
				width={200}
				alt="Left Blob "
				className="absolute left-0 hidden translate-y-[5%] transform lg:block"
			/>
			<SectionContentWrapper>
				<JobApplicationHeroContent />
			</SectionContentWrapper>
		</section>
	);
};

export default JobApplicationHeroSection;
