import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import RichText from 'components/molecules/rich-text.molecule';
import { HomePageContentProps } from 'pages';
import WhyUsCard from './why-us-card';
import Button from 'components/atoms/button.atom';
import ContentWrapper from 'components/organisms/content-wrapper.organism';
import MaskedImageWithBackgroundVector from 'components/organisms/masked-image-with-blob.organism';
import useWindowDimensions from '@lib/hooks/use-window-dimensions.hook';
export default function WhyUs() {
	const { pageContent } =
		useContext<GlobalContextProps<HomePageContentProps>>(GlobalContext);
	const { width } = useWindowDimensions();

	if (!pageContent) {
		return null;
	}
	const homeData = pageContent.page[0];
	const { whyUsTitle, whyUsDescription, whyUsButton, whyUsCards, whyUsImage } =
		homeData;

	return (
		<section
			id="whyUs"
			className="md:bg-fit-to-parent relative z-30 bg-[url('/images/home/why-us/why-us-bg-mobile.svg')]  bg-no-repeat py-[4rem] pb-[115vw] md:bg-[url('/images/home/why-us/why-us-bg-desktop.svg')] md:pt-[10vw] md:pb-[50%]"
		>
			<div
				id="section-wrapper"
				className="bg-primary-white-shade-1 z-1  flex flex-col overflow-hidden"
			>
				<div
					id="content-image-wrapper"
					className="flex w-full flex-col-reverse items-center px-6 md:flex  md:flex-row lg:px-10"
				>
					<div
						id="content-wrapper"
						className="z-10 flex basis-1/2 flex-col items-start text-justify lg:pt-20 "
					>
						<ContentWrapper>
							<ContentWrapper.Title>
								<h1 className="title-5 lg:title-2 text-primary-black ">
									{whyUsTitle}
								</h1>
							</ContentWrapper.Title>
							<ContentWrapper.Description>
								<RichText value={whyUsDescription?.contentRaw} />
							</ContentWrapper.Description>
							<ContentWrapper.CTA className="mt-[16px] lg:mt-[32px]">
								<Button fontColor="text-white" bgColor=" bg-primary-shade-1">
									{whyUsButton?.text}
								</Button>
							</ContentWrapper.CTA>
						</ContentWrapper>
					</div>
					<div
						id="image-wrapper"
						className="mb-8 md:mt-12  md:basis-1/2 md:px-20"
					>
						<MaskedImageWithBackgroundVector
							imageURL={whyUsImage?.asset?.url || ''}
							imgAltText={whyUsImage?.asset?.altText || ''}
							width={width > 768 ? 1000 : 500}
							height={width > 768 ? 1000 : 500}
							maskImg="./images/home/why-us/why-us-blob.svg"
							bgImg="./images/home/why-us/whyus-bg-blob.svg"
						/>
					</div>
				</div>

				<div
					id="cards-wrapper"
					className=" mt-0 grid grid-cols-1 gap-2 md:mt-20 md:grid-cols-2 "
				>
					{whyUsCards?.map((ourValues, index) => {
						return (
							ourValues?.image && (
								<WhyUsCard
									key={index}
									title={ourValues?.titleText || ''}
									description={ourValues?.description || ''}
									thumbnailSrc={ourValues.image?.asset?.url || ''}
									thumbnailAltText={ourValues.image?.asset?.altText || ''}
								/>
							)
						);
					})}
				</div>
			</div>
		</section>
	);
}
