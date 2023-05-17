import React, { useContext } from 'react';
import Image from 'next/image';
import CMSImageWrapper from 'components/molecules/cms-image-wrapper.molecule';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { CommunityContentProps } from 'temporary-ondeck-pages/community';
import Link from 'next/link';
import StaticImageWrapper from 'components/molecules/static-image-wrapper.molecule';
import Animate from 'components/molecules/animate.molecule';

const SocialMediaFeedContent = () => {
	const { pageContent } =
		useContext<GlobalContextProps<CommunityContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { socialMediaFeed, mediaFeedTitle } = pageData;
	const totalRecords: any = socialMediaFeed?.length;
	const halfWayIndex = Math.ceil(totalRecords / 2);
	const firstHalfOfArray = socialMediaFeed?.slice(0, halfWayIndex);
	const secondHalfOfArray = socialMediaFeed?.slice(halfWayIndex);

	return (
		<div
			id="SocialMediaSliderContainer"
			className="3xl:mb-[-35rem] mb-[1rem] h-auto   w-full p-6 lg:mb-[-14rem] xl:mb-[-17rem] 2xl:mb-[-23rem]"
		>
			<h1 className="mb-12 text-center  text-2xl lg:text-[40px]">
				{mediaFeedTitle}
			</h1>

			<div
				id="media-feed-container"
				className=" flex h-auto w-full flex-col gap-6  "
			>
				<div className="no-scrollbar flex  h-auto w-full snap-x snap-mandatory  flex-nowrap gap-2  overflow-x-auto  md:gap-8">
					{firstHalfOfArray?.map((data, index) => {
						return (
							<div
								key={index}
								className="group relative  h-[200px]  w-[281px]  flex-none snap-center snap-always rounded-xl md:h-[360px] md:w-[480px] md:rounded-3xl "
							>
								<CMSImageWrapper
									image={data?.feedImage || null}
									altText="social-media-feed-image"
									style={{
										width: '100%',
										height: '100%',
										objectFit: 'contain',
									}}
								/>

								<div
									id="socialMediaIconGroupMobile"
									className="bg-primary-shade-1/80 invisible absolute   inset-0  z-10 flex  items-center justify-center rounded-lg border backdrop-blur-sm group-hover:visible  group-hover:delay-300  md:rounded-2xl  "
								>
									<div className=" item-center flex  gap-2  text-xl">
										{data?.fbURL && (
											<div className="">
												<Link href={data?.fbURL || ''}>
													<Image
														src={
															'/images/community/social-media-icons/facebook.svg'
														}
														alt={''}
														width={40}
														height={40}
													/>
												</Link>
											</div>
										)}
										{data?.instaURL && (
											<div className="">
												<Link href={data?.instaURL || ''}>
													<Image
														src={
															'/images/community/social-media-icons/instagram.svg'
														}
														alt={''}
														width={40}
														height={40}
													/>
												</Link>
											</div>
										)}
										{data?.twitterURL && (
											<div className="">
												<Link href={data?.twitterURL || ''}>
													<Image
														src={
															'/images/community/social-media-icons/twitter.svg'
														}
														alt={''}
														width={40}
														height={40}
													/>
												</Link>
											</div>
										)}
									</div>
								</div>
							</div>
						);
					})}
				</div>

				<div className="no-scrollbar flex h-auto  w-full snap-x snap-mandatory  flex-nowrap  gap-2  overflow-x-auto md:gap-8 ">
					{secondHalfOfArray?.map((data, index) => {
						return (
							<div
								key={index}
								className="group relative h-[200px] w-[281px]  flex-none   snap-center snap-always rounded-xl  md:h-[360px]  md:w-[480px] md:rounded-3xl "
							>
								<CMSImageWrapper
									image={data?.feedImage || null}
									altText="social-media-feed-image"
									style={{
										width: '100%',
										height: '100%',
										objectFit: 'contain',
									}}
								/>

								<div
									id="socialMediaIconGroupMobile"
									className="bg-primary-shade-1/80  container  invisible  absolute inset-0  z-10 flex items-center justify-center rounded-lg  border  backdrop-blur-sm group-hover:visible  group-hover:delay-300  md:rounded-2xl  "
								>
									<div className=" flex gap-2 text-xl">
										{data?.fbURL && (
											<div className="">
												<Link href={data?.fbURL || ''}>
													<Image
														src={
															'/images/community/social-media-icons/facebook.svg'
														}
														alt={''}
														width={40}
														height={40}
													/>
												</Link>
											</div>
										)}
										{data?.instaURL && (
											<div className="">
												<Link href={data?.instaURL || ''}>
													<Image
														src={
															'/images/community/social-media-icons/instagram.svg'
														}
														alt={''}
														width={40}
														height={40}
													/>
												</Link>
											</div>
										)}
										{data?.twitterURL && (
											<div className="">
												<Link href={data?.twitterURL || ''}>
													<Image
														src={
															'/images/community/social-media-icons/twitter.svg'
														}
														alt={''}
														width={40}
														height={40}
													/>
												</Link>
											</div>
										)}
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default SocialMediaFeedContent;
