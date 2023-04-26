import { GlobalContext } from '@contexts/global/global.context';
import { jobsContext } from '@contexts/jobs/Job-benefits-context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import RichText from 'components/molecules/rich-text.molecule';
import { CareersContentProps } from 'pages/careers';
import React, { useContext } from 'react';

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
				className="mt-8  flex w-full flex-col gap-4 md:flex-row"
			>
				<div
					id="job-description"
					className=" flex-1  space-y-4 rounded-xl bg-[#FFFFFF] p-8 drop-shadow-sm "
				>
					<div>
						<h2>{activeJobDetails.jobDescriptionTitle || 'Job Description'}</h2>
					</div>
					<div>
						<RichText value={activeJobDetails.jobDescription?.contentRaw} />
					</div>
				</div>

				<div
					id="job-responsibility"
					className=" flex-1 rounded-2xl bg-[#F4F8FB] p-8"
				>
					<h5 className="p-4">{activeJobDetails.jobResponsibilityMainTitle}</h5>
					<div className="flex flex-col gap-4">
						{activeJobDetails.jobResponsibilities?.map((data, index) => {
							return (
								<div
									key={index}
									className="m-2 flex flex-col gap-2 rounded-2xl bg-white p-8 drop-shadow-sm "
								>
									<h6 className="text-3xl font-normal">
										{activeJobDetails.jobResponsibilityTitle}
									</h6>
									<p>{data}</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default JobDescriptionResponsibilityContent;
