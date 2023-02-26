import React from 'react';
import ElectricalFaqContent from './electrical-faqs.content';

const ElectricalFaqSection = () => {
	return (
		<>
			<section
				id="faq"
				className=" z-5 sm:mt[-10em] 3xl:mt-[-16em] relative mb-[9em] mt-[-12em] pt-[60px] md:mt-[-11em] lg:mt-[-8em] lg:pt-0 2xl:mt-[-12em] "
			>
				<ElectricalFaqContent />
			</section>
		</>
	);
};

export default ElectricalFaqSection;
