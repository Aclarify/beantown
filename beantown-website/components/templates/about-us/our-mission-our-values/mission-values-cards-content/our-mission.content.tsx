import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import RichText from 'components/molecules/rich-text.molecule';
import ContentWrapper from 'components/organisms/content-wrapper.organism';
import MaskedImageWithBackgroundVector from 'components/organisms/masked-image-with-blob.organism';
import useWindowDimensions from '@lib/hooks/use-window-dimensions.hook';

import { AboutUsContentProps } from 'pages/about-us';
const OurMissionContent = () => {
	const { pageContent } =
		useContext<GlobalContextProps<AboutUsContentProps>>(GlobalContext);
	const { width } = useWindowDimensions();

	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { missionTitle, missionDescription, missionImage } = pageData;

	return (
		<div
			id="section-wrapper"
			className="z-10 mb-[6em]  flex flex-col  overflow-hidden "
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
						imageURL={missionImage?.asset?.url || ''}
						imgAltText={missionImage?.asset?.altText || ''}
						width={width > 768 ? 1000 : 500}
						height={width > 768 ? 1000 : 500}
						maskImg={
							width > 768
								? './images/about-us/mission/about-us-mission-mask-blob.svg'
								: './images/about-us/mission/about-us-mission-mask-blob.svg'
						}
						bgImg={
							width > 768
								? './images/about-us/mission/about-us-mission-bg-blob.svg'
								: './images/about-us/mission/about-us-mission-mask-blob.svg'
						}
					/>
				</div>
				<div
					id="content-wrapper"
					className="z-10 flex basis-1/2 flex-col items-start text-left lg:pt-20 "
				>
					<ContentWrapper>
						<ContentWrapper.Title>
							<h1 className="title-5 lg:title-2 text-primary-black ">
								{missionTitle}
							</h1>
						</ContentWrapper.Title>
						<ContentWrapper.Description className="para-4 lg:para-2 text-left !font-thin">
							<RichText value={missionDescription?.contentRaw} />
						</ContentWrapper.Description>
					</ContentWrapper>
				</div>
			</div>
		</div>
	);
};

export default OurMissionContent;
