import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HomePageContentProps } from 'pages';
import CTAWithImage from 'components/organisms/cta-with-image.organism';
import CTATextContent, {
	CTAButton,
} from 'components/organisms/cta-text-content.organism';
import Animate from 'components/molecules/animate.molecule';

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
				className="z-15 3xl:-top-[10em] 3xl:-mb-[4em] relative -top-[1em] mb-[6em] sm:-top-[2em] sm:mb-[5em] md:-top-[3em]
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
					<div className="text-primary-shade-1 ">
						<Animate bottom>
							<CTATextContent
								title={ctaTitle || ''}
								description={ctaDescription}
								isHero={false}
							>
								<CTAButton
									text={finalCtaButton?.text || ''}
									textColor="text-white"
									bgColor="bg-primary-shade-1"
									href={finalCtaButton?.href || ''}
								/>
							</CTATextContent>
						</Animate>
					</div>
				</CTAWithImage>
			</section>
		</>
	);
}
