import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HomePageContentProps } from 'pages';
import RichText from 'components/molecules/rich-text.molecule';
import CTAWithImage from 'components/organisms/cta-with-image.organism';
import ContentWrapper from 'components/organisms/content-wrapper.organism';
import CtaWrapper from 'components/molecules/cta-wrapper.molecule';

export default function FooterCta() {
	const { pageContent } =
		useContext<GlobalContextProps<HomePageContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const homeData = pageContent.page[0];
	const { ctaTitle, ctaDescription, finalCtaButton, ctaImage } = homeData;
	return (
		<>
			<section
				id="home-cta"
				className="z-15 3xl:-top-[10em] 3xl:-mb-[4em] relative -top-[2em] mb-[6em] sm:-top-[2em] sm:mb-[5em] md:-top-[3em]
				md:mb-[5em] lg:-top-[4em] lg:mb-[3em] xl:-top-[5em] 2xl:-top-[7em] 2xl:mb-[0em]"
			>
				<CTAWithImage
					heroImageURL={ctaImage?.asset?.url || ''}
					heroImageAltText={'Hero image'}
					textContentBGImage={'/images/home/footer-cta/home-cta-spiral.svg'}
					textContentBGImageForSmallScreen={
						'/images/home/footer-cta/home-cta-spiral-mobile.svg'
					}
					heroImagePosition="right"
					bgColor="var(--secondary-color-shade-2-rgb)"
				>
					<ContentWrapper className="2xl:padding-for-section px-10 pt-[2em] pb-[4em] text-center md:px-[10em] md:py-[12em] lg:px-10 lg:py-[10em] lg:text-left xl:py-[12em] 2xl:py-[18em]">
						<ContentWrapper.Title className="mb-[8px]   lg:mb-[16px]">
							<h1 className="title-5 lg:title-2 text-primary-shade-1">
								{ctaTitle}
							</h1>
						</ContentWrapper.Title>
						<ContentWrapper.Description>
							<RichText value={ctaDescription?.contentRaw} />
						</ContentWrapper.Description>
						<ContentWrapper.CTA className="mt-[32px]">
							<CtaWrapper.CTA className="para-3 lg:para-2 bg-primary-shade-1 h-[52px] w-[184px] rounded-lg py-1 px-4 tracking-wide text-white  md:py-2  md:px-8  lg:h-[64px] lg:w-[198px] lg:tracking-wider ">
								<p>{finalCtaButton?.text}</p>
							</CtaWrapper.CTA>
						</ContentWrapper.CTA>
					</ContentWrapper>
				</CTAWithImage>
			</section>
		</>
	);
}
