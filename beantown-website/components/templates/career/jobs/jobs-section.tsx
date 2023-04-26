import React, { useContext, useEffect, useState } from 'react';
import JobsSliderContent from './jobs-slider-content';
import JobDescriptionResponsibilitySection from '../job-description/job-description-section';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { CareersContentProps } from 'pages/careers';
import { JobDetails } from '@typing/gql/graphql';
import { jobsContext } from '@contexts/jobs/Job-benefits-context';
import Image from 'next/image';

const JobSection = () => {
	const { pageContent } =
		useContext<GlobalContextProps<CareersContentProps>>(GlobalContext);
	const [activeJobDetails, setActiveJobDetails] = useState<JobDetails>();
	const [selectedJobDetails, setSelectedJobDetails] = useState<
		JobDetails | any
	>();

	const [show, setShow] = useState(true);

	useEffect(() => {
		setShow(false);
		setTimeout(() => {
			setShow(true);
		}, 100);
	}, [activeJobDetails]);

	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { jobList } = pageData;
	if (!jobList) {
		return null;
	}

	return (
		<jobsContext.Provider
			value={{
				activeJobDetails: activeJobDetails || jobList[0],
				setActiveJobDetails,
			}}
		>
			<Image
				src={'/images/career/jobs/career-page-blob.svg'}
				height={551}
				width={661}
				alt="Left Blob "
				className="absolute left-4 hidden -translate-x-[35%] transform lg:block"
			/>
			<section id="JobsSlider" className=" md:mt-32 ">
				<JobsSliderContent />
				<JobDescriptionResponsibilitySection />
			</section>
		</jobsContext.Provider>
	);
};
export default JobSection;
