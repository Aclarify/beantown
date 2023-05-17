import React from 'react';
import SectionContentWrapper from 'components/molecules/section-content-wrapper.molecule';
import CommunityHeroContent from './community-hero-content';

const CommunityHeroSection = () => {
	return (
		<section
			id="community-hero-section"
			className="bg-secondary-shade-3  3xl:pb-[10em] relative pb-[2em] 2xl:pb-[4em]"
		>
			<SectionContentWrapper>
				<CommunityHeroContent />
			</SectionContentWrapper>
		</section>
	);
};

export default CommunityHeroSection;
