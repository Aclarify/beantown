import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import RichText from 'components/molecules/rich-text.molecule';
import { HomePageContentProps } from 'pages';
import WhyUsCard from './why-us-card';
export default function WhyUs() {
	const { pageContent } =
		useContext<GlobalContextProps<HomePageContentProps>>(GlobalContext);
	if (!pageContent) {
		return;
	}
	const homeData = pageContent.allHome[0];
	const { whyUsTitle, whyUsDescription, whyUsCards } = homeData;
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
				<div className="group">
					<img
						className="group-hover:scale-125  transition-all  duration-500"
						src=" images/home_page/whyUsBlobImage.svg"
					/>
				</div>
			</div>

			<div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
				{whyUsCards?.map((ourValues, index) => {
					return (
						ourValues?.titleText && (
							<WhyUsCard
								title={ourValues?.titleText}
								description={ourValues?.description?.contentRaw}
							/>
						)
					);
				})}
			</div>
		</section>
	);
}
