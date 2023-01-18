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
		<section id="faq">
			<div className="bg-blue-100 mt-16">
				<div className="flex flex-col items-center mx-6">
					<h1 className="text-xl font-bold mt-2">{faqTitle}</h1>
					<p className="text-center py-4">{faqDescription}</p>
					<button className="border  rounded-lg text-white text-xs  bg-[#15284C] px-4 py-2 ">
						{faqButton?.text}
					</button>
				</div>

				<div className="w-full px-4 bg-blue-100 pt-2">
					{faqList?.map((faqs, index) => {
						return (
							<div
								key={index}
								className="mx-auto w-full max-w-md rounded-2xl bg-blue-100 p-2"
							>
								<FAQDisclosure
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
