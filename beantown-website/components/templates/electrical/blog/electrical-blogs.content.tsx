import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import Blogs from 'components/organisms/blogs.organism';
import { ElectricalContentProps } from 'pages/electrical';
import BlogsOther from 'components/organisms/blogs-other-services.organism';

const ElectricalBlogsContent = () => {
	const { pageContent } =
		useContext<GlobalContextProps<ElectricalContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const homeData = pageContent.page[0];
	const { blogsTitle, blogsDescription, blogButton, blogCards } = homeData;

	return (
		<BlogsOther
			blogsTitle={blogsTitle || ''}
			blogsDescription={blogsDescription || ''}
			blogsButtonText={blogButton?.text || ''}
			blogsButtonTextColour="text-primary-black"
			blogsButtonBgColour="bg-service-yellow"
			blogCards={blogCards || []}
		></BlogsOther>
	);
};

export default ElectricalBlogsContent;
