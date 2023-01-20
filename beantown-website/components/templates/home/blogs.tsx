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
		<section id="blogs" className="flex flex-col p-4 mt-12">
			<div className="text-xl font-bold text-center">
				<h1>{blogTitle}</h1>
			</div>
			<div className="text-center text-sm py-6">
				<p>{blogDescription}</p>
			</div>

			<div className=" flex flex-nowrap overflow-x-auto gap-5 ">
				{blogCards?.map((blog, index) => {
					return (
						<div key={index} className="flex-col ">
							<div className="  hover:!scale-100 duration-500 "></div>
							<Image
								src={blog?.image?.image?.asset?.url || ''}
								alt={blog?.image?.altText || ''}
								width="500"
								height="500"
							/>
							<div>
								<p className="py-4 text-l font-bold">{blog?.name}</p>
								<div className="text-xs">
									<RichText value={blog?.description?.contentRaw} />
								</div>
								<button className="text-md font-bold underline pt-4">
									Read More
								</button>
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
