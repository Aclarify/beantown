import React from 'react'
import JobDescriptionResponsibilityContent from './job-description-content';
import SectionContentWrapper from 'components/molecules/section-content-wrapper.molecule';
import Image from 'next/image';
import JobBenefitsContent from './Job-benefits-content';

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
				src={'/images/career/jobs/blob-shape.svg'}
				height={100}
				width={200}
				alt="Left Blob "
				className="-z-1 absolute left-0 hidden translate-y-[5%] transform lg:block"
			/>

			<Image
				src={'/images/career/jobs/career-right-blob.svg'}
				height={290}
				width={350}
				alt="Right Blob  "				
				className="-z-1 absolute right-0  block translate-y-[5%] translate-x-[65%] transform"
			/>
			<SectionContentWrapper>
				<JobBenefitsContent />
			</SectionContentWrapper>
		</section>
	);
}

export default JobDescriptionResponsibilitySection;