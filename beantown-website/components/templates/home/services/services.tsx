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
		<section id="services" className="mt-10 lg:my-20  overflow-hidden mx-8 ">
			<div className="px-6 lg:px-10 bg-secondary-shade-3 ">
				<div
					id="left-blob-mobile"
					className="md:hidden block relative bottom-[0rem] right-[6em] h-0"
				>
					<Image
						src="/blob-shape-1.svg"
						alt="left-blob"
						width={147}
						height={134}
					></Image>
				</div>
				<div
					id="left-blob-tab"
					className="lg:hidden md:block hidden relative bottom-[2rem] right-[25em] h-0"
				>
					<Image
						src="/blob-shape-1.svg"
						alt="left-blob"
						width={500}
						height={500}
					></Image>
				</div>
				<div className="flex flex-col items-center my-4 relative z-10  text-center">
					<h1 className=" title-5 lg:title-2 mb-4 text-primary-black">
						{servicesTitle}
					</h1>
					<div className="lg:para-2 para-4 text-center text-primary-shade-1 flex-wrap w-1/2 ">
						<RichText value={servicesDescription?.contentRaw} />
					</div>
				</div>
				<div
					id="right-blob-mobile"
					className="md:hidden block relative bottom-[7rem] -right-[77%] h-0"
				>
					<Image
						src="/blob-shape-1.svg"
						alt="right-blob"
						width={202}
						height={184}
					></Image>
				</div>
				<div
					id="right-blob-tab"
					className="lg:hidden md:block hidden relative bottom-[11rem] -right-[84%] h-0"
				>
					<Image
						src="/blob-shape-1.svg"
						alt="right-blob"
						width={500}
						height={500}
					></Image>
				</div>
				<div
					id="right-blob-desktop"
					className="hidden lg:block relative bottom-[32rem] right-36 left-[88vw] h-0"
				>
					<Image
						src="/blob-shape-1.svg"
						alt="right-blob"
						width={933}
						height={850}
					></Image>
				</div>
				<div className="flex flex-wrap lg:flex-nowrap lg:space-x-10  space-y-8 lg:space-y-4 lg:mb-20 justify-center items-center py-4 relative z-10 group">
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
					className="hidden lg:block relative bottom-[26rem] right-[34rem] h-0"
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
