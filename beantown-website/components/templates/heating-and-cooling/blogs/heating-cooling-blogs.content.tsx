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
	const hcData = pageContent.page[0];
	const { blogsTitle, blogsDescription, blogButton, blogCards } = hcData;
	return (
		<Blogs
			blogsTitle={blogsTitle || ''}
			blogsDescription={blogsDescription || ''}
			blogsButtonText={blogButton?.text || ''}
			blogsButtonTextColour="text-white"
			blogsButtonBgColour="bg-service-red"
			categories={[
				'Heating',
				'Cooling',
				'Heating and Cooling',
				'Heating & Cooling',
			]}
		></Blogs>
	);
};

export default HeatingCoolingBlogsContent;
