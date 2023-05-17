import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import CTAWithImage from 'components/organisms/cta-with-image.organism';
import CTATextContent from 'components/organisms/cta-text-content.organism';
import BookNowButton from 'components/atoms/book-now-button.atom';
import { FinancingContentProps } from 'pages/financing';
const FinancingCTAContent = () => {
	const { pageContent } =
		useContext<GlobalContextProps<FinancingContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { ctaButton, ctaImage, ctaTitle, ctaDescription } = pageData;

	return (
		<CTAWithImage
			heroImage={ctaImage}
			heroImageAltText={'Hero image'}
			textContentBGImage={'/images/home/footer-cta/home-cta-spiral.svg'}
			textContentBGImageForSmallScreen={
				'/images/home/footer-cta/home-cta-spiral-mobile.svg'
			}
			heroImagePosition="right"
			bgColor="var(--secondary-color-shade-2-rgb)"
		>
			<div className="text-primary-shade-1">
				<CTATextContent
					title={ctaTitle || ''}
					description={ctaDescription}
					isHero={false}
				>
					<BookNowButton fontColor="text-white" bgColor="bg-primary-shade-1">
						{ctaButton?.text}
					</BookNowButton>
				</CTATextContent>
			</div>
		</CTAWithImage>
	);
};

export default FinancingCTAContent;
