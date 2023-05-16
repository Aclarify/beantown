import React, { useContext, useState } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import RichText from 'components/molecules/rich-text.molecule';
import ContentWrapper from 'components/organisms/content-wrapper.organism';
import useWindowDimensions from '@lib/hooks/use-window-dimensions.hook';
import { FinancingContentProps } from 'pages/financing';
import Animate from 'components/molecules/animate.molecule';
import MaskedImageWithBackground from 'components/organisms/masked-image-with-background.organism';
import PlanCard from 'components/organisms/financing-plan-card.organism';
import { isNullish } from '@apollo/client/cache/inmemory/helpers';
import PlanModal from 'components/organisms/financing-plan-card-model.organism';
import { Index } from 'react-instantsearch-dom';

const FinancingPlanCardsContent = () => {
	const [showPlanCardModel, setShowPlanCardModel] = useState(false);
	const [selectedPlanCard, setSelectedPlanCard] = useState<any>(null);
	const { pageContent } =
		useContext<GlobalContextProps<FinancingContentProps>>(GlobalContext);
	const { width } = useWindowDimensions();

	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { planCards,planIcon } = pageData;

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
				<h2 className=" text-primary-black text-center pb-12 md:mb-16 mt-4 md:mt-8 ">{'Plan'}</h2>

				<div className="container mx-auto  max-w-[1200px] flex  flex-wrap  items-center justify-center gap-8">
					{planCards?.map((cardData,index)=>{
						return (
							<div
								key={index}
								className="justify-stretch   flex  h-[348px] w-[380px]  flex-col items-center    rounded-2xl bg-white p-2 shadow-[rgba(44,_48,_88,_0.16)_0px_8px_200px] md:h-[380px]  md:gap-4 md:p-8 lg:h-[570px]  lg:w-[480px]   lg:rounded-3xl   "
							>
								<PlanCard
									iconImage={planIcon || ''}
									planTitle={cardData?.titleText || ''}
									planDescription={
										cardData?.description || ''
									}
									onShowMore={() => onPlanCardClick(PlanCard)}
								/>
							</div>
						);
					})}
					
					
				</div>
			</Animate>
			<PlanModal
				onClose={handleOnClose}
				visible={showPlanCardModel}
				benefitsIconImage={selectedPlanCard?.image || ''}
				benefitCardTitle={selectedPlanCard?.titleText || ''}
				benefitCardDescription={selectedPlanCard?.description || ''}
			/>
		</div>
	);
};

export default FinancingPlanCardsContent;
