import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import ContentWrapper from '../../../organisms/content-wrapper.organism';
import Animate from 'components/molecules/animate.molecule';
import { CommunityContentProps } from 'pages/community';
import Link from 'next/link';
import MaskedImageWithBackground from 'components/organisms/masked-image-with-background.organism';

const CommunityHeroContent = () => {
	const { pageContent } =
		useContext<GlobalContextProps<CommunityContentProps>>(GlobalContext);

	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { heroTitle, heroDescription, heroImage } = pageData;

	return (
		<div
			id="section-wrapper"
			className=" mb-[6em]  flex flex-col  overflow-hidden "
		>
			<div
				id="content-image-wrapper"
				className="mt-32 flex w-full flex-col-reverse  items-center  lg:flex lg:flex-row"
			>
				<div
					id="content-wrapper"
					className=" flex w-full basis-1/2 flex-col items-center  text-center md:items-start  md:text-left lg:pt-20 "
				>
					<ContentWrapper className="">
						<ContentWrapper.Title>
							<Animate bottom>
								<h2 className=" text-primary-black ">{heroTitle}</h2>
							</Animate>
						</ContentWrapper.Title>
						<ContentWrapper.Description className="rich-text  text-center !font-thin md:text-left lg:pr-4">
							<Animate>
								<p>{heroDescription}</p>
							</Animate>
						</ContentWrapper.Description>
					</ContentWrapper>
				</div>
				<div
					id="image-wrapper"
					className="mb-8 md:mt-12  md:basis-1/2 md:px-20 lg:px-10  "
				>
					<MaskedImageWithBackground
						image={heroImage || null}
						imgAltText={heroImage?.asset?.altText || ''}
						maskImg="./images/community/hero/community-hero-mask-blob.svg"
						bgImg="./images/comunity/hero/community-hero-bg-blob.svg"
					/>
				</div>
			</div>
		</div>
	);
};

export default CommunityHeroContent;
