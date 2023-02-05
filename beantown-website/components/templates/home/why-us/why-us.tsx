import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import RichText from 'components/molecules/rich-text.molecule';
import { HomePageContentProps } from 'pages';
import WhyUsCard from './why-us-card';
import Image from 'next/image';
import Button from 'components/atoms/button.atom';
import Link from 'next/link';
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
		<section
			id="whyUs"
			className=" p-6 lg:px-10 flex flex-col mt-30 bg-primary-white-shade-1 h-[1620px] "
			style={{
				WebkitMaskImage: "url('./why-us-wave.svg')",
				WebkitMaskSize: 'cover',
				maskImage: "url('./why-us-wave.svg')",
				maskSize: 'cover',
			}}
		>
			<div className="flex flex-col-reverse lg:flex lg:flex-row  items-center w-full mt-20  ">
				<div className=" lg:pt-20  flex flex-col items-start text-justify basis-1/2 ">
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
							WebkitMaskImage: "url('./why-us-mask.svg')",
							WebkitMaskSize: 'cover',
							maskImage: "url('./why-us-mask.svg')",
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
							WebkitMaskImage: "url('./why-us-mask.svg')",
							WebkitMaskSize: 'cover',
							maskImage: "url('./why-us-mask.svg')",
							maskSize: 'cover',
						}}
					/>
				</div>
			</div>

			<div className="py-6 grid grid-cols-1 lg:grid-cols-2 gap-2    lg:mt-20">
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
		</section>
	);
}
