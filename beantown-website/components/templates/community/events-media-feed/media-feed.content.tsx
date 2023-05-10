import React, { useContext } from 'react';
import Image from 'next/image';
import CMSImageWrapper from 'components/molecules/cms-image-wrapper.molecule';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { CommunityContentProps } from 'pages/community';
import Link from 'next/link';

const SocialMediaFeedContent = () => {
		
	const { pageContent } =
		useContext<GlobalContextProps<CommunityContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { socialMediaFeed } = pageData;
	

	return (
		<div id="SocialMediaSliderContainer" className="mb-40  w-full p-6">
			<h1 className="mb-20 text-center  text-2xl lg:text-[40px]">
				{'Social Media Feed'}
			</h1>

			<div id="media-feed-container" className=" flex w-full flex-col gap-8 ">
				<div className="no-scrollbar  flex w-full snap-x snap-mandatory flex-nowrap gap-8  overflow-x-auto  ">
					{socialMediaFeed?.map((data, index) => {
						return (
							<div
								key={index}
								className="group relative  h-[200px]  w-[281px]  flex-none snap-end snap-always rounded-2xl  md:h-[360px] md:w-[480px] "
							>
								<div className="">
									<CMSImageWrapper
										image={data?.feedImage || null}
										altText="social-media-feed-image"
										style={{
											width: '100%',
											height: '100%',
											objectFit: 'contain',
										}}
									/>
								</div>

								<div
									id="socialMediaIconGroupMobile"
									className="bg-primary-shade-1/80    invisible  absolute inset-0  z-10 flex items-center justify-center rounded-3xl  border backdrop-blur-sm  group-hover:visible  "
								>
									<div className=" inset-0 flex  text-xl">
										<div className=" m-8 flex items-center rounded-full bg-white p-8 ">
											<Link href={''}>
												<Image
													src={
														'/images/community/social-media-icons/instagram.svg'
													}
													alt={''}
													width={30}
													height={30}
												/>
											</Link>
										</div>
										<div className="m-8 flex items-center rounded-full bg-white p-8 ">
											<Link href={''}>
												<Image
													src={
														'/images/community/social-media-icons/twitter.svg'
													}
													alt={''}
													width={30}
													height={30}
												/>
											</Link>
										</div>
										<div className=" m-8 flex items-center rounded-full bg-white p-8">
											<Link href={''}>
												<Image
													src={
														'/images/community/social-media-icons/instagram.svg'
													}
													alt={''}
													width={30}
													height={30}
												/>
											</Link>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>

				<div className="no-scrollbar  flex  snap-x snap-mandatory flex-nowrap gap-8 overflow-x-auto ">
					{socialMediaFeed?.map((data, index) => {
						return (
							<div
								key={index}
								className="group relative h-[200px] w-[281px]  flex-none   snap-center snap-always rounded-2xl  md:h-[360px] md:w-[480px] "
							>
								<div className="">
									<CMSImageWrapper
										image={data?.feedImage || null}
										altText="social-media-feed-image"
										style={{
											width: '100%',
											height: '100%',
											objectFit: 'contain',
										}}
									/>
								</div>

								<div
									id="socialMediaIconGroupMobile"
									className="bg-primary-shade-1/80  container  invisible  absolute inset-0  z-10 flex items-center justify-center rounded-3xl  border backdrop-blur-sm  group-hover:visible  "
								>
									<div className=" inset-0 flex   text-xl">
										<div className=" m-8 flex items-center rounded-full bg-white p-8 ">
											<Link href={''}>
												<Image
													src={
														'/images/community/social-media-icons/twitter.svg'
													}
													alt={''}
													width={38}
													height={38}
												/>
											</Link>
										</div>
										<div className="m-8 flex items-center rounded-full bg-white p-8">
											<Link href={''}>
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
										<div className=" m-8 flex items-center rounded-full bg-white p-8">
											<Link href={''}>
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
