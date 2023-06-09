import RichText from 'components/molecules/rich-text.molecule';
import ContentWrapper from 'components/organisms/content-wrapper.organism';
import React, { useContext } from 'react';
import clsx from 'clsx';
import MassSaveStagesCard from './mass-save-stages-cards';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { MassSaveContentProps } from 'pages/mass-save';
import SectionContentWrapper from 'components/molecules/section-content-wrapper.molecule';
import Animate from 'components/molecules/animate.molecule';
import CtaWrapper from 'components/molecules/cta-wrapper.molecule';
import ContactUsModal from 'components/organisms/contact-us-modal.organism';
import { buttonHoverStyle } from '@lib/styles/button.style';
import { useModal } from 'components/organisms/modal.organism';

const MassSaveStagesContent = () => {
	const { isVisible, toggleModal } = useModal();
	const { pageContent } =
		useContext<GlobalContextProps<MassSaveContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];

	const {
		logoDark,
		howItWorksTitle,
		howItWorksDescription,
		stagesCards,
		contactButton,
	} = pageData;
	return (
		<SectionContentWrapper>
			<div className="relative   px-5 xl:pt-20">
				<div className="flex flex-col items-center pb-8 text-center">
					<ContentWrapper>
						<ContentWrapper.Title>
							<Animate bottom>
								<h2 className="text-primary-black mb-4">{howItWorksTitle}</h2>
							</Animate>
						</ContentWrapper.Title>
						<ContentWrapper.Description className="lg:flex lg:justify-center">
							<div className="text-wrapper text-primary-shade-1  lg:w-3/4 ">
								<Animate>
									<RichText value={howItWorksDescription?.contentRaw} />
								</Animate>
							</div>
						</ContentWrapper.Description>
					</ContentWrapper>
				</div>
				<div className="flex-col justify-center xl:grid xl:grid-cols-5 ">
					{stagesCards?.map((content, index) => {
						return (
							<div key={index} className=" flex justify-center ">
								<MassSaveStagesCard
									key={index}
									title={content?.titleText || ''}
									content={content?.description || ''}
									thumbnailImage={content?.image}
									thumbnailAltText={''}
								/>
								{index !== stagesCards.length - 1 && (
									<div className="dots hidden w-full self-baseline border-b-2 border-dashed border-black pt-20 xl:block"></div>
								)}
							</div>
						);
					})}
				</div>
				<div className="flex flex-col items-center  text-center">
					<ContentWrapper.CTA className="mt-[16px] lg:mt-[32px]">
						<CtaWrapper.CTA
							className={clsx(
								'bg-primary-shade-1 button text-white',
								buttonHoverStyle
							)}
							onClick={toggleModal}
						>
							{contactButton?.text}
						</CtaWrapper.CTA>
					</ContentWrapper.CTA>
					<ContactUsModal
						isVisible={isVisible}
						onClose={toggleModal}
						logoDark={logoDark}
						ctaBgColor="bg-primary-shade-1"
						ctaTextColor="text-white"
						dialogTitle={contactButton?.dialogTitle || ''}
						dialogDescription={contactButton?.dialogDesc || ''}
						buttonHref={contactButton?.dialogButtonHref || ''}
						buttonText={contactButton?.dialogButtonText || ''}
					/>
				</div>
			</div>
		</SectionContentWrapper>
	);
};

export default MassSaveStagesContent;
