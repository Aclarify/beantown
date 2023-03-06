import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
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
						<ContentWrapper.Title className=" mb-3 lg:mb-6">
							<h1 className="title-5 lg:title-2 text-primary-shade-1 mt-10 text-center">
								{teamTitle}
							</h1>
						</ContentWrapper.Title>
						<ContentWrapper.Description>
							<p className="para-4 lg:subtitle-4 text-primary-shade-1 mb-8 justify-center text-center md:mx-40 lg:mb-14">
								{teamDescription}
							</p>
						</ContentWrapper.Description>
					</ContentWrapper>
				</div>
				<div
					id="cards-container"
<<<<<<< HEAD
					//className=" container mx-auto flex      flex-wrap items-center justify-center  space-x-4  space-y-4 "
					className=" container grid grid-cols-2 mx-auto  sm:flex sm:flex-wrap items-center justify-center  space-x-4  space-y-4 "
=======
					className=" grid grid-cols-2 justify-items-center gap-x-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-3"
>>>>>>> a643156dd30e8cc3ff526c8fa8c6906a50913a82
				>
					{memberCards?.map((content, index) => {
						return (
							content && (
								<div
									key={index}
									id="card"
<<<<<<< HEAD
									className="flex flex-col place-items-center h-full    rounded-lg  bg-white p-1 shadow-[rgba(29,_39,_87,_0.08)_4px_8px_60px] sm:flex sm:flex-row  sm:p-2 "
=======
									className="m-2 w-[160px] rounded-lg bg-white  px-3 shadow-[rgba(29,_39,_87,_0.08)_4px_8px_60px]  lg:w-full lg:px-4 "
>>>>>>> a643156dd30e8cc3ff526c8fa8c6906a50913a82
								>
									<div
										id="profileInfo-wrapper"
										className="flex  flex-col  lg:flex-row  "
									>
										<div className="rounded-lg fill-current py-3 lg:w-[200px]  lg:py-4 ">
											<CMSImageWrapper
												altText={content.profilePicture?.asset?.altText || ''}
												image={content.profilePicture || null}
											/>
<<<<<<< HEAD
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
=======
>>>>>>> a643156dd30e8cc3ff526c8fa8c6906a50913a82
										</div>

										<div
											id="profile-Info"
											className="flex flex-col items-center justify-center pb-2 lg:items-start lg:justify-evenly lg:py-8 lg:pl-8"
										>
											<h1 className="title-6 lg:title-3 text-primary-black ">
												{content?.memberName}
											</h1>
											<span className="subtitle-5 lg:subtitle-4 text-gray-shade-1 block !font-thin">
												{content?.memberDesignation}
											</span>
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
				<div className="mt-8 items-center text-center lg:mt-[60px] ">
					<CtaWrapper.CTA className="para-3 lg:para-2 bg-primary-shade-1 h-[52px] w-[184px] rounded-lg py-1 px-4 tracking-wide text-white  md:py-2  md:px-8 lg:h-[64px] lg:w-[210px] lg:tracking-wider ">
						<p>{'Load More'}</p>
					</CtaWrapper.CTA>
				</div>
			</div>
		</section>
	);
};
export default MeetOurTeam;
