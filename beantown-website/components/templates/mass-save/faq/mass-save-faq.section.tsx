import React from 'react';
import MassSaveFaqContent from './mass-save-faq.content';

const MassSaveFaqSection = () => {
	return (
		<>
			<section
				id="faq"
				className=" z-5  3xl:mt-[15em] relative mb-[6em] 2xl:mt-[10em]  "
			>
				<div className="bg-secondary-shade-2">
					<MassSaveFaqContent />
				</div>
			</section>
		</>
	);
};

export default MassSaveFaqSection;
