import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import RichText from 'components/molecules/rich-text.molecule';
import { HomePageContentProps } from 'pages';
import WhyUsCard from './why-us-card';
import Image from 'next/image';
export default function WhyUs() {
	const { pageContent } =
		useContext<GlobalContextProps<HomePageContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const homeData = pageContent.home[0];
	const { whyUsTitle, whyUsDescription, whyUsCards, whyUsImage } = homeData;
	return (
		<section id="whyUs" className="p-6 flex flex-col">
			<div className="flex flex-col-reverse md:flex md:flex-row  items-center w-full">
				<div className=" pt-8  flex flex-col items-start text-justify basis-1/4 ">
					<h1 className=" sm:text-5xl text-3xl font-semibold">{whyUsTitle}</h1>
					<div className="sm:text-2xl text-base font-light text-gray-500 text-left">
						<RichText value={whyUsDescription?.contentRaw} />
					</div>
					<button className="border rounded-lg text-white text-2xl font-normal  bg-[#15284C] py-2 px-8 ">
						Know More
					</button>
				</div>
				<div className=" px-20 basis-3/4">
					<Image
						src={whyUsImage?.asset?.url || ''}
						alt={whyUsImage?.asset?.altText || ''}
						width="800"
						height="800"
					/>
				</div>
			</div>

			<div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
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
