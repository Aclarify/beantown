import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HomePageContentProps } from 'pages';
import Blogs from 'components/organisms/blogs.organism';
import { ElectricalContentProps } from 'pages/electrical';

const ElectricalBlogsContent = () => {
	const { pageContent } =
		useContext<GlobalContextProps<ElectricalContentProps>>(GlobalContext);
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
			blogsButtonTextColour="text-black"
			blogsButtonBgColour="bg-service-yellow"
			blogCards={blogCards || []}
		></Blogs>
	);
};

export default ElectricalBlogsContent;
