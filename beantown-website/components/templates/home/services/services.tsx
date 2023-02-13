import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import RichText from 'components/molecules/rich-text.molecule';
import ContentWrapper from 'components/organisms/content-wrapper.organism';
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
	const homeData = pageContent.page[0];

	const { servicesTitle, servicesDescription, servicesGroup } = homeData;
	return (
		<section id="services" className="mt-10 overflow-hidden  lg:my-20 ">
			<div className="bg-secondary-shade-3 px-6 lg:px-10 ">
				<div
					id="left-blob-mobile"
					className="relative bottom-[0rem] right-[6em] block h-0 md:hidden"
				>
					{/* TODO Remove width and height if blobs are from static imports */}
					<Image
						src="/images/home/blob-shape-1.svg"
						alt="left-blob"
						width={147}
						height={134}
					></Image>
				</div>
				<div
					id="left-blob-tab"
					className="relative bottom-[2rem] right-[25em] hidden h-0 md:block lg:hidden"
				>
					<Image
						src="/images/home/blob-shape-1.svg"
						alt="left-blob"
						width={500}
						height={500}
					></Image>
				</div>
				<div className="relative z-10 my-4 flex flex-col items-center  text-center">
					<ContentWrapper>
						<ContentWrapper.Title>
							<h1 className="title-5 lg:title-2 text-primary-black mb-4">
								{servicesTitle}
							</h1>
						</ContentWrapper.Title>
						<ContentWrapper.Description>
							<RichText value={servicesDescription?.contentRaw} />
						</ContentWrapper.Description>
					</ContentWrapper>
				</div>
				<div
					id="right-blob-mobile"
					className="relative bottom-[7rem] -right-[77%] block h-0 md:hidden"
				>
					<Image
						src="/images/home/blob-shape-1.svg"
						alt="right-blob"
						width={202}
						height={184}
					></Image>
				</div>
				<div
					id="right-blob-tab"
					className="relative bottom-[11rem] -right-[84%] hidden h-0 md:block lg:hidden"
				>
					<Image
						src="/images/home/blob-shape-1.svg"
						alt="right-blob"
						width={500}
						height={500}
					></Image>
				</div>
				<div
					id="right-blob-desktop"
					className="relative bottom-[32rem] right-36 left-[88vw] hidden h-0 lg:block"
				>
					<Image
						src="/images/home/blob-shape-1.svg"
						alt="right-blob"
						width={933}
						height={850}
					></Image>
				</div>
				<div className="group relative z-10 flex  flex-wrap items-center justify-center space-y-8 py-4 lg:mb-20 lg:flex-nowrap lg:space-x-10 lg:space-y-4">
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
					id="left-blob-desktop"
					className="relative bottom-[26rem] right-[34rem] hidden h-0 lg:block"
				>
					<Image
						src="/images/home/blob-shape-1.svg"
						alt="left-blob"
						width={645}
						height={548}
					></Image>
				</div>
			</div>
		</section>
	);
}
