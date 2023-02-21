import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HomePageContentProps } from 'pages';
import Blogs from 'components/organisms/blogs.organism';

const HeatingCoolingBlogsContent = () => {
	const { pageContent } =
		useContext<GlobalContextProps<HomePageContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const homeData = pageContent.page[0];
	const { blogTitle, blogDescription, blogButton, blogCards } = homeData;
	return (
		<div className="bg-[#FCF7F7] px-[20px] ">
			<Blogs
				blogsTitle={blogTitle || ''}
				blogsDescription={blogDescription || ''}
				blogsButtonText={blogButton?.text || ''}
				blogsButtonTextColour="text-white"
				blogsButtonBgColour="bg-[#BC3B39]"
				blogCards={blogCards || []}
			></Blogs>
		</div>
	);
};

export default HeatingCoolingBlogsContent;
