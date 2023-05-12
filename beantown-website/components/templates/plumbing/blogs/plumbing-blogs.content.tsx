import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { PlumbingContentProps } from 'pages/plumbing';
import Blogs from 'components/organisms/blogs.organism';

const PlumbingBlogsContent = () => {
	const { pageContent } =
		useContext<GlobalContextProps<PlumbingContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const homeData = pageContent.page[0];
	const { blogsTitle, blogsDescription, blogButton } = homeData;
	return (
		<Blogs
			blogsTitle={blogsTitle || ''}
			blogsDescription={blogsDescription || ''}
			blogsButtonText={blogButton?.text || ''}
			blogsButtonTextColour="text-white"
			blogsButtonBgColour="bg-service-green"
			categories={['Plumbing']}
		></Blogs>
	);
};

export default PlumbingBlogsContent;
