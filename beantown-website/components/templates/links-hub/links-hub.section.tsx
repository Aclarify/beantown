import SectionContentWrapper from 'components/molecules/section-content-wrapper.molecule';
import BookNowContent from './links-hub.content';
import Image from 'next/image';

const BookNowSection = () => {
	return (
		<section
			id="links-hub"
			className="3xl:mb-[25em] xs:mb-[12em] relative  z-10 mb-[13em] sm:mb-[15em] lg:mb-[18em] xl:mb-[20em] 2xl:mb-[22em]"
		>
			<Image
				src={'/images/links-hub/link-hub-left-top-blob.svg'}
				height={590}
				width={650}
				alt="Left Top Blob "
				className="absolute  top-0 left-0 z-[3] hidden  transform lg:block lg:translate-y-[-24%] lg:translate-x-[-85%] 2xl:translate-y-[-22%] 2xl:translate-x-[-78%]"
			/>
			<Image
				src={'/images/links-hub/link-hub-top-left-blob-mobile.svg'}
				height={90}
				width={150}
				alt="Left Top Blob Mobile "
				className="  absolute top-0 left-0 z-[3]   translate-y-[23%] translate-x-[-70%] transform md:hidden "
			/>
			<Image
				src={'/images/links-hub/link-hub-left-top-blob.svg'}
				height={290}
				width={350}
				alt="Left Top Blob Tablet "
				className=" absolute top-0 left-0 z-[3] hidden transform   md:block md:translate-y-[-9%] md:translate-x-[-75%] lg:hidden "
			/>
			<Image
				src={'/images/links-hub/link-hub-bottom-left-blob.svg'}
				height={590}
				width={650}
				alt="Left Bottom Blob "
				className="2xl-translate-y-0  absolute bottom-0 left-0 z-[-1]  hidden transform lg:block lg:translate-y-[5%] lg:translate-x-[-85%] 2xl:translate-x-[-68%]"
			/>
			<Image
				src={'/images/links-hub/link-hub-bottom-left-blob-mobile.svg'}
				height={90}
				width={150}
				alt="Left Bottom Blob Mobile "
				className="  absolute bottom-0 left-0 z-[-1]   translate-y-[22%] translate-x-[-70%] transform md:hidden "
			/>
			<Image
				src={'/images/links-hub/link-hub-bottom-left-blob.svg'}
				height={290}
				width={350}
				alt="Left Bottom Blob Tablet "
				className=" absolute bottom-0 left-0 z-[-1] hidden transform   md:block md:translate-y-[18%] md:translate-x-[-75%] lg:hidden "
			/>
			<Image
				src={'/images/links-hub/link-hub-top-right-blob.svg'}
				height={590}
				width={650}
				alt="Right Blob "
				className="  absolute bottom-0 right-0 z-[-1]  hidden transform lg:block lg:translate-y-[-63%] lg:translate-x-[65%] 2xl:translate-y-[-45%] 2xl:translate-x-[65%] "
			/>
			<Image
				src={'/images/links-hub/link-hub-top-right-blob-mobile.svg'}
				height={90}
				width={150}
				alt=" Right Blob Mobile "
				className="  absolute bottom-0 right-0 z-[-1]   translate-y-[-192%] translate-x-[65%] transform md:hidden "
			/>
			<Image
				src={'/images/links-hub/link-hub-top-right-blob.svg'}
				height={290}
				width={350}
				alt="Right Blob Tablet "
				className=" absolute bottom-0 right-0 z-[-1] hidden transform   md:block md:translate-y-[-22%] md:translate-x-[70%] lg:hidden "
			/>
			<Image
				src={'/images/links-hub/link-hub-bottom-right-blob.svg'}
				height={490}
				width={550}
				alt="Bottom Blob "
				className="  absolute bottom-0 right-0 z-[-1]  hidden transform lg:block lg:translate-x-[-17%] lg:translate-y-[96%] 2xl:translate-y-[107%]   "
			/>
			<Image
				src={'/images/links-hub/link-hub-bottom-right-blob-mobile.svg'}
				height={90}
				width={150}
				alt=" Bottom Blob Mobile "
				className="  absolute bottom-0 right-0 z-[-1]   translate-y-[110%] translate-x-[-17%] transform md:hidden "
			/>
			<Image
				src={'/images/links-hub/link-hub-bottom-right-blob.svg'}
				height={290}
				width={350}
				alt="Bottom Blob Tablet "
				className=" absolute bottom-0 right-0 z-[-1] hidden translate-y-[107%]   translate-x-[-17%] transform md:block lg:hidden "
			/>
			<SectionContentWrapper>{/* <BookNowContent /> */}</SectionContentWrapper>
		</section>
	);
};
export default BookNowSection;
