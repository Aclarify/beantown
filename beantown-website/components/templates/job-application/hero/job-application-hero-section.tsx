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
				className="3xl:translate-y-[185%] 4xl:translate-y-[235%] absolute left-0 -z-10 hidden translate-y-[141%] -translate-x-[65%]  transform lg:block 2xl:-translate-x-[65%] 2xl:translate-y-[140%]"
			/>
			<SectionContentWrapper>
				<JobApplicationHeroContent />
			</SectionContentWrapper>
			<Image
				src={'/images/job-application/hero/top-right-blob.svg'}
				height={300}
				width={400}
				alt="Right Blob "
				className="absolute right-0 top-0 -z-10 hidden translate-y-[1%] translate-x-[86%] transform lg:block 2xl:translate-x-[80%]"
			/>
			<Image
				src={'/images/job-application/right-blob.svg'}
				height={300}
				width={400}
				alt="Right Blob form "
				className="3xl:translate-y-[400%] 4xl:translate-y-[485%]  absolute right-0 top-0 -z-10 hidden translate-y-[263%] translate-x-[22%] transform lg:block 2xl:translate-x-[10%] 2xl:translate-y-[315%]"
			/>
		</section>
	);
};

export default JobApplicationHeroSection;
