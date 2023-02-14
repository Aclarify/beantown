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
	if (!pageContent) {
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
			<section id="faq" className="relative mb-[9em]">
				{/* <div className="z-1 relative bottom-[5em] z-10 -mb-[19em] max-h-40 overflow-hidden">
					<Image src={topWave} alt="faq wave bg" style={{ width: '100vw' }} />
				</div> */}
				<FAQ
					backgroundImage="/images/heating-cooling/faq/hc-faq-bg-thumbprint.svg"
					faqTitle={faqTitle || ''}
					faqDescription={faqDescription || ''}
					faqButtonText={faqButton?.text || ''}
					faqsButtonTextColour="text-white"
					faqsButtonBgColour="bg-[#BC3B39]"
					faqList={faqList}
				></FAQ>
			</section>
		</>
	);
}
