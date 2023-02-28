import React from 'react';
import PlumbingFaqContent from './plumbing-faq.content';

const PlumbingFaqSection = () => {
	return (
		<>
			<section
				id="faq"
				className=" z-5 sm:mt[-7em] 3xl:mt-[-6em] relative mb-[9em] mt-[-10em]  lg:mt-[-8em]  2xl:mt-[-12em] "
			>
				<PlumbingFaqContent />
			</section>
		</>
	);
};

export default PlumbingFaqSection;
