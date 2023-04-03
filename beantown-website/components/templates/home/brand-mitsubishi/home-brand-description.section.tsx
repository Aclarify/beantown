import React from 'react';
import SectionContentWrapper from 'components/molecules/section-content-wrapper.molecule';
import HomeBrandDescriptionContent from './home-brand-mitsubishi.content';
const HomeBrandDescription = () => {	
	return (
		<section
			id="brandDescription"			
		>
			<SectionContentWrapper>
				<HomeBrandDescriptionContent />
			</SectionContentWrapper>			
		</section>
	);
};

export default HomeBrandDescription;
