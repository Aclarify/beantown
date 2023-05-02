import SectionContentWrapper from 'components/molecules/section-content-wrapper.molecule';
import useWindowDimensions from '@lib/hooks/use-window-dimensions.hook';
import topWave from 'public/images/privacy-policy/privacy-policy-top-wave.svg';
import topWaveMobile from 'public/images/privacy-policy/privacy-policy-top-wave-mobile.svg';
import WaveWrapper from 'components/molecules/wave-wrapper.molecule';
import PrivacyPolicyContent from './privacy-policy.content';

const PrivacyPolicySection = () => {
	const { width } = useWindowDimensions();
	return (
		<section
			id="privacy-policy"
			className=" 3xl:mb-[25em] xs:mb-[12em] xs:mt-[-3em] 3xl:mt-[-12em]  relative  z-10 mt-[-3em] mb-[13em] sm:mb-[15em] md:mt-[-4em] lg:mb-[18em] lg:mt-[-9em] xl:mb-[20em] 2xl:mb-[22em] 2xl:mt-[-11em]"
		>
			<WaveWrapper
				waveURL={width > 1023 ? topWave : topWaveMobile}
			></WaveWrapper>
			<SectionContentWrapper>
				<PrivacyPolicyContent />
			</SectionContentWrapper>
		</section>
	);
};
export default PrivacyPolicySection;
