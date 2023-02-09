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
			className="flex flex-col pl-6 lg:px-10 bg-primary-white-shade-1 relative overflow-hidden z-10 pb-20 "
		>
			<div
				id="left-blob-desktop"
				className="hidden sm:block relative bottom-[2rem] right-[16em] h-0"
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
				className="block sm:hidden relative bottom-[-3rem] right-[8em] h-0"
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
				<div className="para-4 lg:para-2 text-primary-shade-1 text-center pt-4 pb-6">
					<p>{blogDescription}</p>
				</div>

				<div className=" no-scrollbar flex flex-nowrap overflow-x-auto snap-x snap-mandatory pb-4  lg:pr-14 lg:pl-14  gap-4 ">
					{blogCards?.map((blog, index) => {
						return (
							<div
								key={index}
								className="flex-none w-[250px]   lg:w-1/3   snap-always snap-start  "
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

				<div className="items-center text-center pt-4">
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
