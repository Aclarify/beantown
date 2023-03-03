import useWindowDimensions from '@lib/hooks/use-window-dimensions.hook';
import React from 'react';
import ComunityCTAContent from './about-us-comunity-cta.content';


const ComunityCTASection = () => {
	const { width } = useWindowDimensions();
	return (
		<section
			id="plumbing-cta"
			className=" 3xl:mt-[-7em] relative mt-[-1em] text-center sm:mt-[-2em] md:mt-[-3em] xl:mt-[-4em] 2xl:mt-[-5em]  "
			//className=" 3xl:mt-[-14em] relative mt-[-7em] sm:mt-[-8em] md:mt-[-11em] xl:mt-[-10em] 2xl:mt-[-12em] "
		>
			
			<ComunityCTAContent />		
		</section>
	);
};
export default ComunityCTASection;
