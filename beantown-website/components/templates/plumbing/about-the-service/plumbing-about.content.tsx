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
import Animate from 'components/molecules/animate.molecule';
import clsx from 'clsx';
import { buttonHoverStyle } from '@lib/styles/button.style';

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
			className="z-10 mb-[6em]  flex flex-col  overflow-hidden "
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
							<Animate bottom>
								<h2 className=" text-primary-black ">{aboutTheServiceTitle}</h2>
							</Animate>
						</ContentWrapper.Title>
						<ContentWrapper.Description className=" text-left">
							<Animate>
								<RichText value={aboutTheServiceDescription?.contentRaw} />
							</Animate>
						</ContentWrapper.Description>
						<ContentWrapper.CTA className="mt-[16px] lg:mt-[32px]">
							<CtaWrapper.CTA
								className={clsx(
									'bg-service-green button  text-white',
									buttonHoverStyle
								)}
							>
								{contactUsButton?.text}
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
						maskImg={'./images/plumbing/about/plumbing-services-blob-mask.svg'}
						bgImg={'./images/plumbing/about/plumbing-services-bg-blob.svg'}
					/>
				</div>
			</div>
		</div>
	);
};

export default AboutPlumbingServiceContent;
