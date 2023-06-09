import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { CommunityContentProps } from 'pages/community';
import CMSImageWrapper from 'components/molecules/cms-image-wrapper.molecule';
import { SCREEN_BREAKPOINTS } from '@typing/common/interfaces/devices.interface';
import useWindowDimensions from '@lib/hooks/use-window-dimensions.hook';
import { buttonHoverStyle } from '@lib/styles/button.style';
import clsx from 'clsx';
import CtaWrapper from 'components/molecules/cta-wrapper.molecule';
import Animate from 'components/molecules/animate.molecule';
import Image from 'next/image';
import { formatDateFromISO } from 'utils/helper';
import { EventsList } from '@typing/gql/graphql';
import { upcomingEventsQuery } from '@lib/queries/pages/get-community.query';
import { getCMSDocs } from '@typing/api/api';

const UpcomingEventsContent = () => {
	const [cardsToShow, setCardsToShow] = useState(0);
	const [eventsToShow, setEventsToShow] = useState<EventsList[]>([]);
	const { width } = useWindowDimensions();

	useEffect(() => {
		// Fetch events from CMS
		const fetchEvents = async () => {
			const response = await getCMSDocs(upcomingEventsQuery, {
				currentDate: new Date().toISOString(),
			});
			if (response && response.events) {
				setEventsToShow(response.events);
			}
		};
		fetchEvents();
	}, []);

	useEffect(() => {
		if (width < SCREEN_BREAKPOINTS.LG) {
			setCardsToShow(3);
		} else if (
			width >= SCREEN_BREAKPOINTS.LG &&
			width < SCREEN_BREAKPOINTS.XXL
		) {
			setCardsToShow(6);
		} else if (width >= SCREEN_BREAKPOINTS.XXL) {
			setCardsToShow(8);
		}
	}, [width, setCardsToShow]);

	const { pageContent } =
		useContext<GlobalContextProps<CommunityContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { eventSectionTitle, viewEventButtonText } = pageData;
	const eventCardsToDisplay = eventsToShow?.slice(0, cardsToShow);

	const onLoadMore = () => {
		if (eventCardsToDisplay && eventsToShow) {
			// Check if there are more cards to display
			if (eventCardsToDisplay.length >= eventsToShow.length) {
				return;
			}
			setCardsToShow(eventCardsToDisplay.length + cardsToShow);
		}
	};

	const getShouldShowLoadMore = () =>
		eventCardsToDisplay &&
		eventsToShow &&
		eventCardsToDisplay.length < eventsToShow.length;

	return (
		<div className="w-full">
			<h1 className="mb-[20px] p-8  text-center  text-2xl lg:text-[40px] 2xl:mb-[54px]">
				{eventSectionTitle}
			</h1>

			<div className=" 3xl:grid-cols-4 grid grid-cols-1 place-items-center gap-4 lg:grid-cols-3">
				{eventCardsToDisplay?.map((eventsCard, index) => {
					return (
						<div
							key={index}
							className="border-gray-shade-3 max-w-[480px] rounded-2xl  border  p-4 lg:rounded-3xl"
						>
							<div className="relative mb-2 ">
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

			<div className="mt-12 mb-12 items-center text-center md:mb-20 lg:mt-[60px]">
				{getShouldShowLoadMore() && (
					<CtaWrapper.CTA
						onClick={onLoadMore}
						className={clsx(
							'button text-primary-shade-1 border-primary-shade-1 focus:ring-primary-shade-1 border-2 bg-white focus:ring'
						)}
					>
						<p>{'Load More'}</p>
					</CtaWrapper.CTA>
				)}
			</div>
		</div>
	);
};

export default UpcomingEventsContent;
