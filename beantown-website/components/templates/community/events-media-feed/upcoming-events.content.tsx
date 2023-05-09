import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { CommunityContentProps } from 'pages/community';
import CMSImageWrapper from 'components/molecules/cms-image-wrapper.molecule';
import Animate from 'components/molecules/animate.molecule';
import Image from 'next/image';
import { formatDateFromISO } from 'utils/helper';

const UpcomingEventsContent = () => {
	const { pageContent } =
		useContext<GlobalContextProps<CommunityContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { eventSectionTitle, upcomingEvents, viewEventButtonText } = pageData;

	return (
		<div className="w-full p-6">
			<h1 className="mb-[20px] text-center  text-2xl lg:text-[40px]">
				{eventSectionTitle}
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
									{formatDateFromISO(eventsCard?.eventDate, 'dd MMMM, yyyy')}
								</span>
							</div>
							<Animate>
								<h5>{eventsCard?.eventTitle}</h5>
							</Animate>

							<div className="bg-primary-shade-1 mt-[10px] flex justify-center rounded-lg p-2 align-middle ">
								<button className=" para  pr-4 tracking-wide text-white lg:tracking-wider">
									{viewEventButtonText}
								</button>

								<Image
									src="/images/community/media-feed-arrow.svg"
									width="32"
									height="20"
									alt="Arrow"
								/>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default UpcomingEventsContent;
