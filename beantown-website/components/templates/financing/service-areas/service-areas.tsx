import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { FinancingContentProps } from 'temporary-ondeck-pages/financing';
import ServiceAreas from 'components/organisms/service-areas.organism';

export default function FinancingServiceAreas() {
	const { pageContent } =
		useContext<GlobalContextProps<FinancingContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { serviceAreaSection } = pageData;
	return (
		<section id="serviceAreas" className="relative  py-[2em] lg:py-[5em]">
			<ServiceAreas
				serviceAreaSectionTitle={serviceAreaSection?.serviceAreaTitle || ''}
				serviceAreaDescription={
					serviceAreaSection?.serviceAreaDescription || ''
				}
				serviceAreaImageSrc={
					serviceAreaSection?.serviceAreaImage?.asset?.url || ''
				}
				serviceAreaImageAltText={
					serviceAreaSection?.serviceAreaImage?.asset?.altText || ''
				}
				serviceAreaList={serviceAreaSection?.serviceAreas || null}
				serviceAreaListTitle={serviceAreaSection?.serviceAreas?.title || ''}
			/>
		</section>
	);
}
