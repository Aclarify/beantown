import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { AboutUsContentProps } from 'pages/about-us';
import ServiceAreas from 'components/organisms/service-areas.organism';

export default function AboutUsServiceAreas() {
	const { pageContent } =
		useContext<GlobalContextProps<AboutUsContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { serviceAreaSection } = pageData;
	return (
		<section id="serviceAreas" className="relative mt-20 ">
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
