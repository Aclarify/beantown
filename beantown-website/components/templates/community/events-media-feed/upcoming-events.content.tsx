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

const UpcomingEventsContent = () => {
	const [cardsToShow, setCardsToShow] = useState(0);
	const { width } = useWindowDimensions();

	useEffect(() => {
		
		if (width < 640) {
			setCardsToShow(2);
		} else if (width >= 640 && width < SCREEN_BREAKPOINTS.SM) {
			setCardsToShow(3);
		} else if (
			width >= SCREEN_BREAKPOINTS.SM &&
			width < SCREEN_BREAKPOINTS.MD
		) {
			setCardsToShow(3);
		} else if (width >= SCREEN_BREAKPOINTS.MD && width < 1280) {
			setCardsToShow(3);
		} else if (width >= 1280) {
			setCardsToShow(3);
		}
	}, [width, setCardsToShow]);

	const { pageContent } =
		useContext<GlobalContextProps<CommunityContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];	
	const { eventSectionTitle, upcomingEvents, viewEventButtonText } = pageData;
	const eventCardsToDisplay = upcomingEvents?.slice(0, cardsToShow);
	
	const onLoadMore = () => {		
		if (eventCardsToDisplay && upcomingEvents) {
			// Check if there are more cards to display
			if (eventCardsToDisplay.length >= upcomingEvents.length) {				
				return;
			}
			setCardsToShow(eventCardsToDisplay.length + cardsToShow);
			console.log('After', cardsToShow);
			console.log('event cards to disply', eventCardsToDisplay);
		}
	};

	const getShouldShowLoadMore = () =>
		eventCardsToDisplay &&
		upcomingEvents &&
		eventCardsToDisplay.length < upcomingEvents.length;

	return (
		<div className="w-full p-6">
			<h1 className="mb-[20px] text-center  text-2xl lg:text-[40px]">
				{eventSectionTitle}
			</h1>

			<div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
				{eventCardsToDisplay?.map((eventsCard, index) => {
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

			<div className="mt-8 mb-20 items-center text-center lg:mt-[60px]">
				{getShouldShowLoadMore() && (
					<CtaWrapper.CTA
						onClick={onLoadMore}
						className={clsx(
							'bg-primary-shade-1 button text-white',
							buttonHoverStyle
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
