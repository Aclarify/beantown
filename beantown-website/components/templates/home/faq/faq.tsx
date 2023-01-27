import React, { useContext } from 'react';
import FAQDisclosure from './faq-disclosure';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HomePageContentProps } from 'pages';
import Button from 'components/atoms/button.atom';
import Link from 'next/link';

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
			<div className=" p-6 md:px-10 bg-secondary-shade-3 mt-16  bg-[url('../public/home-faq-mask-shape.svg')] flex items-center align-middle ">
				<div className="md:flex">
					<div className=" md:text-left text-center ">
						<h1 className=" title-5 md:title-2 text-primary-black mt-10 ">
							{faqTitle}
						</h1>
						<p className="flex para-4 md:para-2 text-primary-shade-1 my-4 flex-wrap md:w-2/3">
							{faqDescription}
						</p>

						<Link href={'/'}>
							<Button fontColor="text-white" bgColor=" bg-primary-shade-1">
								{faqButton?.text}
							</Button>
						</Link>
					</div>

					<div className="w-full pt-2">
						{faqList?.map((faqs, index) => {
							return (
								<div key={index} className="w-full rounded-2xl p-2">
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
			</div>
		</section>
	);
}
