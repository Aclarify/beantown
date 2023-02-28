import React, { useContext, useState } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HomePageContentProps } from 'pages';
import FAQ from 'components/organisms/faq.organism';

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
			<section id="faq" className="z-5 relative mb-[6em] ">
				{faqList && (
					<FAQ
						backgroundImage="/images/home/faq/home-faq-bg-thumbprint.svg"
						faqTitle={faqTitle || ''}
						faqDescription={faqDescription || ''}
						faqButtonText={faqButton?.text || ''}
						faqsButtonTextColour="text-white"
						faqsButtonBgColour="bg-primary-shade-1"
						faqList={faqList || []}
					></FAQ>
				)}
			</section>
		</>
	);
}
