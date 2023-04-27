import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import ContentWrapper from '../../../organisms/content-wrapper.organism';
import MaskedImageWithBackgroundVector from '../../../organisms/masked-image-with-blob.organism';
import useWindowDimensions from '../../../../lib/hooks/use-window-dimensions.hook';
import Animate from 'components/molecules/animate.molecule';
import { CareersContentProps } from 'pages/careers';
import CtaWrapper from 'components/molecules/cta-wrapper.molecule';
import Link from 'next/link';
import Button from 'components/atoms/button.atom';
import MaskedImageWithBackground from 'components/organisms/masked-image-with-background.organism';

const JobApplicationHeroContent = () => {
	const { pageContent } =
		useContext<GlobalContextProps<CareersContentProps>>(GlobalContext);

	const { width } = useWindowDimensions();
	

	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { heroTitle,applyButton,heroDescription,careerHeroImage } =
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
					className=" flex basis-1/2 flex-col items-start text-left lg:pt-20 "
				>
					<ContentWrapper>
						<ContentWrapper.Title>
							<Animate bottom>
								<h2 className=" text-primary-black ">{heroTitle}</h2>
							</Animate>
						</ContentWrapper.Title>
						<ContentWrapper.Description className="text-left !font-thin">
							<Animate>
								<p>{heroDescription}</p>
							</Animate>
						</ContentWrapper.Description>
					</ContentWrapper>
					<ContentWrapper className=" mt-4 lg:mt-8">
						<Button fontColor="text-white" bgColor="bg-primary-shade-1">
							{applyButton?.text}
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
						maskImg="./images/job-application/hero/blob-mask.svg"
						bgImg="./images/job-application/hero/bg-blob-shape.svg"
					/>
				</div>
			</div>
		</div>
	);
};

export default JobApplicationHeroContent;
