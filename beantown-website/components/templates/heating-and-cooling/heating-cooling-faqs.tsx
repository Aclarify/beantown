import React, { useContext, useState } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import Image from 'next/image';
import topWave from 'public/images/home/faq/faq-top-wave.svg';
import FAQ from 'components/organisms/faq.organism';
import { HeatingCoolingContentProps } from 'pages/heating-and-cooling';

export default function HeatingCoolingFaq() {
	const [indexToBeOpen, setIndexToBeOpen] = useState(0);
	const { pageContent } =
		useContext<GlobalContextProps<HeatingCoolingContentProps>>(GlobalContext);
	if (!pageContent || !pageContent.page || !pageContent.page[0]) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { faqTitle, faqDescription, faqButton, faqList } = pageData;
	function handleFaqClick(index: number) {
		if (index == indexToBeOpen) {
			return;
		} else {
			setIndexToBeOpen(index);
		}
	}
	return (
		<>
			<section
				id="faq"
				className="lg:padding-for-section z-5 relative mb-[9em] px-[20px] pb-[2em] pt-[60px] lg:pt-0"
			>
				{faqList && (
					<FAQ
						backgroundImage="/images/heating-cooling/faq/hc-faq-bg-thumbprint.svg"
						faqTitle={faqTitle || ''}
						faqDescription={faqDescription || ''}
						faqButtonText={faqButton?.text || ''}
						faqsButtonTextColour="text-white"
						faqsButtonBgColour="bg-service-red"
						faqList={faqList || []}
					></FAQ>
				)}
			</section>
		</>
	);
}
