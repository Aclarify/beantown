import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HomePageContentProps } from 'pages';
import RichText from 'components/molecules/rich-text.molecule';
import Button from 'components/atoms/button.atom';
import CTAWithImage from 'components/organisms/cta-with-image.organism';
import ContentWrapper from 'components/organisms/content-wrapper.organism';

export default function FooterCta() {
	const { pageContent } =
		useContext<GlobalContextProps<HomePageContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const homeData = pageContent.home[0];
	const { ctaTitle, ctaDescription, finalCtaButton, ctaImage } = homeData;
	const imagePath = ctaImage?.asset?.url;
	return (
		<>
			<section
				id="footerCtaDesktop"
				className="z-15 left-padding-for-section relative -top-[3em]"
			>
				<CTAWithImage
					heroImageURL={imagePath || ''}
					heroImageAltText={ctaImage?.asset?.altText || ''}
					textContentBGImage={'/images/home/footer-cta/cta-bg-spiral.svg'}
					textContentBGImageForSmallScreen={
						'/images/home/footer-cta/cta-bg-spiral.svg'
					}
					heroImagePosition="right"
				>
					<ContentWrapper>
						<ContentWrapper.Title>
							<h1 className="title-4 lg:title-1">{ctaTitle}</h1>
						</ContentWrapper.Title>
						<ContentWrapper.Description>
							<RichText value={ctaDescription?.contentRaw} />
						</ContentWrapper.Description>
						<ContentWrapper.CTA className="mt-[32px]">
							<Button fontColor="text-white" bgColor=" bg-primary-shade-1">
								{finalCtaButton?.text}
							</Button>
						</ContentWrapper.CTA>
					</ContentWrapper>
				</CTAWithImage>

				{/* <div className="flex  flex-row ">
					<div
						id="content"
						className=" from-secondary-shade-1 to-secondary-shade-2  relative basis-1/2  bg-gradient-to-r "
					>
						<Image
							src="/images/home/footer-cta/cta-bg-spiral.svg"
							className="animate-pulse object-fill object-center "
							alt="Image mask"
							height={600}
							width={600}
						/>
						<div className="absolute inset-x-0 inset-y-4 flex flex-col justify-center px-10 lg:text-left   ">
							<p className="title-5 lg:title-2 text-primary-black text-left">
								{ctaTitle}
							</p>
							<div className="para-2 text-primary-shade-1 w-3/4 justify-start ">
								<RichText value={ctaDescription?.contentRaw} />
							</div>
							<div className="flex justify-start ">
								<Link href={'/'}>
									<Button fontColor="text-white" bgColor=" bg-primary-shade-1">
										{finalCtaButton?.text}
									</Button>
								</Link>
							</div>
						</div>
					</div>
					<div
						className={`h-[600px] basis-1/2`}
						style={{
							backgroundImage: `linear-gradient(
							to right,
							#CADEED,
							transparent 20%
						), url('${imagePath}')`,
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
						}}
					></div>
				</div> */}
			</section>
			{/* <section
				id="footerCtaMobile"
				className="relative -top-[7em]   z-[2] block lg:hidden"
			>
				<div className="relative -z-[10] flex flex-col">
					<div
						className={`block h-[50vh] md:h-[56vh]`}
						style={{
							backgroundImage: `linear-gradient(
							transparent 20%,
							#F4F8FB
						), url('${imagePath}')`,
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
						}}
					></div>
					<div
						id="content"
						className="relative  block h-[50vh] md:h-[55vh] "
						style={{
							backgroundImage: `linear-gradient(
							#F4F8FB,
							#7AADD3)`,
						}}
					>
						<Image
							src="/images/home/footer-cta/cta-bg-spiral.svg"
							alt="Book us image backdrop"
							width={1052}
							height={690}
						/>
						<div className="absolute inset-y-20 inset-x-0 space-y-8  px-6 ">
							<div className="flex h-full flex-col justify-center space-y-2 align-middle ">
								<div>
									<p className="title-5 md:title-3  text-primary-black text-center ">
										{ctaTitle}
									</p>
								</div>
								<div className="para-4 md:para-2  text-primary-shade-1 justify-center text-center ">
									<RichText value={ctaDescription?.contentRaw} />
								</div>
								<div className="flex justify-center   ">
									<Link href={'/'}>
										<Button
											fontColor="text-white"
											bgColor=" bg-primary-shade-1"
										>
											{finalCtaButton?.text}
										</Button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section> */}
		</>
	);
}
