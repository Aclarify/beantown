import React from 'react';
import HeatingCoolingProductsCardContent from './heating-cooling-products.content';

const HeatingCoolingProductsSection = () => {
	return (
		<section
			id="heatingCoolingProductsCards"
			className="mb-[6rem] md:mt-40 lg:mb-40"
		>
			<HeatingCoolingProductsCardContent />
		</section>
	);
};

export default HeatingCoolingProductsSection;
