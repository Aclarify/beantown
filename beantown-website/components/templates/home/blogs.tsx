import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HomePageContentProps } from 'pages';
import RichText from 'components/molecules/rich-text.molecule';
import Image from 'next/image';

export default function Blogs() {
	const { pageContent } =
		useContext<GlobalContextProps<HomePageContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const homeData = pageContent.home[0];
	const { blogTitle, blogDescription, blogCards, blogButton } = homeData;
	return (
		<section id="blogs" className="flex flex-col p-6 md:px-10 mt-12">
			<div className="title-5 md:title-2 text-primary-black text-center">
				<h1>{blogTitle}</h1>
			</div>
			<div className="para-4 md:para-2 text-primary-shade-1 text-center py-6">
				<p>{blogDescription}</p>
			</div>

			<div className=" flex flex-wrap md:flex-nowrap overflow-x-auto gap-5 ">
				{blogCards?.map((blog, index) => {
					return (
						<div key={index} className="flex-col justify-center ">
							<div className="  flex-col justify-center ">
								<div className="">
									<Image
										src={blog?.image?.image?.asset?.url || ''}
										alt={blog?.image?.altText || ''}
										width="500"
										height="500"
									/>
								</div>
								<p className="py-4 title-7 md:title-5 text-primary-black">
									{blog?.name}
								</p>
								<div className="para-4 md:para-2 text-primary-shade-1">
									<RichText value={blog?.description?.contentRaw} />
								</div>
								<div className="flex justify-between">
									<button className="para-4 md:para-2 text-primary-black underline pt-4">
										{blog && blog.button && blog?.button[0]?.text}
									</button>
									<img src="images/home_page/blog-arrow.svg" />
								</div>
							</div>
						</div>
					);
				})}
			</div>

			<div className="items-center text-center pt-4">
				<button className="bg-[#15284C] text-white rounded-lg p-2 text-xs ">
					{blogButton?.text}
				</button>
			</div>
		</section>
	);
}
