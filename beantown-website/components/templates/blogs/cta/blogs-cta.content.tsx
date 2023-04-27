import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { BlogsContentProps } from 'pages/blogs';
import CTAWithImage from 'components/organisms/cta-with-image.organism';
import CTATextContent from 'components/organisms/cta-text-content.organism';
import BookNowButton from 'components/atoms/book-now-button.atom';

const BlogsPageCTAContent = () => {
	const { pageContent } =
		useContext<GlobalContextProps<BlogsContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { ctaImage, ctaTitle, ctaDescription, finalCtaButton } = pageData;
	return (
		<>
			<CTAWithImage
				heroImage={ctaImage}
				heroImageAltText={'Hero image'}
				textContentBGImage={'/images/blogs/footer-cta/blogs-cta-spiral.svg'}
				textContentBGImageForSmallScreen={
					'/images/blogs/footer-cta/blogs-cta-spiral-mobile.svg'
				}
				heroImagePosition="right"
				bgColor="var(--secondary-color-shade-2-rgb)"
			>
				<div className="text-primary-shade-1">
					<CTATextContent title={ctaTitle || ''} description={ctaDescription}>
						<BookNowButton fontColor="text-white" bgColor="bg-primary-shade-1">
							{finalCtaButton?.text}
						</BookNowButton>
					</CTATextContent>
				</div>
			</CTAWithImage>
		</>
	);
};

export default BlogsPageCTAContent;
