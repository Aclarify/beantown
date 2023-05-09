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
import UpcomingEventsContent from './upcoming-events.content';
import Image from 'next/image';
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
		<section
			id="events-media-feed-section"
			className="z-5 3xl:mt-[-9em] 5xl:mt-[-13em]  relative mt-[-2em] mb-[6em] md:mt-[-3em] lg:mt-[-4em]
			xl:mt-[-5em] 2xl:mt-[-8em] "
		>
			<WaveWrapper waveURL={topWave}></WaveWrapper>
			<Image
				src={'/images/community/community-right-blob.svg'}
				height={600}
				width={500}
				alt="Right Blob"
				className=" xs:translate-y-[160%] xs:translate-x-[40%] 3xl:translate-y-[125%] 4xl:translate-y-[185%] absolute right-0 top-0 z-[-1] translate-y-[154%] translate-x-[40%] transform sm:translate-y-[156%] lg:translate-y-[90%] lg:translate-x-[69%] 2xl:translate-y-[95%] 2xl:translate-x-[45%]"
			/>
			<div className="2xl:padding-for-section  ">
				<div className="flex flex-col overflow-hidden px-6 sm:px-24 sm:pb-10 md:px-40 md:pb-0 lg:px-8 lg:pb-6">
					<UpcomingEventsContent />
				</div>
			</div>
			<Image
				src={'/images/community/community-left-blob.svg'}
				height={600}
				width={500}
				alt="Left Blob"
				className="  3xl:translate-y-[-114%] 4xl:translate-y-[-145%] absolute left-0 bottom-0 z-[-1] hidden transform  lg:block   lg:translate-y-[-30%] lg:translate-x-[-59%] 2xl:translate-y-[-45%] "
			/>
			<Image
				src={'/images/community/community-right-blob.svg'}
				height={200}
				width={200}
				alt="Left Blob Mobile"
				className=" xs:translate-y-[160%] xs:translate-x-[40%]  absolute left-0 bottom-0 z-[-1] block translate-y-[154%] translate-x-[40%] transform sm:translate-y-[156%] lg:hidden "
			/>
			<WaveWrapper
				waveURL={width > SCREEN_BREAKPOINTS.MD ? bottomWave : bottomWaveMobile}
			></WaveWrapper>
		</section>
	);
}
