import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import RichText from 'components/molecules/rich-text.molecule';
import { HomePageContentProps } from 'pages';
import WhyUsCard from './why-us-card';
import ContentWrapper from 'components/organisms/content-wrapper.organism';
import MaskedImageWithBackgroundVector from 'components/organisms/masked-image-with-blob.organism';
import useWindowDimensions from '@lib/hooks/use-window-dimensions.hook';
import WaveWrapper from 'components/molecules/wave-wrapper.molecule';
import CtaWrapper from 'components/molecules/cta-wrapper.molecule';
import topWave from 'public/images/home/why-us/top-wave.svg';
import bottomWave from 'public/images/home/why-us/bottom-wave.svg';
import Link from 'next/link';
import Animate from 'components/molecules/animate.molecule';
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
			className=" relative z-30  py-[4rem] pb-[25em] md:mt-[6em] md:pt-[10vw] xl:mt-[1em]"
		>
			<WaveWrapper waveURL={topWave} />
			<div
				id="section-wrapper"
				className="bg-primary-white-shade-1 2xl:padding-for-section z-1 flex  flex-col overflow-hidden px-5 pb-14 md:pb-0"
			>
				<div
					id="content-image-wrapper"
					className="mb-8 flex w-full flex-col-reverse items-center pt-[3em]  md:pt-0 lg:mb-4 lg:flex lg:flex-row lg:px-10"
				>
					<div
						id="content-wrapper"
						className="z-10 flex basis-1/2 flex-col items-start text-justify lg:pt-20"
					>
						<ContentWrapper>
							<ContentWrapper.Title>
								<Animate bottom>
									<h2 className=" text-primary-black ">{whyUsTitle}</h2>
								</Animate>
							</ContentWrapper.Title>
							<ContentWrapper.Description className="rich-text text-left lg:pr-4">
								<Animate bottom>
									<RichText value={whyUsDescription?.contentRaw} />
								</Animate>
							</ContentWrapper.Description>
							<ContentWrapper.CTA className="mt-[16px] lg:mt-[32px]">
								<CtaWrapper.CTA className="bg-primary-shade-1  button text-white ">
									<Link href={whyUsButton?.href || '#'}>
										{whyUsButton?.text}
									</Link>
								</CtaWrapper.CTA>
							</ContentWrapper.CTA>
						</ContentWrapper>
					</div>
					<div
						id="image-wrapper"
						className="mb-8  md:mt-8 md:ml-4 md:basis-1/2"
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
					className=" mt-0 grid grid-cols-1 gap-2 md:mt-20 md:mb-20 md:grid-cols-2"
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
			<WaveWrapper waveURL={bottomWave} />
		</section>
	);
}
