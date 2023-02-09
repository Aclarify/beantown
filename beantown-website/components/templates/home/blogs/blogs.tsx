import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HomePageContentProps } from 'pages';
import RichText from 'components/molecules/rich-text.molecule';
import Image from 'next/image';
import BlogCard from './blog-card';
import Button from 'components/atoms/button.atom';
import Link from 'next/link';

export default function Blogs() {
	const { pageContent } =
		useContext<GlobalContextProps<HomePageContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const homeData = pageContent.home[0];
	const { blogTitle, blogDescription, blogCards, blogButton } = homeData;
	return (
		<section
			id="blogs"
			className="bg-primary-white-shade-1 relative z-10 flex flex-col overflow-hidden pl-6 pb-20 lg:px-10 "
		>
			<div
				id="left-blob-desktop"
				className="relative bottom-[2rem] right-[16em] hidden h-0 sm:block"
			>
				<Image
					src="/blue-blob-shape-1.svg"
					alt="Left-blob"
					width={400}
					height={400}
				></Image>
			</div>
			<div
				id="left-blob-mobile"
				className="relative bottom-[-3rem] right-[8em] block h-0 sm:hidden"
			>
				<Image
					src="/blue-blob-shape-1-mobile.svg"
					alt="Left-blob"
					width={200}
					height={200}
				></Image>
			</div>

			<div className="relative z-10">
				<div className="title-5 lg:title-2 text-primary-black text-center">
					<h1>{blogTitle}</h1>
				</div>
				<div className="para-4 lg:para-2 text-primary-shade-1 pt-4 pb-6 text-center">
					<p>{blogDescription}</p>
				</div>

				<div className=" no-scrollbar flex snap-x snap-mandatory flex-nowrap gap-4 overflow-x-auto  pb-4 lg:pr-14  lg:pl-14 ">
					{blogCards?.map((blog, index) => {
						return (
							<div
								key={index}
								className="w-[250px] flex-none   snap-start   snap-always lg:w-1/3  "
							>
								<BlogCard
									blogName={blog?.name || ''}
									buttonText={blog?.button?.text || ''}
									blogDescription={blog?.description?.contentRaw || ''}
									thumbnailSrc={blog?.image?.image?.asset?.url || ''}
									thumbnailAltText={blog?.image?.altText || ''}
								/>
							</div>
						);
					})}
				</div>

				<div className="items-center pt-4 text-center lg:mb-16">
					<Link href={'/'}>
						<Button fontColor="text-white" bgColor=" bg-primary-shade-1">
							{blogButton?.text}
						</Button>
					</Link>
				</div>
			</div>
		</section>
	);
}
