import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import Button from 'components/atoms/button.atom';
import CMSImageWrapper from 'components/molecules/cms-image-wrapper.molecule';
import CtaWrapper from 'components/molecules/cta-wrapper.molecule';
import ContentWrapper from 'components/organisms/content-wrapper.organism';
import Image from 'next/image';
import { AboutUsContentProps } from 'pages/about-us';
import { useContext } from 'react';

const MeetOurTeam = () => {
	const { pageContent } =
		useContext<GlobalContextProps<AboutUsContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { teamTitle, teamDescription, memberCards } = pageData;
	return (
		<section id="meet-our-team-section" className="lg:pb-[2em]">
			<div id="section-container">
				<div id="title-container" className="flex flex-col">
					<ContentWrapper>
						<ContentWrapper.Title className=" mb-3 lg:mb-4">
							<h1 className="title-5 lg:title-2 text-primary-shade-1 mt-10 text-center">
								{teamTitle}
							</h1>
						</ContentWrapper.Title>
						<ContentWrapper.Description>
							<p className="para-4 lg:subtitle-4 text-primary-shade-1 my-4 justify-center text-center md:mx-40 ">
								{teamDescription}
							</p>
						</ContentWrapper.Description>
					</ContentWrapper>
				</div>
				<div
					id="cards-container"
					//className=" container mx-auto flex      flex-wrap items-center justify-center  space-x-4  space-y-4 "
					className=" container grid grid-cols-2 mx-auto  sm:flex sm:flex-wrap items-center justify-center  space-x-4  space-y-4 "
				>
					{memberCards?.map((content, index) => {
						return (
							content && (
								<div
									key={index}
									id="card"
									className="flex flex-col place-items-center h-full    rounded-lg  bg-white p-1 shadow-[rgba(29,_39,_87,_0.08)_4px_8px_60px] sm:flex sm:flex-row  sm:p-2 "
								>
									{/* <div className="flex h-full items-center">
											<CMSImageWrapper
												altText={content.profilePicture?.asset?.altText || ''}
												image={content.profilePicture || null}
											/>
										</div> */}

									<div
										id="profileInfo-wrapper"
										className="justify-between  sm:flex sm:space-x-5 "
									>
										<div className="h-[150px] w-[150px]  rounded-lg fill-current  md:h-[200px] md:w-[200px] ">
											<Image
												src={content.profilePicture?.asset?.url || ''}
												height={'200'}
												width={'200'}
												alt={content.profilePicture?.asset?.altText || ''}
												className="rounded-lg  p-1"
											/>
										</div>

										<div
											id="profile-Info"
											className=" mb-4 flex flex-col items-center  justify-between  "
										>
											<div id="name" className="flex flex-col ">
												<h1 className=" lg:title-4  mt-4 text-center text-black sm:mt-10">
													{content?.memberName}
												</h1>
											</div>
											<div id="Designation">
												<span className=" text-primary-color-shade-2">
													{content?.memberDesignation}
												</span>
											</div>
											<div className="flex">
												{content.socialMediaDetails?.map((details, index) => {
													return (
														<div id="socialMediaIconGroupicons" key={index}>
															<div className=" fill-current ">
																<Image
																	alt={details?.image?.name || ''}
																	width={32}
																	height={32}
																	src={details?.image?.image?.asset?.url || ''}
																/>
															</div>
														</div>
													);
												})}
											</div>
										</div>
									</div>
								</div>
							)
						);
					})}
				</div>
				<div className="items-center pt-4 text-center lg:mb-16">
					<CtaWrapper.CTA className="para-3 lg:para-2 bg-primary-shade-1 h-[52px] w-[184px] rounded-lg py-1 px-4 tracking-wide text-white  md:py-2  md:px-8 lg:h-[64px] lg:w-[210px] lg:tracking-wider ">
						<p>{'Load More'}</p>
					</CtaWrapper.CTA>
				</div>
			</div>
		</section>
	);
};
export default MeetOurTeam;
