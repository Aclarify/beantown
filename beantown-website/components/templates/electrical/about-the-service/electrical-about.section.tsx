import useWindowDimensions from '@lib/hooks/use-window-dimensions.hook';
import SectionContentWrapper from 'components/molecules/section-content-wrapper.molecule';
import WaveWrapper from 'components/molecules/wave-wrapper.molecule';
import Image from 'next/image';
import ElectricalServicesList from '../electrical-services-list.content';
import AboutElectricalServiceContent from './electrical-about.content';

const AboutElectricalServiceSection = () => {
	const { width } = useWindowDimensions();
	return (
		<section
			id="repairs-installation-upgrades"
			className="3xl-[-8em] relative z-10 mt-[-5em] sm:mt-[-7em] md:mt-[-9em] lg:mt-[-4em] 2xl:mt-[-6em] "
		>
			<WaveWrapper
				waveURL={
					width > 1023
						? '/images/services/services-hero-bottom-wave.svg'
						: '/images/services/services-hero-bottom-wave-mobile.svg'
				}
			></WaveWrapper>

			<SectionContentWrapper>
				<AboutElectricalServiceContent />
				<ElectricalServicesList />
			</SectionContentWrapper>
		</section>
	);
};
export default AboutElectricalServiceSection;
