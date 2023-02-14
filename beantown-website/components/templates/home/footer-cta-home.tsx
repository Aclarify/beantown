import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HomePageContentProps } from 'pages';
import RichText from 'components/molecules/rich-text.molecule';
import Button from 'components/atoms/button.atom';
import CTAWithImage from 'components/organisms/cta-with-image.organism';
import ContentWrapper from 'components/organisms/content-wrapper.organism';

export default function FooterCta() {
	const { pageContent } =
		useContext<GlobalContextProps<HomePageContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const homeData = pageContent.page[0];
	const { ctaTitle, ctaDescription, finalCtaButton, ctaImage } = homeData;
	const imagePath = ctaImage?.asset?.url;
	return (
		<>
			<section id="footerCta" className="z-15 relative -top-[3em]">
				<CTAWithImage
					heroImageURL={imagePath || ''}
					heroImageAltText={ctaImage?.asset?.altText || ''}
					textContentBGImage={'/images/home/footer-cta/cta-bg-spiral.svg'}
					textContentBGImageForSmallScreen={
						'/images/home/footer-cta/cta-bg-spiral.svg'
					}
					heroImagePosition="right"
					gradientFromColor="#7AADD3"
					gradientToColor="#CADEED"
					gradientFromColorForMobile="#F4F8FB"
					gradientToColorForMobile="#7AADD3"
				>
					<ContentWrapper className="md:padding-for-section px-10 text-center md:text-left">
						<ContentWrapper.Title>
							<h1 className="title-4 lg:title-1">{ctaTitle}</h1>
						</ContentWrapper.Title>
						<ContentWrapper.Description>
							<RichText value={ctaDescription?.contentRaw} />
						</ContentWrapper.Description>
						<ContentWrapper.CTA className="mt-[32px]">
							<Button fontColor="text-white" bgColor=" bg-primary-shade-1">
								{finalCtaButton?.text}
							</Button>
						</ContentWrapper.CTA>
					</ContentWrapper>
				</CTAWithImage>
			</section>
		</>
	);
}
