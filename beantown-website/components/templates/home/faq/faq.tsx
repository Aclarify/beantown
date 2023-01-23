import React, { useContext } from 'react';
import FAQDisclosure from './faq-disclosure';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HomePageContentProps } from 'pages';

export default function Faq() {
	const { pageContent } =
		useContext<GlobalContextProps<HomePageContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const homeData = pageContent.home[0];
	const { faqTitle, faqDescription, faqButton, faqList } = homeData;
	return (
		<section id="faq" className=" ">
			<div className=" p-6 md:px-10 bg-secondary-shade-3 mt-16 md:flex  ">
				<div className="text-center md:text-left ">
					<h1 className=" title-5 md:title-2 text-primary-black mt-10 ">
						{faqTitle}
					</h1>
					<p className="para-4 md:para-2 text-primary-shade-1 mb-4">
						{faqDescription}
					</p>
					<button className="border mb-10  rounded-md text-white para-3 md:para-2 bg-primary-shade-1 px-6 py-2 ">
						{faqButton?.text}
					</button>
				</div>

				<div className="w-full pt-2">
					{faqList?.map((faqs, index) => {
						return (
							<div key={index} className="w-full rounded-2xl bg-blue-50 p-2">
								<FAQDisclosure
									isOpen={index == 0}
									faq={faqs?.titleText || ''}
									faqAnswer={faqs?.description?.contentRaw}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
