import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import ContentWrapper from '../../../organisms/content-wrapper.organism';
import Animate from 'components/molecules/animate.molecule';
import { CareersContentProps } from 'pages/careers';
import Link from 'next/link';
import Button from 'components/atoms/button.atom';
import MaskedImageWithBackground from 'components/organisms/masked-image-with-background.organism';

const CareerHeroContent = () => {
	const { pageContent } =
		useContext<GlobalContextProps<CareersContentProps>>(GlobalContext);	
	
	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { heroTitle,heroDescription,careerHeroImage,heroButton  } =
		pageData;
		
	return (
		<div
			id="section-wrapper"
			className=" mb-[6em]  flex flex-col  overflow-hidden "
		>
			<div
				id="content-image-wrapper"
				className="mt-32 flex w-full flex-col-reverse  items-center  lg:flex lg:flex-row"
			>
				<div
					id="content-wrapper"
					className=" flex w-full basis-1/2 flex-col items-center  md:items-start text-center  md:text-left lg:pt-20 "
				>
					<ContentWrapper className="">
						<ContentWrapper.Title>
							<Animate bottom>
								<h2 className=" text-primary-black ">{heroTitle}</h2>
							</Animate>
						</ContentWrapper.Title>
						<ContentWrapper.Description className="rich-text  text-center md:text-left !font-thin lg:pr-4">
							<Animate>
								<p>{heroDescription}</p>
							</Animate>
						</ContentWrapper.Description>
					</ContentWrapper>
					<ContentWrapper className=" mt-4 lg:mt-8">
						<Button fontColor="text-white" bgColor="bg-primary-shade-1">
							<Link href={'/job-application'}>{heroButton?.text}</Link>
						</Button>
					</ContentWrapper>
				</div>
				<div
					id="image-wrapper"
					className="mb-8 md:mt-12  md:basis-1/2 md:px-20 lg:px-10  "
				>
					<MaskedImageWithBackground
						image={careerHeroImage || null}
						imgAltText={careerHeroImage?.asset?.altText || ''}
						maskImg="./images/career/hero/blob-mask.svg"
						bgImg="./images/career/hero/bg-blob-shape.svg"
					/>
				</div>
			</div>
		</div>
	);
};

export default CareerHeroContent;
