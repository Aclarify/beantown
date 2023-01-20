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

			<div className="group flex flex-nowrap overflow-x-auto sm:grid sm:grid-cols-3  gap-5 ">
				{blogCards?.map((blog, index) => {
					return (
<<<<<<< HEAD
						<div
							key={index}
							className=" group-hover:scale-[0.85] hover:!scale-100 duration-500  flex-none w-[250px] md:w-full  p-4 "
						>
							<img src="images/home_page/blogImage1.svg" />
							<p className="pt-4 text-xl font-bold">{blog?.name}</p>
							<RichText value={blog?.description?.contentRaw} />
							<button className="text-md font-bold underline">Read More</button>
=======
						<div key={index} className="flex-col ">
							<div className=" group-hover:scale-[0.85] hover:!scale-100 duration-500 "></div>
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
>>>>>>> 886a7f1d5e02b1be5d5fc871942c1473497a9932
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
