import React, { useContext, useState } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import Image from 'next/image';
import Animate from 'components/molecules/animate.molecule';
import { CareersContentProps } from 'pages/careers';
import { jobsContext } from '@contexts/jobs/Job-benefits-context';
import Link from 'next/link';
import Button from 'components/atoms/button.atom';
import BenefitsCard from 'components/organisms/benefit-card.organism';
import JobBenefitsModal from 'components/organisms/job-benefits-card-model';
import clsx from 'clsx';

const classNames = {
	benefitCardContainer: [
		'container',
		'mx-auto',
		'grid',
		'items-stretch',
		'justify-center',
		'gap-8',
		'md:grid-cols-3',
		'grid-auto-rows-minmax(auto, 1fr)',
	],
	benefitCard: [
		'w-full',
		'h-full',
		'py-4',
		'px-4',
		'md:px-6',
		'md:py-6',
		'flex',
		'flex-col',
		'justify-stretch',
		'items-center',
		'bg-white',
		'shadow-[rgba(44,_48,_88,_0.16)_0px_8px_200px]',
		'rounded-2xl',
		'lg:rounded-3xl',
	],
};

const JobBenefitsContent = () => {
	const [showBenefitCardModel, setShowBenefitCardModel] = useState(false);
	const [selectedBenefitCard, setSelectedBenefitCard] = useState<any>(null);

	const { pageContent } =
		useContext<GlobalContextProps<CareersContentProps>>(GlobalContext);
	const { activeJobDetails } = useContext(jobsContext);
	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { careerBenefits, globaljobBenefitSectionTitle, applyButton } =
		pageData;
	if (!activeJobDetails) {
		return null;
	}

	const allBenefits = careerBenefits
		? [...careerBenefits, ...(activeJobDetails?.jobBenefitCards || [])]
		: activeJobDetails?.jobBenefitCards || [];

	const handleOnClose = () => {
		setShowBenefitCardModel(false);
	};

	const onBenefitsCardClick = (benefitsCard: any) => {
		setShowBenefitCardModel(true);
		setSelectedBenefitCard(benefitsCard);
	};

	return (
		<section className="mb-72 mt-12 md:mt-28 2xl:mt-40">
			<Animate>
				<div className="flex flex-col items-center justify-center ">
					<h3 className="text-primary-black mx-auto mb-12 py-4 px-8 text-center">
						{globaljobBenefitSectionTitle}
					</h3>
					<div className={clsx(classNames.benefitCardContainer)}>
						{allBenefits?.map((benefitsCard, index) => {
							return (
								<div key={index} className={clsx(classNames.benefitCard)}>
									<BenefitsCard
										briefcaseIconImage={benefitsCard?.image || ''}
										benefitTitle={benefitsCard?.titleText || ''}
										benefitDescription={benefitsCard?.description || ''}
										onShowMore={() => onBenefitsCardClick(benefitsCard)}
									/>
								</div>
							);
						})}
					</div>
				</div>
			</Animate>
			<JobBenefitsModal
				onClose={handleOnClose}
				visible={showBenefitCardModel}
				benefitsIconImage={selectedBenefitCard?.image || ''}
				benefitCardTitle={selectedBenefitCard?.titleText || ''}
				benefitCardDescription={selectedBenefitCard?.description || ''}
			/>
			<Image
				src={'/images/career/jobs/career-top-left-blob.svg'}
				height={290}
				width={350}
				alt="Bottom Blob  "
				className="-z-2 3xl:translate-x-[25%] 3xl:translate-y-[91%] absolute bottom-0 right-0  hidden translate-x-[33%]  translate-y-[101%] transform  lg:block 2xl:translate-x-[32%]  2xl:translate-y-[99%] "
			/>
			<Image
				src={'/images/career/jobs/career-bottom-blob-mobile.svg'}
				height={290}
				width={350}
				alt="Bottom Blob Mobile "
				className="-z-2 xs:translate-x-[29%] xs:translate-y-[103%] absolute bottom-0 right-0  block translate-x-[27%]  translate-y-[103%]  transform  lg:hidden "
			/>
		</section>
	);
};
export default JobBenefitsContent;
