import React, { useContext, useEffect, useState } from 'react';
import JobsSliderContent from './jobs-slider-content';
import JobDescriptionResponsibilitySection from '../job-description/job-description-section';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { CareersContentProps } from 'pages/careers';
import { JobDetails } from '@typing/gql/graphql';
import { jobsContext } from '@contexts/jobs/Job-benefits-context';
import Image from 'next/image';
import clsx from 'clsx';
import SectionContentWrapper from 'components/molecules/section-content-wrapper.molecule';

const JobSection = () => {
	const { pageContent } =
		useContext<GlobalContextProps<CareersContentProps>>(GlobalContext);
	const [activeJobDetails, setActiveJobDetails] = useState<JobDetails>();
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
	const { jobList, jobListTitle } = pageData;
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
				className="3xl:translate-y-[215%] 4xl:translate-y-[230%] absolute left-0 bottom-0 hidden translate-y-[118%] translate-x-[-30%] transform lg:block xl:translate-x-[-31%] xl:translate-y-[112%] 2xl:translate-x-[-35%] 2xl:translate-y-[137%]"
			/>
			<Image
				src={'/images/career/jobs/career-top-left-blob.svg'}
				height={100}
				width={150}
				alt="Left Blob Mobile"
				className=" xs:translate-y-[-40%] absolute left-0 bottom-0 translate-y-[-29%] translate-x-[-27%] transform  sm:translate-y-[-9%]    lg:hidden"
			/>
			<section id="JobsSlider" className=" md:mt-32 ">
				<SectionContentWrapper>
					<h2 className={clsx('text-primary-black', 'w-full', 'my-8')}>
						{jobListTitle}
					</h2>
				</SectionContentWrapper>
				<JobsSliderContent />
				<JobDescriptionResponsibilitySection />
			</section>
		</jobsContext.Provider>
	);
};
export default JobSection;
