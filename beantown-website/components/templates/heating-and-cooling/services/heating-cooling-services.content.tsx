import RichText from 'components/molecules/rich-text.molecule';
import ContentWrapper from 'components/organisms/content-wrapper.organism';
import React, { useContext } from 'react';
import HeatingCoolingServiceCard from './heating-cooling-service-cards';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HeatingCoolingContentProps } from 'pages/heating-and-cooling';
import SectionContentWrapper from 'components/molecules/section-content-wrapper.molecule';

const HeatingCoolingServicesContent = () => {
	const { pageContent } =
		useContext<GlobalContextProps<HeatingCoolingContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];

	const { servicesTitle, servicesDescription, servicesGroup } = pageData;
	return (
		<SectionContentWrapper>
			<div className="relative px-5 lg:pt-14">
				<div className="flex flex-col items-center pb-8 text-center">
					<ContentWrapper>
						<ContentWrapper.Title>
							<h1 className="title-5 lg:title-2 text-primary-black mb-4">
								{servicesTitle}
							</h1>
						</ContentWrapper.Title>
						<ContentWrapper.Description className="lg:flex lg:justify-center">
							<div className="text-wrapper para-4 lg:para-2 text-primary-shade-1 !font-thin lg:w-3/4 ">
								<RichText value={servicesDescription?.contentRaw} />
							</div>
						</ContentWrapper.Description>
					</ContentWrapper>
				</div>
				<div className="flex flex-wrap bg-[FFFFFF]">
					{servicesGroup?.map((content, index) => {
						return (
							<div
								key={index}
								className="card-wrapper mb-4 px-3 md:basis-1/2 xl:basis-1/4 "
							>
								<HeatingCoolingServiceCard
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

export default HeatingCoolingServicesContent;
