import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import Image from 'next/image';
import Animate from 'components/molecules/animate.molecule';
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
					<h3 className=" mx-auto p-8 text-center text-2xl md:text-5xl">
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
											className="md:[w-480px]   justify-stretch mb-8 flex h-[348px]  w-[380px] flex-col    items-center gap-4 rounded-lg bg-white p-8 shadow-[rgba(44,_48,_88,_0.16)_0px_8px_200px] md:h-[600px]  "
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
					<div className=" container mx-auto  flex  h-auto   w-full flex-wrap items-center justify-center gap-8  p-8  ">
						{activeJobDetails.jobBenefitCards?.map(
							(befinitscard: any, index: number) => {
								return (
									<div
										key={index}
										className="md:[w-480px]   justify-stretch mb-8 flex h-[348px]  w-[380px] flex-col    items-center gap-4 rounded-lg bg-white p-8 shadow-[rgba(44,_48,_88,_0.16)_0px_8px_200px] md:h-[600px]  "
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
				src={'/images/career/jobs/career-top-left-blob.svg'}
				height={290}
				width={350}
				alt="Bottom Blob  "
				className="-z-2 3xl:translate-x-[25%] 3xl:translate-y-[91%] absolute bottom-0 right-0  hidden translate-x-[33%]  translate-y-[101%] transform  lg:block 2xl:translate-x-[32%]  2xl:translate-y-[99%] "
			/>
			<Image
				src={'/images/career/jobs/career-bottom-blob-mobile.svg'}
				height={290}
				width={350}
				alt="Bottom Blob Mobile "
				className="-z-2 xs:translate-x-[29%] xs:translate-y-[103%] absolute bottom-0 right-0  block translate-x-[27%]  translate-y-[103%]  transform  lg:hidden "
			/>
		</section>
	);
};

export default JobBenefitsContent;
