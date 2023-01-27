import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import RichText from 'components/molecules/rich-text.molecule';
import Image from 'next/image';
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

	const { servicesTitle, servicesDescription, servicesGroup } = homeData;
	return (
		<section id="services" className="mt-10 md:my-20">
			<div className="px-6 md:px-10 bg-secondary-shade-3 ">
				<div
					id="left-blob-mobile"
					className="md:hidden block relative bottom-[1rem] right-[5em] h-0"
				>
					<Image
						src="/blob-shape-1.svg"
						alt="right-blob"
						width={147}
						height={134}
					></Image>
				</div>
				<div className="flex flex-col items-center my-4 relative z-10">
					<h1 className=" title-5 md:title-2 mb-4 text-primary-black">
						{servicesTitle}
					</h1>
					<div className="md:para-2 para-4 text-center text-primary-shade-1 flex-wrap">
						<RichText value={servicesDescription?.contentRaw} />
					</div>
				</div>
				{/* TODO Fix right blob */}
				{/* <div
					id="right-blob-mobile"
					className="md:hidden block relative bottom-40 h-0"
				>
					<Image
						src="/blob-shape-1.svg"
						alt="right-blob"
						width={202}
						height={184}
					></Image>
				</div> */}
				{/* <div
					id="right-blob"
					className="hidden md:block relative bottom-[32rem] right-36 left-[88vw] h-0"
				>
					<Image
						src="/blob-shape-1.svg"
						alt="right-blob"
						width={933}
						height={850}
					></Image>
				</div> */}

				<div className="flex flex-wrap md:flex-nowrap md:space-x-20 space-y-4 md:space-y-0 justify-center py-4 relative z-10">
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
				<div
					id="left-blob"
					className="hidden md:block relative bottom-[20rem] right-[36rem] h-0"
				>
					<Image
						src="/blob-shape-1.svg"
						alt="left-blob"
						width={645}
						height={548}
					></Image>
				</div>
			</div>
		</section>
	);
}
