import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { FinancingContentProps } from 'pages/financing';
import ContentWrapper from 'components/organisms/content-wrapper.organism';
import Image from 'next/image';
import clsx from 'clsx';

const FinancingHeroContent = () => {
	const { pageContent } =
		useContext<GlobalContextProps<FinancingContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { heroImage, heroTitle, heroDescription } = pageData;
	return (
		<section id="financing_page_hero" className="relative">
			<div
				id="content-wrapper"
				className="z-1 2xl:padding-for-section flex w-full items-center justify-center px-6  text-white  "
			>
				<ContentWrapper className="relative z-[2] pt-28 pb-20 text-center md:py-48 lg:w-1/2  xl:py-80">
					<ContentWrapper.Title className=" mb-2  lg:mb-4">
						<h1>{heroTitle}</h1>
					</ContentWrapper.Title>
					<ContentWrapper.Description>
						<p className={clsx('text-3xl')}>{heroDescription}</p>
					</ContentWrapper.Description>
				</ContentWrapper>
			</div>
			<div
				id="image-wrapper-desktop"
				className="after:z-1 after:from-aboutUs-hero-gradient-start after:to-aboutUs-hero-gradient-end xs:block absolute top-0 z-0  h-full w-full after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-gradient-to-b "
			>
				<div className="relative h-full w-full">
					<Image
						alt={heroImage?.asset?.altText || ''}
						priority={true}
						src={heroImage?.asset?.url || ''}
						fill
						style={{
							zIndex: '0',
							width: '100%',
							height: '100%',
							maxWidth: '100%',
							objectFit: 'cover',
						}}
					/>
				</div>
			</div>
		</section>
	);
};

export default FinancingHeroContent;
