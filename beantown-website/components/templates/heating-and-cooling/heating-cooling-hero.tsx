import Image from 'next/image';
import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HeatingCoolingContentProps } from 'pages/heating-and-cooling';
import RichText from 'components/molecules/rich-text.molecule';
import ContentWrapper from 'components/organisms/content-wrapper.organism';
import Button from 'components/atoms/button.atom';

export default function HeatingCoolingPageHero() {
	const { pageContent } =
		useContext<GlobalContextProps<HeatingCoolingContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	// console.log(pageContent);
	const { heroImage, heroTitle, heroDescription, heroButton } = pageData;
	return (
		<section id="cooling-and-heating-hero" className="">
			<div id="maskedBgContainer" className=" flex ">
				<div
					id="image-wrapper"
					className=" z-2 top-0 left-0 basis-3/4 bg-[#BC3B39]"
				>
					<Image
						alt={'hero wave mask'}
						width={4000}
						height={1000}
						priority={true}
						src="/images/heating-cooling/hero/hc-hero-vector.svg"
					/>
				</div>
				<div
					id="content-wrapper"
					className="lg:padding-for-section absolute inset-y-0 flex w-3/4 items-center px-4 text-white md:w-[40%]"
				>
					<ContentWrapper>
						<ContentWrapper.Title className="mb-[8px] lg:mb-[16px]">
							<h1 className="title-4 lg:title-1">{heroTitle}</h1>
						</ContentWrapper.Title>
						<ContentWrapper.Description>
							<RichText value={heroDescription?.contentRaw} />
						</ContentWrapper.Description>
						<ContentWrapper.CTA className="mt-[32px]">
							<Button fontColor="text-white" bgColor="bg-primary-shade-1">
								{heroButton?.text}
							</Button>
						</ContentWrapper.CTA>
					</ContentWrapper>
				</div>
				<div
					id="heroGradientContainer"
					className=" z-3 absolute top-0 left-[85em]"
				>
					<Image
						alt={'hero wave mask'}
						width={1080}
						height={600}
						priority={true}
						src="/images/heating-cooling/hero/hc-hero-bg-gradient.svg"
					/>
				</div>
				<div
					id="heroImageContainer"
					className="z-1 absolute top-0 right-0  basis-1/3"
				>
					<Image
						alt={'hero wave mask'}
						width={1080}
						height={600}
						priority={true}
						src="/images/heating-cooling/hero/hc-hero-image.svg"
					/>
				</div>
			</div>
		</section>
	);
}
