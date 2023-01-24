import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import RichText from 'components/molecules/rich-text.molecule';
import { HomePageContentProps } from 'pages';
import React, { useContext } from 'react';
import ServiceCard from './service-card';

export default function Services() {
	const { pageContent } =
		useContext<GlobalContextProps<HomePageContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const homeData = pageContent.home[0];
	// console.log('homeData', homeData);
	const { servicesTitle, servicesDescription, servicesGroup } = homeData;
	return (
		<section id="services" className="my-20">
			<div className="px-6 md:px-10 bg-secondary-shade-3 ">
				<div className="flex flex-col items-center my-4">
					<h1 className=" title-5 md:title-2 mb-4 text-primary-black">
						{servicesTitle}
					</h1>
					<div className=" md:para-2 para-4 text-center text-primary-shade-1 flex-wrap">
						<RichText value={servicesDescription?.contentRaw} />
					</div>
				</div>
				<div className="flex flex-wrap md:flex-nowrap md:space-x-4 space-y-4 md:space-y-0 justify-around py-4">
					{servicesGroup?.map((service, index) => {
						return (
							service?.thumbnailImage?.asset?.url && (
								<ServiceCard
									key={index}
									title={service?.text || ''}
									buttonText={service?.button?.text || ''}
									hRef={service?.button?.href || ''}
									thumbnailSrc={service.thumbnailImage?.asset?.url || ''}
									thumbnailAltText={
										service.thumbnailImage?.asset?.altText || ''
									}
								/>
							)
						);
					})}
				</div>
			</div>
		</section>
	);
}
