import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import ContentWrapper from '../../../organisms/content-wrapper.organism';
import { MembershipsContentProps } from '../../../../pages/memberships';
import Image from 'next/image';

const MembersipsContent = () => {
	const { pageContent } =
		useContext<GlobalContextProps<MembershipsContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { heroTitle, heroDescription } = pageData;
	return (
		<section id="home_page_hero" className="relative">
			<Image
				src={'/images/memberships/hero/blob-shape-1.svg'}
				height={100}
				width={150}
				alt="Right Blob"
				className="absolute right-0 top-0 z-[-1] hidden translate-x-[20%] translate-y-[50%] transform md:block"
			/>
			<Image
				src={'/images/memberships/hero/blob-shape-2.svg'}
				height={100}
				width={150}
				alt="Left Blob "
				className="absolute  bottom-0 left-0 z-[-1] hidden -translate-x-[10%] transform md:block md:translate-y-[10%] lg:translate-y-[15%]"
			/>
			<Image
				src={'/images/memberships/hero/blob-shape-2.svg'}
				height={20}
				width={50}
				alt="Left Blob Mobile"
				className="absolute  top-0 left-0 z-[-1] -translate-x-[15%] translate-y-[90%] transform md:hidden "
			/>
			<Image
				src={'/images/memberships/hero/blob-shape-1.svg'}
				height={20}
				width={50}
				alt="Right Blob Mobile"
				className="absolute right-0 top-0 z-[-1] translate-x-[30%] translate-y-[40%] transform md:hidden "
			/>
			<div
				id="content-wrapper"
				className="z-1 2xl:padding-for-section text-primary-shade-1 flex w-full items-center justify-center  px-14"
			>
				<ContentWrapper className="xl:py-50 relative z-[2]  pt-28 pb-10 text-center sm:pb-20 md:pt-48 lg:w-3/4  2xl:w-1/2">
					<ContentWrapper.Title className=" mb-2  lg:mb-4">
						<h1>{heroTitle}</h1>
					</ContentWrapper.Title>
					<ContentWrapper.Description>
						<p>{heroDescription}</p>
					</ContentWrapper.Description>
				</ContentWrapper>
			</div>
		</section>
	);
};

export default MembersipsContent;
