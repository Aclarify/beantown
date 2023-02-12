import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import RichText from 'components/molecules/rich-text.molecule';
import { HomePageContentProps } from 'pages';
import WhyUsCard from './why-us-card';
import Image from 'next/image';
import Button from 'components/atoms/button.atom';
import Link from 'next/link';
import topWave from 'public/images/home/why-us/why-us-wave.svg';
import bottomWave from 'public/images/home/why-us/why-us-bottom-wave.svg';
export default function WhyUs() {
	const { pageContent } =
		useContext<GlobalContextProps<HomePageContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const homeData = pageContent.home[0];
	const { whyUsTitle, whyUsDescription, whyUsButton, whyUsCards, whyUsImage } =
		homeData;
	return (
		<section id="whyUs" className="mt-30">
			<div className="z-1 relative max-h-40 overflow-hidden">
				<Image src={topWave} alt="why us wave bg" style={{ width: '100vw' }} />
			</div>
			<div
				id="section-wrapper"
				className="bg-primary-white-shade-1 relative z-40 flex flex-col overflow-hidden"
			>
				<div className="flex w-full flex-col-reverse items-center p-6 lg:flex  lg:flex-row lg:px-10">
					<div className=" z-10  flex basis-1/2 flex-col items-start text-justify lg:pt-20 ">
						<h1 className="title-5 lg:title-2 text-primary-black ">
							{whyUsTitle}
						</h1>
						<div className="lg:para-2 para-4 text-primary-shade-1 text-left lg:py-10">
							<RichText value={whyUsDescription?.contentRaw} />
						</div>

						<Link className='mt-2' href={'/'}>
							<Button fontColor="text-white" bgColor=" bg-primary-shade-1">
								{whyUsButton?.text}
							</Button>
						</Link>
					</div>
					<div className="mt-12 hidden basis-1/2 px-20 lg:block">
						<div className=" bg-[url('/images/home/why-us/whyus-bg-blob.svg')] bg-cover">
							<Image
								src={whyUsImage?.asset?.url || ''}
								alt={whyUsImage?.asset?.altText || ''}
								width="1000"
								height="1000"
								style={{
									WebkitMaskImage:
										"url('./images/home/why-us/why-us-blob.svg')",
									WebkitMaskSize: 'cover',
									maskImage: "url('./images/home/why-us/why-us-blob.svg')",
									maskSize: 'cover',
								}}
								className=""
							/>
						</div>
					</div>
					<div className=" mt-10 mb-8 block lg:hidden ">
						<div className=" bg-[url('/images/home/why-us/whyus-bg-blob.svg')] bg-cover">
							<Image
								src={whyUsImage?.asset?.url || ''}
								alt={whyUsImage?.asset?.altText || ''}
								width="500"
								height="500"
								style={{
									WebkitMaskImage:
										"url('./images/home/why-us/why-us-blob.svg')",
									WebkitMaskSize: 'cover',
									maskImage: "url('./images/home/why-us/why-us-blob.svg')",
									maskSize: 'cover',
								}}
							/>
						</div>
					</div>
				</div>

				<div className=" mt-0 grid grid-cols-1 gap-2 lg:mt-20 lg:grid-cols-2 ">
					{whyUsCards?.map((ourValues, index) => {
						return (
							ourValues?.image && (
								<WhyUsCard
									key={index}
									title={ourValues?.titleText || ''}
									description={ourValues?.description?.contentRaw}
									thumbnailSrc={ourValues.image?.asset?.url || ''}
									thumbnailAltText={ourValues.image?.asset?.altText || ''}
								/>
							)
						);
					})}
				</div>
			</div>
			<div className="z-1 -mb-25 bottom-25 relative sm:bottom-40  sm:-mb-40 md:bottom-[11rem] md:-mb-[12rem]">
				<Image
					src={bottomWave}
					alt="why us bottom bg"
					style={{ width: '100vw' }}
				/>
			</div>
		</section>
	);
}
