import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import Image from 'next/image';
import Animate from 'components/molecules/animate.molecule';
import BookNowButton from 'components/atoms/book-now-button.atom';
import { CareersContentProps } from 'pages/careers';
import CMSImageWrapper from 'components/molecules/cms-image-wrapper.molecule';
import { jobsContext } from '@contexts/jobs/Job-benefits-context';
import Link from 'next/link';
import Button from 'components/atoms/button.atom';

const JobBenefitsContent = () => {
	const { pageContent } =
		useContext<GlobalContextProps<CareersContentProps>>(GlobalContext);
	const { activeJobDetails } = useContext(jobsContext);
	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { careerBenefits, globaljobBenefitSectionTitle } = pageData;
	if (!activeJobDetails) {
		return null;
	}

	return (
		<section className="mb-72 mt-12 md:mt-28">
			<Animate>
				<div className="flex flex-col items-center justify-center ">
					<h3 className=" mx-auto text-center text-2xl md:text-5xl p-8">
						{globaljobBenefitSectionTitle}
					</h3>

					{/* Global Benefits */}
					{careerBenefits && (
						<div className=" container mx-auto mt-8 flex  h-auto   w-full flex-wrap items-center justify-center gap-8  p-8  md:mt-20 ">
							{careerBenefits.map(
								(globalCareerBefenitscardData: any, index: number) => {
									return (
										<div
											key={index}
											className="md:[w-480px]   justify-stretch flex h-[348px] w-[380px]  flex-col items-center    gap-4 rounded-lg bg-[#FFFFFF] p-8 shadow-md md:h-[600px] mb-8  "
										>
											<div className="mt-4 h-[80px]  w-[80px] md:h-[120px] md:w-[120px]  ">
												<CMSImageWrapper
													altText={
														globalCareerBefenitscardData?.image?.asset
															?.altText || ''
													}
													image={globalCareerBefenitscardData?.image || null}
													shouldBePrefetched={true}
													style={{
														width: '100%',
														height: 'auto',
														objectFit: 'contain',
													}}
												/>
											</div>
											<h3 className=" text-center">
												{globalCareerBefenitscardData?.titleText}
											</h3>
											<div className=" para cursor-pointer overflow-auto text-center ">
												{globalCareerBefenitscardData?.description}
											</div>
										</div>
									);
								}
							)}
						</div>
					)}

					{/* Job Selected Benefits */}
					<div className=" container mx-auto  flex  h-auto   w-full flex-wrap items-center justify-center gap-8 p-8  ">
						{activeJobDetails.jobBenefitCards?.map(
							(befinitscard: any, index: number) => {
								return (
									<div
										key={index}
										className="md:[w-480px]   justify-stretch flex h-[348px] w-[380px]  flex-col items-center    gap-4 rounded-lg bg-[#FFFFFF] p-8 shadow-md md:h-[600px] mb-8  "
									>
										<div className="mt-4 h-[80px]  w-[80px] md:h-[120px] md:w-[120px] ">
											<CMSImageWrapper
												altText={befinitscard?.image?.asset?.altText || ''}
												image={befinitscard?.image || null}
												shouldBePrefetched={true}
												style={{
													width: '100%',
													height: 'auto',
													objectFit: 'contain',
												}}
											/>
										</div>
										<h3 className="text-center">{befinitscard?.titleText}</h3>

										<div className="para overflow-auto text-center">
											{befinitscard?.description}
										</div>
									</div>
								);
							}
						)}
					</div>

					<Button fontColor="text-white" bgColor="bg-primary-shade-1">
						<Link href={'/jobApplication'}>{'Apply'}</Link>
					</Button>
				</div>
			</Animate>

			<Image
				src={'/images/career/jobs/career-right-blob.svg'}
				height={290}
				width={350}
				alt="Right Blob  "
				className="-z-2 absolute bottom-0 right-0 block   translate-x-[15%]  translate-y-[95%]  transform "
			/>
		</section>
	);
};

export default JobBenefitsContent;
