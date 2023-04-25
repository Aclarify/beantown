import { GlobalContext } from '@contexts/global/global.context';
import { jobsContext } from '@contexts/jobs/jobs.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import RichText from 'components/molecules/rich-text.molecule';
import { CareersContentProps } from 'pages/careers';
import React, { useContext } from 'react'

const JobDescriptionResponsibilityContent = () => {
	const { pageContent } =
		useContext<GlobalContextProps<CareersContentProps>>(GlobalContext);
	const { activeJobDetails } = useContext(jobsContext);
	if (!pageContent) {
		return null;
	}

	if (!activeJobDetails) {
		return null;
	}
	
  return (
		<>
			<div
				id="job-description-responsibility-section"
				className="mt-8  flex w-full flex-col md:flex-row"
			>
				<div
					id="job-description"
					className=" flex-1  rounded-md bg-[#FFFFFF] p-8 space-y-4 "
				>
					<div>
						<h2 className=" ">
							{activeJobDetails.jobDescriptionTitle || 'Job Description'}
						</h2>
					</div>
					<div>
						<RichText value={activeJobDetails.jobDescription?.contentRaw} />
					</div>
				</div>

				<div
					id="job-responsibility"
					className="m-2 flex-1 rounded-lg bg-[#F4F8FB] p-4"
				>
					<h5 className="p-4">{activeJobDetails.jobResponsibilityMainTitle}</h5>

					{activeJobDetails.jobResponsibilities?.map((data, index) => {
						return (
							<div key={index} className="m-2 rounded-md bg-white p-4 flex flex-col gap-2 ">
								<h6 className="text-3xl font-semibold">
									{activeJobDetails.jobResponsibilityTitle}
								</h6>
								<p>{data}</p>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};
  
export default JobDescriptionResponsibilityContent