import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import ContentWrapper from '../../../organisms/content-wrapper.organism';
import Animate from 'components/molecules/animate.molecule';
import { CareersContentProps } from 'pages/careers';
import MaskedImageWithBackground from 'components/organisms/masked-image-with-background.organism';

const JobApplicationHeroContent = () => {
	const { pageContent } =
		useContext<GlobalContextProps<CareersContentProps>>(GlobalContext);

	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { applicationTitle, applicationDescription, applicationImage } =
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
					className=" flex basis-1/2 flex-col text-center md:items-start md:text-left lg:pt-20 "
				>
					<ContentWrapper>
						<ContentWrapper.Title>
							<Animate bottom>
								<h2 className=" text-primary-black ">{applicationTitle}</h2>
							</Animate>
						</ContentWrapper.Title>
						<ContentWrapper.Description className="rich-text text-gray-shade-1  text-center !font-thin md:text-left lg:pr-4">
							<Animate>
								<p>{applicationDescription}</p>
							</Animate>
						</ContentWrapper.Description>
					</ContentWrapper>
				</div>
				<div
					id="image-wrapper"
					className="mb-8 md:mt-12  md:basis-1/2 md:px-20 lg:px-10  "
				>
					<MaskedImageWithBackground
						image={applicationImage || null}
						imgAltText={applicationImage?.asset?.altText || ''}
						maskImg="./images/job-application/hero/blob-mask.svg"
						bgImg="./images/job-application/right-blob.svg"
					/>
				</div>
			</div>
		</div>
	);
};

export default JobApplicationHeroContent;
