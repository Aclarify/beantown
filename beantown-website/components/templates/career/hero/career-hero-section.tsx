import React from 'react';
import SectionContentWrapper from 'components/molecules/section-content-wrapper.molecule';
import CareerHeroContent from './career-hero-content';

const CareerHeroSection = () => {
	return (
		<section id="career-hero-section" className="relative z-10  ">
			
			<SectionContentWrapper>
				<CareerHeroContent/>
			</SectionContentWrapper>		
			
		</section>
	);
};

export default CareerHeroSection;
