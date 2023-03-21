import { GlobalContext } from '@contexts/global/global.context';
import useWindowDimensions from '@lib/hooks/use-window-dimensions.hook';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import CMSImageWrapper from 'components/molecules/cms-image-wrapper.molecule';
import CtaWrapper from 'components/molecules/cta-wrapper.molecule';
import ContentWrapper from 'components/organisms/content-wrapper.organism';
import Image from 'next/image';
import { AboutUsContentProps } from 'pages/about-us';
import { SCREEN_BREAKPOINTS } from '@typing/common/interfaces/devices.interface';
import { useContext, useEffect, useState } from 'react';
import { toastBuilder } from 'components/molecules/toast.molecule';
import Animate from 'components/molecules/animate.molecule';

const MeetOurTeam = () => {
	const { pageContent } =
		useContext<GlobalContextProps<AboutUsContentProps>>(GlobalContext);
	const [cardsToShow, setCardsToShow] = useState(0);
	const { width } = useWindowDimensions();

	useEffect(() => {
		// If width is less than 640px, show 8 cards
		// width is between 640px and 768px, show 9 cards
		// width is between 768px and 1024px, show 8 cards
		// width is between 1024px and 1280px, show 8 cards
		// width is greater than 1280px, show 9 cards
		if (width < 640) {
			setCardsToShow(8);
		} else if (width >= 640 && width < SCREEN_BREAKPOINTS.SM) {
			setCardsToShow(9);
		} else if (
			width >= SCREEN_BREAKPOINTS.SM &&
			width < SCREEN_BREAKPOINTS.MD
		) {
			setCardsToShow(8);
		} else if (width >= SCREEN_BREAKPOINTS.MD && width < 1280) {
			setCardsToShow(8);
		} else if (width >= 1280) {
			setCardsToShow(9);
		}
	}, [width, setCardsToShow]);

	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { teamTitle, teamDescription, memberCards } = pageData;

	const memberCardsToDisplay = memberCards?.slice(0, cardsToShow);

	const onLoadMore = () => {
		if (memberCardsToDisplay && memberCards) {
			// Check if there are more cards to display
			if (memberCardsToDisplay.length >= memberCards.length) {
				toastBuilder('Thats all our team there', 'default');
				return;
			}
			setCardsToShow(memberCardsToDisplay.length + cardsToShow);
		}
	};

	return (
		<section id="meet-our-team-section" className="lg:pb-[2em]">
			<div id="section-container">
				<div id="title-container" className="flex flex-col">
					<ContentWrapper>
						<ContentWrapper.Title className=" mb-3 lg:mb-6">
							<Animate bottom>
								<h2 className=" text-primary-shade-1 mt-10 text-center">
									{teamTitle}
								</h2>
							</Animate>
						</ContentWrapper.Title>
						<ContentWrapper.Description>
							<Animate>
								<p className=" text-primary-shade-1 mb-8 justify-center text-center md:mx-40 lg:mb-14">
									{teamDescription}
								</p>
							</Animate>
						</ContentWrapper.Description>
					</ContentWrapper>
				</div>
				
				
					<div
						id="cards-container"
						className=" grid grid-cols-2 justify-items-center gap-x-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-3"
					>
						{memberCardsToDisplay?.map((content, index) => {
							return (
								content && (
									<Animate  cascade>
										<div
											key={index}
											id="card"
											className="m-2 w-[160px] rounded-lg bg-white  px-3 shadow-[rgba(29,_39,_87,_0.08)_4px_8px_60px]  lg:w-full lg:px-4 "
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
												</div>

												<div
													id="profile-Info"
													className="flex flex-col items-center justify-center pb-2 lg:items-start lg:justify-evenly lg:py-8 lg:pl-8"
												>
													<h4 className=" text-primary-black ">
														{content?.memberName}
													</h4>
													<p className=" text-gray-shade-1 block !font-thin">
														{content?.memberDesignation}
													</p>
													<div className="flex">
														{content.socialMediaDetails?.map((details, index) => {
															return (
																<div id="socialMediaIconGroupicons" key={index}>
																	<div className=" fill-current cursor-pointer ">
																		<Image
																			alt={details?.image?.name || ''}
																			width={42}
																			height={42}
																			src={
																				details?.image?.image?.asset?.url || ''
																			}
																			
																		/>
																	</div>
																</div>
															);
														})}
													</div>
												</div>
											</div>
										</div>
									</Animate>
								)
							);
						})}
					</div>
				
				<div className="mt-8 items-center text-center lg:mt-[60px] ">
					<CtaWrapper.CTA
						onClick={onLoadMore}
						className=" bg-primary-shade-1   button text-white"
					>
						<p>{'Load More'}</p>
					</CtaWrapper.CTA>
				</div>
			</div>
		</section>
	);
};
export default MeetOurTeam;
