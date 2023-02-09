import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import RichText from 'components/molecules/rich-text.molecule';
import { HomePageContentProps } from 'pages';
import WhyUsCard from './why-us-card';
import Image from 'next/image';
import Button from 'components/atoms/button.atom';
import Link from 'next/link';
import topWave from 'public/why-us-wave.svg';
import bottomWave from 'public/why-us-bottom-bg.svg';
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
			<div className="relative z-1 max-h-40 overflow-hidden">
				<Image src={topWave} alt="why us wave bg" style={{ width: '100vw' }} />
			</div>
			<div
				id="section-wrapper"
				className="flex flex-col overflow-hidden relative z-40 bg-primary-white-shade-1"
			>
				<div className="p-6 lg:px-10 flex flex-col-reverse lg:flex lg:flex-row  items-center w-full">
					<div className=" lg:pt-20  flex flex-col items-start text-justify basis-1/2 z-10 ">
						<h1 className="title-5 lg:title-2 text-primary-black ">
							{whyUsTitle}
						</h1>
						<div className="lg:para-2 para-4 text-primary-shade-1 text-left lg:py-10">
							<RichText value={whyUsDescription?.contentRaw} />
						</div>

						<Link href={'/'}>
							<Button fontColor="text-white" bgColor=" bg-primary-shade-1">
								{whyUsButton?.text}
							</Button>
						</Link>
					</div>
					<div className="mt-12 px-20 basis-1/2 hidden lg:block">
						<Image
							src={whyUsImage?.asset?.url || ''}
							alt={whyUsImage?.asset?.altText || ''}
							width="1000"
							height="1000"
							style={{
								WebkitMaskImage: "url('./why-us-blob.svg')",
								WebkitMaskSize: 'cover',
								maskImage: "url('./why-us-blob.svg')",
								maskSize: 'cover',
							}}
						/>
					</div>
					<div className="block lg:hidden md:mt-10">
						<Image
							src={whyUsImage?.asset?.url || ''}
							alt={whyUsImage?.asset?.altText || ''}
							width="500"
							height="500"
							style={{
								WebkitMaskImage: "url('./why-us-blob.svg')",
								WebkitMaskSize: 'cover',
								maskImage: "url('./why-us-blob.svg')",
								maskSize: 'cover',
							}}
						/>
					</div>
				</div>
				<div id="testimonial-card-bg-wrapper" className="relative">
					<div className="py-6 grid grid-cols-1 lg:grid-cols-2 gap-2 lg:mt-2 relative z-10 ">
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
			</div>
			<div className="relative z-1 bottom-24 -mb-24 sm:bottom-40  sm:-mb-40 md:bottom-64 md:-mb-64">
				<Image
					src={bottomWave}
					alt="why us bottom bg"
					style={{ width: '100vw' }}
				/>
			</div>
		</section>
	);
}
