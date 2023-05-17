import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { MassSaveContentProps } from 'temporary-ondeck-pages/mass-save';
import FAQ from 'components/organisms/faq.organism';

const MassSaveFaqContent = () => {
	const { pageContent } =
		useContext<GlobalContextProps<MassSaveContentProps>>(GlobalContext);
	if (!pageContent || !pageContent.page || !pageContent.page[0]) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { faqTitle, faqDescription, faqButton, faqList } = pageData;
	return (
		<>
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
		</>
	);
};

export default MassSaveFaqContent;
