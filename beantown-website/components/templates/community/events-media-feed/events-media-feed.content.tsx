import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { CommunityContentProps } from 'pages/community';
import CMSImageWrapper from 'components/molecules/cms-image-wrapper.molecule';

const UpcomingEventsContent = () => {
	const { pageContent } =
		useContext<GlobalContextProps<CommunityContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { upcomingEvents, viewEventButtonText } = pageData;

	return (
		<div className="w-full p-6">
			<h1 className="mb-[20px] text-center  text-2xl lg:text-[40px]">
				Upcoming Events
			</h1>

			<div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
				{upcomingEvents?.map((eventsCard, index) => {
					return (
						<div
							key={index}
							className="border-gray-shade-3 rounded-2xl border  p-4  lg:rounded-3xl "
						>
							<div className="relative mb-2">
								<CMSImageWrapper
									altText={eventsCard?.eventImage?.asset?.altText || ''}
									image={eventsCard?.eventImage || null}
									shouldBePrefetched={true}
									style={{
										width: '100%',
										height: 'auto',
										objectFit: 'contain',
									}}
								/>
								<span className="subtitle-3 absolute bottom-3 left-4 w-max rounded-lg bg-[#FFFFFF] px-2 py-1">
									{eventsCard?.eventDate}
								</span>
							</div>

							<h5>{eventsCard?.eventTitle}</h5>
							<button className="bg-primary-shade-1 mt-[10px] w-full rounded-lg p-[10px] text-white">
								{viewEventButtonText}&rarr;
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default UpcomingEventsContent;
