import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HeatingCoolingContentProps } from 'pages/heating-and-cooling';
import Blogs from 'components/organisms/blogs.organism';

const HeatingCoolingBlogsContent = () => {
	const { pageContent } =
		useContext<GlobalContextProps<HeatingCoolingContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const homeData = pageContent.page[0];
	const { blogTitle, blogDescription, blogButton, blogCards } = homeData;
	return (
		<Blogs
			blogsTitle={blogTitle || ''}
			blogsDescription={blogDescription || ''}
			blogsButtonText={blogButton?.text || ''}
			blogsButtonTextColour="text-white"
			blogsButtonBgColour="bg-service-red"
			blogCards={blogCards || []}
		></Blogs>
	);
};

export default HeatingCoolingBlogsContent;
