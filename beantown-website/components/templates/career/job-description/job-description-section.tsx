import React from 'react';
import JobDescriptionResponsibilityContent from './job-description-content';
import SectionContentWrapper from 'components/molecules/section-content-wrapper.molecule';
import Image from 'next/image';
import JobBenefitsContent from './job-benefits.content';

const JobDescriptionResponsibilitySection = () => {
	return (
		<section
			id="JobDescriptionResponsibility-details"
			className="relative z-10 mb-40"
		>
			<SectionContentWrapper>
				<JobDescriptionResponsibilityContent />
			</SectionContentWrapper>
			<Image
				src={'/images/career/jobs/career-page-blob.svg'}
				height={551}
				width={661}
				alt="Left Blob "
				className="-z-1 3xl:translate-y-[-42%] absolute left-0 hidden -translate-x-[35%] translate-y-[-49%] transform lg:block"
			/>

			<Image
				src={'/images/career/jobs/career-page-blob.svg'}
				height={300}
				width={350}
				alt="Left Blob Mobile "
				className="-z-1  absolute left-0 top-0 -translate-x-[35%] translate-y-[13%] transform md:translate-y-[-2%] lg:hidden"
			/>

			<Image
				src={'/images/career/jobs/career-page-blob.svg'}
				height={551}
				width={661}
				alt="Right Blob  "
				className="-z-1   absolute right-0 block translate-x-[60%] translate-y-[5%]  transform"
			/>
			<SectionContentWrapper>
				<JobBenefitsContent />
			</SectionContentWrapper>
		</section>
	);
};

export default JobDescriptionResponsibilitySection;
