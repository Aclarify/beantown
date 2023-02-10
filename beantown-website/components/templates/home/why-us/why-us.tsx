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
		<section id="whyUs" className="mt-28 ">
			<div className="z-1 relative max-h-24  overflow-hidden ">
				<Image src={topWave} alt="why us wave bg" style={{ width: '100vw' }} />
			</div>
			<div
				id="section-wrapper"
				className="bg-primary-white-shade-1 relative z-10 flex flex-col overflow-hidden "
			>
				<div className="flex w-full flex-col-reverse items-center p-6 md:flex mx-8 md:flex-row lg:px-10">
					<div className=" z-10  flex flex-col items-start text-justify sm:basis-1/2 lg:pt-20 ">
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
					<div className="md:mt-10 mb-10 basis-1/2 px-5 md:px-10 ">
						<div className="bg-[url('/images/home/why-us/whyus-bg-blob.svg')] w-full h-auto bg-cover">
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
								className="h-auto w-full"
							/>
						</div>
					</div>
				</div>

				<div className=" mt-0 grid grid-cols-1 gap-y-4 lg:mt-20 mx-8  md:grid-cols-2">
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
			<div className="z-1 relative bottom-24  -mb-23 sm:bottom-40  sm:-mb-40 md:bottom-40 md:-mb-64">
				<Image
					src={bottomWave}
					alt="why us bottom bg"
					style={{ width: '100vw' }}
				/>
			</div>
		</section>
	);
}
