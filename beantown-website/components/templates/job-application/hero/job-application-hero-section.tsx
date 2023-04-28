import React from 'react';
import Image from 'next/image';
import SectionContentWrapper from 'components/molecules/section-content-wrapper.molecule';
import JobApplicationHeroContent from './job-application-hero-content';

const JobApplicationHeroSection = () => {
	return (
		<section id="job-application-hero-section" className="relative z-10  ">
			<Image
				src={'/images/job-application/hero/hero-left-blob.svg'}
				height={300}
				width={400}
				alt="Left Blob "
				className="-z-1 absolute left-0 hidden translate-y-[105%] -translate-x-[55%]  transform lg:block"
			/>
			<SectionContentWrapper>
				<JobApplicationHeroContent />
			</SectionContentWrapper>
		</section>
	);
};

export default JobApplicationHeroSection;
