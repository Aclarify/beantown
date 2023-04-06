import { GlobalContext } from '@contexts/global/global.context';
import useWindowDimensions from '@lib/hooks/use-window-dimensions.hook';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import CMSImageWrapper from 'components/molecules/cms-image-wrapper.molecule';
import CtaWrapper from 'components/molecules/cta-wrapper.molecule';
import ContentWrapper from 'components/organisms/content-wrapper.organism';
import { AboutUsContentProps } from 'pages/about-us';
import { SCREEN_BREAKPOINTS } from '@typing/common/interfaces/devices.interface';
import { useContext, useEffect, useMemo, useState } from 'react';
import Animate from 'components/molecules/animate.molecule';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Link from 'next/link';
import clsx from 'clsx';
import { buttonHoverStyle } from '@lib/styles/button.style';

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
				return;
			}
			setCardsToShow(memberCardsToDisplay.length + cardsToShow);
		}
	};

	const getShouldShowLoadMore = () =>
		memberCardsToDisplay &&
		memberCards &&
		memberCardsToDisplay.length < memberCards.length;

	return (
		<section id="meet-our-team-section" className="lg:pb-[2em]">
			<div id="section-container">
				<div id="title-container" className="flex flex-col">
					<ContentWrapper>
						<ContentWrapper.Title className=" mb-3 lg:mb-6">
							<Animate bottom>
								<h2 className=" text-primary-shade-1 text-center">
									{teamTitle}
								</h2>
							</Animate>
						</ContentWrapper.Title>
						<ContentWrapper.Description>
							<Animate className="mb-8">
								<p className=" text-primary-shade-1 justify-center text-center md:mx-40 lg:mb-14">
									{teamDescription}
								</p>
							</Animate>
						</ContentWrapper.Description>
					</ContentWrapper>
				</div>

				<div
					id="cards-container"
					className=" grid grid-cols-2 justify-items-center gap-x-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-2 2xl:grid-cols-3"
				>
					{memberCardsToDisplay?.map((content, index) => {
						return (
							content && (
								<Animate key={index}>
									<div
										key={index}
										id="card"
										className={clsx(
											'm-2',
											'min-h-[240px]',
											'w-[160px]',
											'rounded-lg',
											'bg-white',
											'px-3',
											'shadow-[rgba(29,_39,_87,_0.08)_4px_8px_60px]',
											'lg:min-h-[200px]',
											'lg:w-[420px]',
											'lg:px-4',
											'flex',
											'flex-col',
											'lg:flex-row'
										)}
									>
										<div className="relative flex items-center justify-center fill-current py-3 lg:py-4">
											<div
												className={clsx(
													'relative h-[140px] w-[140px] overflow-hidden rounded-lg lg:h-[160px] lg:w-[160px]'
												)}
											>
												<CMSImageWrapper
													altText={content.profilePicture?.asset?.altText || ''}
													image={content.profilePicture || null}
													style={{
														objectFit: 'cover',
														objectPosition: 'top center',
													}}
												/>
											</div>
										</div>

										<div
											id="profile-Info"
											className="flex flex-col items-center justify-center pb-2 lg:items-start lg:justify-evenly lg:py-8 lg:pl-8"
										>
											<h5 className=" text-primary-black ">
												{content?.memberName}
											</h5>
											<p className=" text-gray-shade-1 block !font-thin">
												{content?.memberDesignation || 'Team Member'}
											</p>

											<div className="flex items-center space-x-6  p-2">
												<Link
													href={'mailto:' + content?.memberEmail}
													target="_blank"
													className="z-20 transition-opacity duration-150 ease-in-out hover:opacity-70"
												>
													<FontAwesomeIcon
														icon={faEnvelope as IconProp}
														size="xl"
													/>
												</Link>

												<Link
													href={content?.memberLinkedIn || 'www.linkedin.com'}
													target="_blank"
													className="z-20 transition-opacity duration-150 ease-in-out hover:opacity-70"
												>
													<FontAwesomeIcon
														icon={faLinkedin as IconProp}
														size="xl"
													/>
												</Link>
											</div>
										</div>
									</div>
								</Animate>
							)
						);
					})}
				</div>

				<div className="mt-8 items-center text-center lg:mt-[60px] ">
					{getShouldShowLoadMore() && (
						<CtaWrapper.CTA
							onClick={onLoadMore}
							className={clsx(
								'bg-primary-shade-1 button text-white',
								buttonHoverStyle
							)}
						>
							<p>{'Load More'}</p>
						</CtaWrapper.CTA>
					)}
				</div>
			</div>
		</section>
	);
};
export default MeetOurTeam;
