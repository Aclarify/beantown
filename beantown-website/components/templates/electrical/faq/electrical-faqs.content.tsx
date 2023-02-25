import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import FAQ from 'components/organisms/faq.organism';
import { ElectricalContentProps } from 'pages/electrical';
import FAQOther from 'components/organisms/faq-other-services.organism';

const ElectricalFaqContent = () => {
	const { pageContent } =
		useContext<GlobalContextProps<ElectricalContentProps>>(GlobalContext);
	if (!pageContent || !pageContent.page || !pageContent.page[0]) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { faqTitle, faqDescription, faqButton, faqList } = pageData;
	return (
		<>
			{faqList && (
				<FAQOther
					backgroundImage="/images/electrical/faq/electrical-faq-bg-thumbprint.svg"
					faqTitle={faqTitle || ''}
					faqDescription={faqDescription || ''}
					faqButtonText={faqButton?.text || ''}
					faqsButtonTextColour="text-black"
					faqsButtonBgColour="bg-service-yellow"
					faqList={faqList || []}
				></FAQOther>
			)}
		</>
	);
};

export default ElectricalFaqContent;
