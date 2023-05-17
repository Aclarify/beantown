import SectionContentWrapper from 'components/molecules/section-content-wrapper.molecule';
import LinksHubContent from './links-hub.content';
import Image from 'next/image';
import React from 'react';

const LinksHub = () => {
	return (
		<section
			id="links-hub"
			className="3xl:mb-[38em] xs:mb-[21em]   relative z-10 mb-[25em] md:mb-[27em]  lg:mb-[32em] xl:mb-[34em] 2xl:mb-[36em]"
		>
			<Image
				src={'/images/links-hub/link-hub-left-top-blob.svg'}
				height={390}
				width={450}
				alt="Left Top Blob "
				className="absolute  top-0 left-0 z-[-1] hidden  transform xl:block xl:translate-y-[33%] xl:translate-x-[-69%] 2xl:translate-y-[35%] 2xl:translate-x-[-65%]"
			/>

			<Image
				src={'/images/links-hub/link-hub-top-right-blob.svg'}
				height={390}
				width={450}
				alt="Right Blob "
				className="  absolute bottom-0 right-0 z-[-1]  hidden translate-x-[73%] translate-y-[-55%] transform xl:block  2xl:translate-x-[70%] "
			/>

			<Image
				src={'/images/links-hub/link-hub-bottom-left-blob.svg'}
				height={590}
				width={650}
				alt="Left Bottom Blob "
				className="absolute  bottom-0 left-0 z-[-1] hidden  transform lg:block lg:translate-y-[142%] lg:translate-x-[-36%]  "
			/>

			<Image
				src={'/images/links-hub/link-hub-bottom-left-blob-mobile.svg'}
				height={90}
				width={150}
				alt="Left Bottom Blob Mobile "
				className="  xs:translate-y-[210%] absolute bottom-0 left-0 z-[-1]    translate-y-[254%] translate-x-[-7%] transform lg:hidden "
			/>

			<Image
				src={'/images/links-hub/link-hub-bottom-right-blob.svg'}
				height={490}
				width={550}
				alt="Bottom Blob "
				className="  absolute bottom-0 right-0 z-[-1]  hidden transform lg:block lg:translate-x-[25%] lg:translate-y-[155%] xl:translate-y-[160%] 2xl:translate-y-[165%]   "
			/>

			<Image
				src={'/images/links-hub/link-hub-bottom-right-blob-mobile.svg'}
				height={90}
				width={150}
				alt=" Bottom Blob Mobile "
				className="  xs:translate-y-[220%] absolute bottom-0 right-0 z-[-1]  translate-y-[262%] translate-x-[14%] transform  md:translate-y-[288%] lg:hidden "
			/>
			<SectionContentWrapper>
				<LinksHubContent />
			</SectionContentWrapper>
		</section>
	);
};
export default LinksHub;
