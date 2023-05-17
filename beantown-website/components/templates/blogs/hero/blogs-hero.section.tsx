import React from 'react';
import MembershipsHeroContent from './blogs-hero.content';

const MembershipsHeroSection = () => {
	return (
		<section id="blogs-hero" className="z-5 relative pt-[10rem]">
			<div
				id="section-wrapper"
				className="bg-primary-white-shade-1 2xl:padding-for-section z-1 flex  flex-col overflow-hidden px-8 pb-14 md:px-16 md:pb-0 lg:px-8"
			>
				<MembershipsHeroContent />
			</div>
		</section>
	);
};

export default MembershipsHeroSection;
