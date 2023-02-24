import React from 'react';
import PlumbingFaqContent from './plumbing-faq.content';

const PlumbingFaqSection = () => {
	return (
		<>
			<section
				id="faq"
				className=" z-5 sm:mt[-7em] 3xl:mt-[-6em] relative mb-[9em] mt-[-6em] pt-[60px] lg:mt-[-8em] lg:pt-0 2xl:mt-[-12em] "
			>
				<PlumbingFaqContent />
			</section>
		</>
	);
};

export default PlumbingFaqSection;
