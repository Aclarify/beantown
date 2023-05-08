/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext } from 'react';
import useWindowDimensions from '@lib/hooks/use-window-dimensions.hook';
import WaveWrapper from 'components/molecules/wave-wrapper.molecule';
import topWave from 'public/images/community/events/community-events-top-wave.svg';
import bottomWave from 'public/images/community/events/community-events-bottom-wave-with-blob.svg';
import bottomWaveMobile from 'public/images/community/events/community-events-bottom-wave-mobile.svg';
import { GlobalContext } from 'contexts/global/global.context';
import { CommunityContentProps } from 'pages/community';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import UpcomingEventsContent from './events-media-feed.content';
import { SCREEN_BREAKPOINTS } from '@typing/common/interfaces/devices.interface';

export default function EventsMediaFeedSection() {
	const { width } = useWindowDimensions();
	// Get the page content from the global context
	const { pageContent } =
		useContext<GlobalContextProps<CommunityContentProps>>(GlobalContext);

	// If there is no page content, don't render anything
	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	return (
		<section id="events-media-feed-section" className="z-5 relative ">
			<WaveWrapper waveURL={topWave}></WaveWrapper>
			<div className="2xl:padding-for-section  ">
				<div className="flex flex-col overflow-hidden px-6 sm:px-24 sm:pb-10 md:px-40 md:pb-0 lg:px-8 lg:pb-6">
					<UpcomingEventsContent />
				</div>
			</div>

			<WaveWrapper
				waveURL={width > SCREEN_BREAKPOINTS.MD ? bottomWave : bottomWaveMobile}
			></WaveWrapper>
		</section>
	);
}
