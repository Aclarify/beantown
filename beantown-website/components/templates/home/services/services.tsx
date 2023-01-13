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
		return;
	}
	const homeData = pageContent.allHome[0];
	// console.log('homeData', homeData);
	const { servicesTitle, servicesDescription, servicesGroup } = homeData;
	return (
		<section id="services">
			<div className="m-4">
				<div className="flex flex-col items-center">
					<h1 className="text-4xl font-bold">{servicesTitle}</h1>
					<RichText value={servicesDescription.contentRaw} />
				</div>
				<div className="flex justify-evenly flex-wrap m-4  ">
					{servicesGroup.map((service, index) => {
						return (
							<ServiceCard
								title={service?.text}
								buttonText={service?.button?.text}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
}
