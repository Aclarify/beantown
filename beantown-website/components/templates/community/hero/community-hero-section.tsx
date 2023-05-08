import React from 'react';
import SectionContentWrapper from 'components/molecules/section-content-wrapper.molecule';
import CommunityHeroContent from './community-hero-content';

const CommunityHeroSection = () => {
	return (
		<section
			id="community-hero-section"
			className="bg-secondary-shade-3 relative  "
		>
			<SectionContentWrapper>
				<CommunityHeroContent />
			</SectionContentWrapper>
		</section>
	);
};

export default CommunityHeroSection;
