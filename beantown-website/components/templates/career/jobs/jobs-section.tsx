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
				src={'/images/career/jobs/career-top-left-blob.svg'}
				height={600}
				width={500}
				alt="Left Blob "
				className="3xl:translate-y-[119%] 4xl:translate-y-[171%] absolute left-0 bottom-0 hidden translate-y-[20%] translate-x-[-30%] transform lg:block xl:translate-x-[-31%] xl:translate-y-[27%] 2xl:translate-x-[-35%] 2xl:translate-y-[60%]"
			/>
			<Image
				src={'/images/career/jobs/career-top-left-blob.svg'}
				height={100}
				width={150}
				alt="Left Blob Mobile"
				className="  absolute left-0 bottom-0 translate-y-[100%]  translate-x-[-27%]  transform    lg:hidden"
			/>
			<section id="JobsSlider" className=" md:mt-32 ">
				<JobsSliderContent />
				<JobDescriptionResponsibilitySection />
			</section>
		</jobsContext.Provider>
	);
};
export default JobSection;
