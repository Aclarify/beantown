import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import RichText from 'components/molecules/rich-text.molecule';
import { HeatingCoolingContentProps } from 'pages/heating-and-cooling';
import ContentWrapper from 'components/organisms/content-wrapper.organism';
import MaskedImageWithBackgroundVector from 'components/organisms/masked-image-with-blob.organism';
import useWindowDimensions from '@lib/hooks/use-window-dimensions.hook';
import CtaWrapper from 'components/molecules/cta-wrapper.molecule';
import { PlumbingContentProps } from 'pages/plumbing';
const AboutPlumbingServiceContent = () => {
	const { pageContent } =
		useContext<GlobalContextProps<PlumbingContentProps>>(GlobalContext);
	const { width } = useWindowDimensions();

	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const {
		aboutTheServiceTitle,
		aboutTheServiceDescription,
		aboutTheServiceImage,
		contactUsButton,
	} = pageData;

	return (
		<div
			id="section-wrapper"
			className="z-10 flex  flex-col overflow-hidden  px-5 pb-[5em]"
		>
			<div
				id="content-image-wrapper"
				className="flex w-full flex-col-reverse items-center  lg:flex  lg:flex-row "
			>
				<div
					id="content-wrapper"
					className="z-10 flex basis-1/2 flex-col items-start text-left lg:pt-20 "
				>
					<ContentWrapper>
						<ContentWrapper.Title>
							<h1 className="title-5 lg:title-2 text-primary-black ">
								{aboutTheServiceTitle}
							</h1>
						</ContentWrapper.Title>
						<ContentWrapper.Description className="para-4 lg:para-2 text-left">
							<RichText value={aboutTheServiceDescription?.contentRaw} />
						</ContentWrapper.Description>
						<ContentWrapper.CTA className="mt-[16px] lg:mt-[32px]">
							<CtaWrapper.CTA className="bg-service-red para-3 lg:para-2 h-[40px] w-[110px] rounded-lg py-1 px-4 tracking-wide text-white md:py-2  md:px-8  lg:h-[64px] lg:w-[210px] lg:tracking-wider ">
								<p>{contactUsButton?.text}</p>
							</CtaWrapper.CTA>
						</ContentWrapper.CTA>
					</ContentWrapper>
				</div>
				<div
					id="image-wrapper"
					className="mb-8 md:mt-12  md:basis-1/2 md:px-20 lg:px-10  "
				>
					<MaskedImageWithBackgroundVector
						imageURL={aboutTheServiceImage?.asset?.url || ''}
						imgAltText={aboutTheServiceImage?.asset?.altText || ''}
						width={width > 768 ? 1000 : 500}
						height={width > 768 ? 1000 : 500}
						maskImg={
							width > 768
								? './images/plumbing/about/plumbing-services-blob-mask.svg'
								: './images/plumbing/about/plumbing-services-blob-mask-mobile.svg'
						}
						bgImg={
							width > 768
								? './images/plumbing/about/plumbing-services-bg-blob.svg'
								: './images/plumbing/about/plumbing-services-bg-blob-mobile.svg'
						}
					/>
				</div>
			</div>
		</div>
	);
};

export default AboutPlumbingServiceContent;
