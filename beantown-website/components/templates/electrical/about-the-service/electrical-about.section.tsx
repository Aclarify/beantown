import useWindowDimensions from '@lib/hooks/use-window-dimensions.hook';
import SectionContentWrapper from 'components/molecules/section-content-wrapper.molecule';
import WaveWrapper from 'components/molecules/wave-wrapper.molecule';
import Image from 'next/image';
import ElectricalServicesList from '../electrical-services-list.content';
import AboutElectricalServiceContent from './electrical-about.content';
import topWave from 'public/images/services/services-hero-bottom-wave.svg';
import topWaveMobile from 'public/images/services/services-hero-bottom-wave-mobile.svg';
import bottomWave from 'public/images/plumbing/about/plumbing-about-bottom-wave.svg';
import bottomWaveMobile from 'public/images/plumbing/about/plumbing-about-bottom-wave-mobile.svg';

const AboutElectricalServiceSection = () => {
	const { width } = useWindowDimensions();
	return (
		<section
			id="repairs-installation-upgrades"
			className=" 3xl:mt-[-10em] xs:mt-[-4em] relative z-10 mt-[-5em] sm:mt-[-6em] md:mt-[-9em] lg:mt-[-4em] 2xl:mt-[-6em] "
		>
			<WaveWrapper
				shouldBePrefetched={true}
				waveURL={width > 1023 ? topWave : topWaveMobile}
			></WaveWrapper>
			<Image
				src={
					'/images/electrical/repairs-installation-upgrades/electrical-yellow-blob.svg'
				}
				height={200}
				width={300}
				alt="Right Blob "
				className="absolute right-0 z-[-1] hidden translate-x-[3%] translate-y-[122%] transform lg:block lg:translate-y-[50%] 2xl:translate-y-[65%]"
			/>
			<SectionContentWrapper>
				<AboutElectricalServiceContent />
				<ElectricalServicesList />
			</SectionContentWrapper>
			<Image
				src={
					'/images/electrical/repairs-installation-upgrades/electrical-yellow-blob-mobile.svg'
				}
				height={180}
				width={200}
				alt="Left Blob Mobile"
				className="absolute left-0 top-0 z-[-1] translate-x-[-35%] translate-y-[92%] transform md:translate-y-[110%] lg:hidden"
			/>
			<WaveWrapper
				waveURL={width > 1023 ? bottomWave : bottomWaveMobile}
			></WaveWrapper>
		</section>
	);
};
export default AboutElectricalServiceSection;
