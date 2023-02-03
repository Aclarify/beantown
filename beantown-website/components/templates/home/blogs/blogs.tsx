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
		<section id="blogs" className="flex flex-col pl-6 md:px-10 bg-[#FEFEFE]">
			<div className="title-5 md:title-2 text-primary-black text-center">
				<h1>{blogTitle}</h1>
			</div>
			<div className="para-4 md:para-2 text-primary-shade-1 text-center pt-4 pb-6">
				<p>{blogDescription}</p>
			</div>

			<div className=" no-scrollbar flex flex-nowrap overflow-x-auto snap-x snap-mandatory pb-4  gap-3">
				{blogCards?.map((blog, index) => {
					return (
						<div
							key={index}
							className="flex-none w-[250px]    md:w-1/3  snap-always snap-start  "
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
		</section>
	);
}
