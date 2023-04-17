import RichText from 'components/molecules/rich-text.molecule';
import ContentWrapper from 'components/organisms/content-wrapper.organism';
import React, { useContext } from 'react';
import MassSaveStagesCard from './mass-save-stages-cards';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { MassSaveContentProps } from 'pages/mass-save';
import SectionContentWrapper from 'components/molecules/section-content-wrapper.molecule';
import Animate from 'components/molecules/animate.molecule';

const MassSaveStagesContent = () => {
	const { pageContent } =
		useContext<GlobalContextProps<MassSaveContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];

	const { howItWorksTitle, howItWorksDescription, stagesCards } = pageData;
	return (
		<SectionContentWrapper>
			<div className="relative   px-5 lg:pt-14">
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
				<div className="flex-col items-center lg:flex lg:flex-row ">
					{stagesCards?.map((content, index) => {
						return (
							<div key={index} className=" mb-4   ">
								<MassSaveStagesCard
									key={index}
									title={content?.titleText || ''}
									content={content?.description || ''}
									thumbnailSrc={content?.image?.asset?.url || ''}
									thumbnailAltText={''}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</SectionContentWrapper>
	);
};

export default MassSaveStagesContent;
