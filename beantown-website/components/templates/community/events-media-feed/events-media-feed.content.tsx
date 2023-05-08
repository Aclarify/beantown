import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { CommunityContentProps } from 'pages/community';

const UpcomingEventsContent = () => {
	const { pageContent } =
		useContext<GlobalContextProps<CommunityContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { upcomingEvents, viewEventButtonText } = pageData;

	return <div></div>;
};

export default UpcomingEventsContent;
