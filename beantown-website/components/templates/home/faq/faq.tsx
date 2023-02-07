import React, { useContext, useState } from 'react';
import FAQDisclosure from './faq-disclosure';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HomePageContentProps } from 'pages';
import Button from 'components/atoms/button.atom';
import Link from 'next/link';
import Image from 'next/image';

export default function Faq() {
	const [indexToBeOpen, setIndexToBeOpen] = useState(0);
	const { pageContent } =
		useContext<GlobalContextProps<HomePageContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const homeData = pageContent.home[0];
	const { faqTitle, faqDescription, faqButton, faqList } = homeData;
	function handleFaqClick(index: number) {
		if (index == indexToBeOpen) {
			return;
		} else {
			setIndexToBeOpen(index);
		}
	}
	return (
		<>
			<section id="faq" className="relative -top-[7em] lg:top-[0em]">
				<div className=" p-6 lg:px-10  mt-16  bg-[url('../public/home-faq-mask-shape.svg')] bg-cover flex items-center align-middle  ">
					<div className="lg:flex">
						<div className=" lg:text-left text-center flex flex-col justify-center ">
							<h1 className=" title-5 lg:title-2 text-primary-black mt-10 ">
								{faqTitle}
							</h1>
							<p className="flex para-4 lg:para-2 text-primary-shade-1 my-4 flex-wrap lg:w-2/3">
								{faqDescription}
							</p>

							<Link href={'/'}>
								<Button fontColor="text-white" bgColor=" bg-primary-shade-1">
									{faqButton?.text}
								</Button>
							</Link>
						</div>

						<div className="w-full pt-2 ">
							{faqList?.map((faqs, index) => {
								return (
									<div key={index} className="w-full rounded-2xl p-2">
										<FAQDisclosure
											isOpen={index === indexToBeOpen}
											faq={faqs?.titleText || ''}
											faqAnswer={faqs?.description || ''}
											handleClick={() => handleFaqClick(index)}
										/>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
