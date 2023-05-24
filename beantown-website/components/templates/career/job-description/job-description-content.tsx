import { GlobalContext } from '@contexts/global/global.context';
import { jobsContext } from '@contexts/jobs/Job-benefits-context';
import { buttonHoverStyle } from '@lib/styles/button.style';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import clsx from 'clsx';
import Button from 'components/atoms/button.atom';
import RichText from 'components/molecules/rich-text.molecule';
import Link from 'next/link';
import { CareersContentProps } from 'pages/careers';
import React, { useContext } from 'react';

const JobDescriptionResponsibilityContent = () => {
	const { pageContent } =
		useContext<GlobalContextProps<CareersContentProps>>(GlobalContext);
	const { activeJobDetails } = useContext(jobsContext);
	if (!pageContent) {
		return null;
	}

	const { applyButton } = pageContent.page[0];

	if (!activeJobDetails || !applyButton) {
		return null;
	}

	return (
		<>
			<div className="text-primary-black flex flex-wrap justify-between gap-y-4 pt-2 pb-2 text-center">
				<h1 className={clsx('w-full', 'md:w-auto')}>
					{activeJobDetails.positionName}{' '}
				</h1>
				<div
					className={clsx(
						'w-full',
						'md:w-auto',
						'flex',
						'justify-center',
						'items-center'
					)}
				>
					<Link
						href={{
							pathname: `${applyButton?.href}`,
							query: `positionName=${activeJobDetails.positionName}`,
						}}
						className="w-full"
					>
						<button
							className={clsx(
								'w-full',
								'text-white',
								'bg-primary-shade-1',
								'ring-0',
								'focus:ring-0',
								'text-xl',
								'md:text-2xl',
								'font-normal',
								'leading-[32px]',
								'rounded-lg',
								'py-2',
								'md:py-3',
								'px-8',
								'md:px-32',
								'tracking-wide',
								buttonHoverStyle
							)}
						>
							{applyButton?.text}
						</button>
					</Link>
				</div>
			</div>
			<div
				id="job-description-responsibility-section"
				className="mt-8  flex w-full flex-col gap-4 md:flex-row"
			>
				<div
					id="job-description"
					className=" flex-1  space-y-4 rounded-2xl bg-white p-8 shadow-[rgba(44,_48,_88,_0.16)_0px_8px_200px] lg:rounded-3xl "
				>
					<div>
						<h2 className="text-primary-black">
							{activeJobDetails.jobDescriptionTitle || 'Job Description'}
						</h2>
					</div>
					<div className="text-primary-shade-1">
						<RichText value={activeJobDetails.jobDescription?.contentRaw} />
					</div>
				</div>

				<div
					id="job-responsibility"
					className=" bg-secondary-shade-3 flex-1 rounded-2xl p-4 shadow-[rgba(44,_48,_88,_0.16)_0px_8px_200px]  lg:rounded-3xl"
				>
					<h3 className="text-primary-black p-4">
						{activeJobDetails.jobResponsibilityMainTitle}
					</h3>
					<div className="flex flex-col ">
						{activeJobDetails.jobResponsibilities?.map((data, index) => {
							return (
								<div
									key={index}
									className="text-primary-shade-1 m-2 flex flex-col gap-2 rounded-2xl bg-white p-4 shadow-[rgba(44,_48,_88,_0.16)_0px_8px_200px] md:p-8  lg:rounded-3xl "
								>
									<h5 className=" text-3xl font-normal">{data?.titleText}</h5>
									<p>{data?.description}</p>
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
