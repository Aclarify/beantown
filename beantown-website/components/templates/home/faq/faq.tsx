import React, { useContext } from 'react';
import FAQDisclosure from './faq-disclosure';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HomePageContentProps } from 'pages';
import RichText from 'components/molecules/rich-text.molecule';

export default function Faq() {
	const { pageContent } =
		useContext<GlobalContextProps<HomePageContentProps>>(GlobalContext);
	if (!pageContent) {
		return;
	}
	const homeData = pageContent.allHome[0];
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
				{faqList[0].titlesDescription?.map((faqs, index) => {
					return (
						<div className="w-full px-4 bg-blue-100 pt-2">
							<div className="mx-auto w-full max-w-md rounded-2xl bg-blue-100 p-2">
								<FAQDisclosure
									faq={faqs?.titleText}
									faqAnswer={faqs?.description?.contentRaw}
								/>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}
