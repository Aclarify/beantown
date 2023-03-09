import React from 'react';
import MembershipsPageCTAContent from './memberships-cta.content';

const MembershipsPageCTASection = () => {
	return (
		<section
			id="memberships-cta"
			className="z-15 3xl:-top-[10em] 3xl:-mb-[4em] relative -top-[1em] mb-[6em] sm:-top-[2em] sm:mb-[5em] md:-top-[3em]
				md:mb-[5em] lg:-top-[4em] lg:mb-[3em] xl:-top-[5em] 2xl:-top-[7em] 2xl:mb-[0em]"
		>
			<MembershipsPageCTAContent />
		</section>
	);
};
export default MembershipsPageCTASection;

// className=" 3xl:mt-[-7em] relative mt-[-1em] text-center sm:mt-[-2em] md:mt-[-3em] xl:mt-[-4em] 2xl:mt-[-5em]  "
