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
			<div className="flex flex-col-reverse md:flex md:flex-row  items-center">
				<div className=" pt-8 space-y-4 flex flex-col items-center text-justify ">
					<h1 className="text-4xl font-bold">{whyUsTitle}</h1>
					<RichText value={whyUsDescription?.contentRaw} />
					<button className="border rounded-lg text-white text-sm  bg-[#15284C] p-4  ">
						Know More
					</button>
				</div>
				<div className="group px-4">
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