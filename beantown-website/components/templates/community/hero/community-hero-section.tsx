import React from 'react';
import SectionContentWrapper from 'components/molecules/section-content-wrapper.molecule';
import CommunityHeroContent from './community-hero-content';

const CommunityHeroSection = () => {
	return (
		<section id="career-hero-section" className="relative z-10  ">
			<SectionContentWrapper>
				<CommunityHeroContent />
			</SectionContentWrapper>
		</section>
	);
};

export default CommunityHeroSection;
