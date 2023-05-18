import React, { useContext, useState } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { FinancingContentProps } from 'pages/financing';
import Animate from 'components/molecules/animate.molecule';
import PlanCard from 'components/organisms/financing-plan-card.organism';
import PlanModal from 'components/organisms/financing-plan-card-model.organism';


const FinancingPlanCardsContent = () => {
	const [showPlanCardModel, setShowPlanCardModel] = useState(false);
	const [selectedPlanCard, setSelectedPlanCard] = useState<any>(null);

	const { pageContent } =
		useContext<GlobalContextProps<FinancingContentProps>>(GlobalContext);


	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { planCards, planIcon, planSectionTitle } = pageData;

	const handleOnClose = () => {
		setShowPlanCardModel(false);
	};

	const onPlanCardClick = (planCard: any) => {
		setShowPlanCardModel(true);
		setSelectedPlanCard(planCard);
		
	};

	return (
		<div id="section-wrapper" className="z-10 mb-[6em]  flex flex-col   ">
			<Animate>
				<h2 className=" text-primary-black mt-4 pb-12 text-center md:mb-16 md:mt-8 ">
					{planSectionTitle}
				</h2>

				<div className="container mx-auto  flex max-w-[1200px]  flex-wrap  items-center justify-center gap-8">
					{planCards?.map((cardData, index) => {
						return (
							<div
								key={index}
								className="justify-stretch   flex  h-[348px] w-[380px]  flex-col items-center    rounded-2xl bg-white p-2 shadow-[rgba(44,_48,_88,_0.16)_0px_8px_200px] md:h-[380px]  md:gap-4 md:p-8 lg:h-[570px]  lg:w-[480px]   lg:rounded-3xl   "
							>
								<PlanCard
									iconImage={planIcon || ''}
									planTitle={cardData?.titleText || ''}
									planDescription={cardData?.description || ''}
									onShowMore={() => onPlanCardClick(cardData)}
								/>
							</div>
						);
					})}
				</div>
			</Animate>
			<PlanModal
				onClose={handleOnClose}
				visible={showPlanCardModel}
				planIconImage={planIcon || ''}
				planCardTitle={selectedPlanCard?.titleText || ''}
				planCardDescription={selectedPlanCard?.description || ''}
			/>
		</div>
	);
};

export default FinancingPlanCardsContent;
