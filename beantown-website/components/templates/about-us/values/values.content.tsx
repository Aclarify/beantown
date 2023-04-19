import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import RichText from 'components/molecules/rich-text.molecule';
import ContentWrapper from 'components/organisms/content-wrapper.organism';
import useWindowDimensions from '@lib/hooks/use-window-dimensions.hook';

import { AboutUsContentProps } from 'pages/about-us';
import Animate from 'components/molecules/animate.molecule';
import MaskedImageWithBackground from 'components/organisms/masked-image-with-background.organism';
const ValuesContent = () => {
	const { pageContent } =
		useContext<GlobalContextProps<AboutUsContentProps>>(GlobalContext);
	const { width } = useWindowDimensions();

	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { valuesTitle, valuesDescription, valuesImage } = pageData;

	return (
		<div
			id="section-wrapper"
			className="z-10 mb-[3em]  flex flex-col  overflow-hidden "
		>
			<div
				id="content-image-wrapper"
				className="flex w-full flex-col-reverse items-center  lg:flex  lg:flex-row "
			>
				<div
					id="content-wrapper"
					className="3xl:px-[10em] z-10 flex basis-1/2 flex-col items-start  px-0 text-left lg:pl-[7rem] lg:pr-[0em] lg:pt-20 xl:pr-[0em] xl:pl-[8rem] "
				>
					<ContentWrapper>
						<ContentWrapper.Title>
							<Animate bottom>
								<h2 className=" text-primary-black ">{valuesTitle}</h2>
							</Animate>
						</ContentWrapper.Title>
						<ContentWrapper.Description className=" text-left">
							<Animate>
								<RichText value={valuesDescription?.contentRaw} />
							</Animate>
						</ContentWrapper.Description>
					</ContentWrapper>
				</div>
				<div
					id="image-wrapper"
					className="mb-8 md:mt-12  md:basis-1/2 md:px-20 lg:px-10  "
				>
					<MaskedImageWithBackground
						image={valuesImage || null}
						imgAltText={valuesImage?.asset?.altText || ''}
						maskImg="./images/about-us/values/about-us-values-mask-blob.svg"
						bgImg="./images/about-us/values/about-us-values-bg-blob.svg"
					/>
				</div>
			</div>
		</div>
	);
};

export default ValuesContent;
