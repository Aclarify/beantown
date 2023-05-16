import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import RichText from 'components/molecules/rich-text.molecule';
import ContentWrapper from 'components/organisms/content-wrapper.organism';
import useWindowDimensions from '@lib/hooks/use-window-dimensions.hook';

import { MassSaveContentProps } from 'pages/mass-save';
import Animate from 'components/molecules/animate.molecule';
import MaskedImageWithBackground from 'components/organisms/masked-image-with-background.organism';
const MassSaveAdditionalFeaturesContent = () => {
	const { pageContent } =
		useContext<GlobalContextProps<MassSaveContentProps>>(GlobalContext);
	const { width } = useWindowDimensions();

	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const {MassSaveSection3Title,MassSaveSection3Image,MassSaveSection3Description } =
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
					<MaskedImageWithBackground
						image={MassSaveSection3Image || null}
						imgAltText={MassSaveSection3Image?.asset?.altText || ''}
						maskImg="./images/about-us/mission/about-us-mission-mask-blob.svg"
						bgImg="./images/about-us/mission/about-us-mission-bg-blob.svg"
					/>
				</div>
				<div
					id="content-wrapper"
					className=" 3xl:px-[10em]  z-10 flex basis-1/2  flex-col px-0 pb-[6em] text-left lg:pl-[4em] lg:pr-[3rem]"
				>
					<ContentWrapper>
						<ContentWrapper.Title>
							<Animate bottom>
								<h2 className="text-primary-black ">{MassSaveSection3Title}</h2>
							</Animate>
						</ContentWrapper.Title>
						<ContentWrapper.Description className="text-left ">
							<Animate>
								<RichText value={MassSaveSection3Description?.contentRaw} />
							</Animate>
						</ContentWrapper.Description>
					</ContentWrapper>
				</div>
			</div>
		</div>
	);
};

export default MassSaveAdditionalFeaturesContent;
