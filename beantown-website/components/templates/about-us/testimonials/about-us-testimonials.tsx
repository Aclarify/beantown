import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { AboutUsContentProps } from 'pages/about-us';
import Testimonials from 'components/organisms/testimonials.organism';

export default function AboutUsTestimonials() {
	const { pageContent } =
		useContext<GlobalContextProps<AboutUsContentProps>>(GlobalContext);

	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { testimonialSection } = pageData;

	return (
		<section
			id="testimonialSection"
			className=" bg-secondary-shade-3  relative bottom-[24rem] -mb-[24rem]  "
		>
			<Testimonials
				testimonialTitle={testimonialSection?.testimonialTitle || ''}
				testimonialDescription={
					testimonialSection?.testimonialDescription || ''
				}
				testimonialCards={testimonialSection?.testimonialCards || []}
			/>
		</section>
	);
}
