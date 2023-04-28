import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import ContentWrapper from 'components/organisms/content-wrapper.organism';
import { BlogsContentProps } from 'pages/blog';
import Image from 'next/image';
import Animate from 'components/molecules/animate.molecule';
import RichText from 'components/molecules/rich-text.molecule';
import MaskedImageWithBackgroundVector from 'components/organisms/masked-image-with-blob.organism';
import { SCREEN_BREAKPOINTS } from '@typing/common/interfaces/devices.interface';
import useWindowDimensions from 'lib/hooks/use-window-dimensions.hook';

const BlogsContent = () => {
	const { pageContent } =
		useContext<GlobalContextProps<BlogsContentProps>>(GlobalContext);
	const { width } = useWindowDimensions();

	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { heroTitle, heroDescription, heroImage } = pageData;

	return (
		<section id="blogs_hero" className="relative">
			<Image
				src={'/images/blogs/hero/blob-shape-1.svg'}
				height={100}
				width={150}
				alt="Left Blob "
				className="absolute  bottom-0 left-0 z-[-1] hidden -translate-x-[10%] transform md:block md:translate-y-[10%] lg:translate-y-[15%]"
			/>

			{/* className="z-1 2xl:padding-for-section text-primary-shade-1 flex w-full items-center justify-center  px-14" */}
			<div
				id="content-image-wrapper"
				className="mb-8 flex w-full flex-col-reverse items-center pt-[3em]  md:pt-0 lg:mb-4 lg:flex lg:flex-row"
			>
				<div
					id="content-wrapper"
					className="z-10 flex basis-1/2 flex-col items-start text-justify lg:pt-20"
				>
					<div className="flex flex-col items-center  pt-[4em] text-center lg:pt-0 lg:text-left">
						<ContentWrapper>
							<ContentWrapper.Title>
								<Animate bottom>
									<h2 className=" text-primary-black lg:pr-20">{heroTitle}</h2>
								</Animate>
							</ContentWrapper.Title>
							<ContentWrapper.Description className="rich-text lg:pr-4 ">
								<Animate>
									<RichText value={heroDescription?.contentRaw} />
								</Animate>
							</ContentWrapper.Description>
						</ContentWrapper>
					</div>
				</div>
				<div id="image-wrapper" className="mb-8 md:mt-8 md:ml-4 md:basis-1/2">
					<MaskedImageWithBackgroundVector
						imageURL={heroImage?.asset?.url || ''}
						imgAltText={heroImage?.asset?.altText || ''}
						width={width > SCREEN_BREAKPOINTS.SM ? 1000 : 500}
						height={width > SCREEN_BREAKPOINTS.SM ? 1000 : 500}
						maskImg="./images/blogs/hero/blob-shape-1.svg"
						bgImg="./images/blogs/hero/blogs-bg-blob.svg"
					/>
				</div>
			</div>
		</section>
	);
};

export default BlogsContent;
