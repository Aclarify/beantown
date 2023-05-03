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
	const { careerBenefits, globaljobBenefitSectionTitle } = pageData;
	if (!activeJobDetails) {
		return null;
	}

	const allBenefits = careerBenefits
		? [...careerBenefits, ...(activeJobDetails?.jobBenefitCards || [])]
		: activeJobDetails?.jobBenefitCards || [];

	

	const handleOnClose = () => {
			setShowBenefitCardModel(false);		
			document.body.style.overflow = 'unset';
	};

	const onBenefitsCardClick = (benefitsCard:any) => {
			setSelectedBenefitCard(benefitsCard);
			setShowBenefitCardModel(true);
			console.log('Selected card data    :' + selectedBenefitCard);
		// Disables Background Scrolling whilst the SideDrawer/Modal is open
		if (typeof window != 'undefined' && window.document) {
			document.body.style.overflow = 'hidden';
		}
		
	};
		
	
	return (
		<section className="mb-72 mt-12 md:mt-28">
			<Animate>
				<div className="flex flex-col items-center justify-center ">
					<h3 className="text-primary-black mx-auto py-4 px-8 text-center ">
						{globaljobBenefitSectionTitle}
					</h3>

					{/* Job Selected Benefits */}
					<div className="container mx-auto  flex  h-auto   w-full flex-wrap items-center justify-center gap-8  p-8  ">
						
						{allBenefits?.map((benefitsCard, index) => {
							return (
								<div key={index}>
									<BenefitsCard
										onShowMore={() => onBenefitsCardClick(benefitsCard)}
										brifcaseIconImage={benefitsCard?.image || ''}
										benefitTitle={benefitsCard?.titleText || ''}
										benefitDescription={benefitsCard?.description || ''}
									/>
								</div>
							);
						})}
					</div>

					<Button fontColor="text-white" bgColor="bg-primary-shade-1">
						<Link href={'/jobApplication'}>{'Apply'}</Link>
					</Button>
				</div>
			</Animate>

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

			<JobBenefitsModal
				onClose={handleOnClose}
				visible={showBenefitCardModel}
				benefitsIconImage={selectedBenefitCard?.image?.asset?.url || ''}
				benefitsCardTitle={selectedBenefitCard?.title || ''}
				benefitsCardDescription={selectedBenefitCard?.description || ''}
			/>

			
		</section>
	);
};
export default JobBenefitsContent;

