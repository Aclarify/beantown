import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import RichText from 'components/molecules/rich-text.molecule';
import ContentWrapper from 'components/organisms/content-wrapper.organism';
import MaskedImageWithBackgroundVector from 'components/organisms/masked-image-with-blob.organism';
import useWindowDimensions from '@lib/hooks/use-window-dimensions.hook';

import { FinancingContentProps } from 'pages/financing';
import Animate from 'components/molecules/animate.molecule';
const AboutFinancingContent = () => {
	const { pageContent } =
		useContext<GlobalContextProps<FinancingContentProps>>(GlobalContext);
	const { width } = useWindowDimensions();

	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { aboutSectionTitle, aboutSectionDescription, aboutSectionImage } =
		pageData;

	return (
		<div
			id="section-wrapper"
			className="z-10   flex flex-col  overflow-hidden "
		>
			<div
				id="content-image-wrapper"
				className="flex w-full flex-col items-center  lg:flex  lg:flex-row "
			>
				<div
					id="image-wrapper"
					className="mb-8 md:mt-12  md:basis-1/2 md:px-20 lg:px-10  "
				>
					<MaskedImageWithBackgroundVector
						imageURL={aboutSectionImage?.asset?.url || ''}
						imgAltText={aboutSectionImage?.asset?.altText || ''}
						maskImg="./images/about-us/mission/about-us-mission-mask-blob.svg"
						bgImg="./images/about-us/mission/about-us-mission-bg-blob.svg"
						width={width > 768 ? 1000 : 500}
						height={width > 768 ? 1000 : 500}
					/>
				</div>
				<div
					id="content-wrapper"
					className=" 3xl:px-[10em]  z-10 flex basis-1/2  flex-col px-0 pb-[6em] text-left lg:pl-[4em] lg:pr-48"
				>
					<ContentWrapper>
						<ContentWrapper.Title>
							<Animate bottom>
								<h2 className="text-primary-black ">{aboutSectionTitle}</h2>
							</Animate>
						</ContentWrapper.Title>
						<ContentWrapper.Description className="text-left ">
							<Animate>
								<RichText value={aboutSectionDescription?.contentRaw} />
							</Animate>
						</ContentWrapper.Description>
					</ContentWrapper>
				</div>
			</div>
		</div>
	);
};

export default AboutFinancingContent;
