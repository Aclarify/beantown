import useWindowDimensions from '@lib/hooks/use-window-dimensions.hook';
import SectionContentWrapper from 'components/molecules/section-content-wrapper.molecule';
import WaveWrapper from 'components/molecules/wave-wrapper.molecule';
import React from 'react';
import MeetOurTeam from './meet-our-team.content';
import topWave from 'public/images/about-us/team/about-us-team-top-wave.svg';
import topWaveMobile from 'public/images/about-us/team/about-us-team-top-wave-mobile.svg';
import bottomWave from 'public/images/about-us/team/about-us-team-bottom-wave.svg';

const TeamSection = () => {
	const { width } = useWindowDimensions();
	return (
		<section
			id="team-section"
			className="  3xl:mt-[-5em] 4xl:mt-[-6em] relative z-10 mt-[-2em] sm:mt-[-2em] md:mt-[-3em] lg:mt-[-3em] 2xl:mt-[-4em] "
		>
			<WaveWrapper
				waveURL={width > 1023 ? topWave : topWaveMobile}
			></WaveWrapper>
			<div className="bg-secondary-shade-3 xs:mt-[-5em] 3xl:mt-[-30em] 4xl:mt-[-35em] xs:mb-[2em] 3xl:mb-[-13em] relative z-10 mt-[-2em] sm:mt-[-8em] md:mt-[-12em] lg:-mb-[6em] xl:mt-[-14em] 2xl:mt-[-20em] 2xl:mb-[-9em]">
				<SectionContentWrapper>
					<MeetOurTeam />
				</SectionContentWrapper>
			</div>
			<WaveWrapper waveURL={bottomWave}></WaveWrapper>
		</section>
	);
};
export default TeamSection;
