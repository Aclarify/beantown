import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import FAQ from 'components/organisms/faq.organism';
import { PlumbingContentProps } from 'pages/plumbing';
import FAQOther from 'components/organisms/faq-other-services.organism';

const PlumbingFaqContent = () => {
	const { pageContent } =
		useContext<GlobalContextProps<PlumbingContentProps>>(GlobalContext);
	if (!pageContent || !pageContent.page || !pageContent.page[0]) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { faqTitle, faqDescription, faqButton, faqList } = pageData;
	return (
		<>
			{faqList && (
				<FAQOther
					backgroundImage="/images/plumbing/faq/plumbing-faq-bg-thumbprint.svg"
					//backgroundImageSmallScreen="/images/plumbing/faq/plumbing-faq-bg-thumbprint-mobile.svg"
					faqTitle={faqTitle || ''}
					faqDescription={faqDescription || ''}
					faqButtonText={faqButton?.text || ''}
					faqsButtonTextColour="text-white"
					faqsButtonBgColour="bg-service-red"
					faqList={faqList || []}
				></FAQOther>
			)}
		</>
	);
};

export default PlumbingFaqContent;
