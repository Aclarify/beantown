import React, { useContext, useState } from 'react';
import FAQDisclosure from './faq-disclosure';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HomePageContentProps } from 'pages';
import Button from 'components/atoms/button.atom';
import Link from 'next/link';
import Image from 'next/image';
import topWave from 'public/images/home/faq/faq-top-wave.svg';

export default function HomeFaq() {
	const [indexToBeOpen, setIndexToBeOpen] = useState(0);
	const { pageContent } =
		useContext<GlobalContextProps<HomePageContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const homeData = pageContent.page[0];
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
			<section id="faq" className="relative mb-[6em]">
				<div className="z-1 relative bottom-[5em] z-10 -mb-[19em] max-h-40 overflow-hidden">
					<Image src={topWave} alt="faq wave bg" style={{ width: '100vw' }} />
				</div>
				<div className="relative z-20 mt-16 flex  items-center  bg-[url('../public/images/home/faq/home-faq-bg-spiral.svg')] bg-cover p-6 align-middle lg:px-10  ">
					<div className="lg:flex">
						<div className=" flex flex-col justify-center text-center lg:text-left ">
							<h1 className=" title-5 lg:title-2 text-primary-black mt-10 ">
								{faqTitle}
							</h1>
							<p className="para-4 lg:para-2 text-primary-shade-1 my-4 flex flex-wrap justify-center lg:w-2/3">
								{faqDescription}
							</p>

							<Link href={'/'}>
								<Button fontColor="text-white" bgColor=" bg-primary-shade-1">
									{faqButton?.text}
								</Button>
							</Link>
						</div>

						<div className=" w-full pt-4 lg:pt-20 ">
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
