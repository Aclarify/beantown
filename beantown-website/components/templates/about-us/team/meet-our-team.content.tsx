import { GlobalContext } from "@contexts/global/global.context";
import { GlobalContextProps } from "@typing/common/interfaces/contexts.interface";
import Button from "components/atoms/button.atom";
import CMSImageWrapper from "components/molecules/cms-image-wrapper.molecule";
import CtaWrapper from "components/molecules/cta-wrapper.molecule";
import ContentWrapper from "components/organisms/content-wrapper.organism";
import Image from "next/image";
import { AboutUsContentProps } from "pages/about-us";
import { useContext } from "react";

const MeetOurTeam =()=>{
	const { pageContent } =
		useContext<GlobalContextProps<AboutUsContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { teamTitle, teamDescription, memberCards} =
		pageData;
    return (
			<section id="meet-our-team-section">
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
									{
										teamDescription
									}
								</p>
							</ContentWrapper.Description>
						</ContentWrapper>
					</div>
					<div
						id="cards-container"
						className=" grid grid-cols-2 gap-4 lg:grid-cols-3 "
					>
						{memberCards?.map((content,index)=>{
							return (
								content && (
									<div
										key={index}
										id="card"
										className="flex h-[240] w-[480] flex-col space-x-4 rounded-lg bg-white shadow-[rgba(29,_39,_87,_0.08)_4px_8px_60px] md:flex md:flex-row "
									>
										{/* <div className="flex h-full items-center">
											<CMSImageWrapper
												altText={content.profilePicture?.asset?.altText || ''}
												image={content.profilePicture || null}
											/>
										</div> */}
										<div>
											<Image
												src={content.profilePicture?.asset?.url || ''}
												height={'200'}
												width={'200'}
												alt={content.profilePicture?.asset?.altText || ''}
												className=" rounded-lg "
											/>
										</div>

										<div
											id="profile-Info"
											className=" flex flex-col items-center justify-center space-y-2 md:space-y-10"
										>
											<div id="name" className="flex flex-col">
												<span>{content?.memberName}</span>
											</div>
											<div id="Designation">
												<span>{content?.memberDesignation}</span>
											</div>
											<div className="flex">
												{content.socialMediaDetails?.map((details, index) => {
													return (
														<div id="socialMediaIconGroupicons" key={index}>
															<div>
																<Image
																	alt={details?.image?.name || ''}
																	width={26}
																	height={26}
																	src={details?.image?.image?.asset?.url || ''}
																/>
															</div>
														</div>
													);
												})}
											</div>
										</div>
									</div>
								)
							);}
							
								)}
						
						
					</div>
					<div className="items-center pt-4 text-center lg:mb-16">
						<CtaWrapper.CTA className="para-3 lg:para-2 bg-primary-shade-1 h-[52px] w-[184px] rounded-lg text-white py-1 px-4 tracking-wide  md:py-2  md:px-8 lg:h-[64px] lg:w-[210px] lg:tracking-wider ">
							<p>{'Load More'}</p>
						</CtaWrapper.CTA>
					</div>
				</div>
			</section>
		);
}
export default MeetOurTeam;