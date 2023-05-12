import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { ElectricalContentProps } from 'pages/electrical';
import Blogs from 'components/organisms/blogs.organism';

const ElectricalBlogsContent = () => {
	const { pageContent } =
		useContext<GlobalContextProps<ElectricalContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const homeData = pageContent.page[0];
	const { blogsTitle, blogsDescription, blogButton, blogCards } = homeData;

	return (
		<Blogs
			blogsTitle={blogsTitle || ''}
			blogsDescription={blogsDescription || ''}
			blogsButtonText={blogButton?.text || ''}
			blogsButtonTextColour="text-primary-black"
			blogsButtonBgColour="bg-service-yellow"
			categories={['Electrical']}
		></Blogs>
	);
};

export default ElectricalBlogsContent;
