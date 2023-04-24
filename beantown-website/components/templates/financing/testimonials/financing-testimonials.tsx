import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { FinancingContentProps } from 'pages/financing';
import Testimonials from 'components/organisms/testimonials.organism';
import WaveWrapper from 'components/molecules/wave-wrapper.molecule';
import topWave from 'public/images/about-us/testimonials/about-us-testimonial-top-wave.svg';
import bottomWave from 'public/images/about-us/testimonials/about-us-testimonial-bottom-wave.svg';

export default function FinancingTestimonials() {
	const { pageContent } =
		useContext<GlobalContextProps<FinancingContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { testimonialSection } = pageData;

	return (
		<section id="testimonialSection" className="z-5 relative">
			<WaveWrapper waveURL={topWave}></WaveWrapper>
			<div className=" bg-secondary-shade-3 3xl:mt-[-25em] xs:mt-[-2em] mt-[-4em] md:mt-[-10em] lg:mt-[-12em] xl:mt-[-15em] 2xl:mt-[-20em]">
				<Testimonials
					testimonialTitle={testimonialSection?.testimonialTitle || ''}
					testimonialDescription={
						testimonialSection?.testimonialDescription || ''
					}
					testimonialCards={testimonialSection?.testimonialCards || []}
				/>
			</div>
			<WaveWrapper waveURL={bottomWave}></WaveWrapper>
		</section>
	);
}
