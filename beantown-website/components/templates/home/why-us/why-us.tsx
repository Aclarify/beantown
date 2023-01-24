import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import RichText from 'components/molecules/rich-text.molecule';
import { HomePageContentProps } from 'pages';
import WhyUsCard from './why-us-card';
import Image from 'next/image';
import Button from 'components/molecules/button';
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
			className=" p-6 md:px-10 flex flex-col mt-30 bg-white "
			style={{
				WebkitMaskImage: "url('./why-us-wave-mask.svg')",
				WebkitMaskSize: 'cover',
			}}
		>
			<div className="flex flex-col-reverse md:flex md:flex-row  items-center w-full mt-20 ">
				<div className=" pt-8  flex flex-col items-start text-justify basis-1/2 ">
					<h1 className="title-5 md:title-2 text-primary-black ">
						{whyUsTitle}
					</h1>
					<div className="md:para-2 para-4 text-primary-shade-1 text-left pb-4">
						<RichText value={whyUsDescription?.contentRaw} />
					</div>
					{/* <button className="border rounded-lg text-white para-4 md:para-2  bg-primary-shade-1 md:tracking-wider tracking-wide py-2 px-8 ">
						{whyUsButton?.text}
					</button> */}
					<Link href={'/'}>
						<Button fontColor="text-white" bgColor=" bg-primary-shade-1">
							{whyUsButton?.text}
						</Button>
					</Link>
				</div>
				<div className="px-20 basis-1/2">
					<Image
						src={whyUsImage?.asset?.url || ''}
						alt={whyUsImage?.asset?.altText || ''}
						width="800"
						height="800"
						style={{
							WebkitMaskImage: "url('./why-us-mask.svg')",
							WebkitMaskSize: 'cover',
						}}
					/>
				</div>
			</div>

			<div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-2 ">
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
