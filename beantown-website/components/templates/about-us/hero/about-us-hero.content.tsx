import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { AboutUsContentProps } from 'pages/about-us';
import ContentWrapper from 'components/organisms/content-wrapper.organism';
import Image from 'next/image';

const AboutUsHeroContent = () => {
	const { pageContent } =
		useContext<GlobalContextProps<AboutUsContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { heroImage, heroTitle, heroDescription, heroImageMobile } = pageData;
	return (
		<section id="home_page_hero" className="relative">
			<div
				id="content-wrapper"
				className="z-1 2xl:padding-for-section flex w-full items-center justify-center px-6  text-white  "
			>
				<ContentWrapper className="relative z-[2] pt-28 pb-20 text-center md:py-48 lg:w-1/2  xl:py-80">
					<ContentWrapper.Title className=" mb-2  lg:mb-4">
						<h1>{heroTitle}</h1>
					</ContentWrapper.Title>
					<ContentWrapper.Description>
						<p>{heroDescription}</p>
					</ContentWrapper.Description>
				</ContentWrapper>
			</div>
			<div
				id="image-wrapper-desktop"
				className="after:z-1 after:from-aboutUs-hero-gradient-start after:to-aboutUs-hero-gradient-end absolute top-0 z-0 hidden h-full w-full after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-gradient-to-b sm:block"
			>
				<Image
					alt={heroImage?.asset?.altText || ''}
					width={4000}
					height={1000}
					priority={true}
					src={heroImage?.asset?.url || ''}
					style={{
						zIndex: '0',
						width: '100%',
						height: '100%',
						maxWidth: '100%',
					}}
				/>
			</div>
			<div
				id="image-wrapper-mobile"
				className="after:z-1 after:from-home-hero-gradient-start after:to-home-hero-gradient-end absolute top-0 z-0  h-full
				after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-gradient-to-b sm:hidden"
			>
				<Image
					alt={heroImageMobile?.asset?.altText || ''}
					width={1000}
					height={1000}
					priority={true}
					src={heroImageMobile?.asset?.url || ''}
					style={{
						zIndex: '0',
						height: '100%',
						maxWidth: '100%',
					}}
				/>
			</div>
		</section>
	);
};

export default AboutUsHeroContent;
