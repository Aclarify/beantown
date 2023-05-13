import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { BlogPostContentProps } from 'pages/blog/[slug]';
import ContentWrapper from 'components/organisms/content-wrapper.organism';
import Animate from 'components/molecules/animate.molecule';
import Image from 'next/image';
import MaskedImageWithBackgroundVector from 'components/organisms/masked-image-with-blob.organism';
import { SCREEN_BREAKPOINTS } from '@typing/common/interfaces/devices.interface';
import useWindowDimensions from 'lib/hooks/use-window-dimensions.hook';
import { formatDate } from 'utils/helper';
import RelatedBlogPosts from 'components/organisms/related-posts.organism';
import { toastBuilder } from 'components/molecules/toast.molecule';
import PostTextContent from 'components/molecules/post-text-content.molecule';

const PostContent = () => {
	const { pageContent } =
		useContext<GlobalContextProps<BlogPostContentProps>>(GlobalContext);
	const { width } = useWindowDimensions();

	if (!pageContent) {
		return null;
	}

	const contentData = pageContent.content[0];
	const { blogImage, blogTitle, blogContentRaw, blogTags, views, publishedAt } =
		contentData;

	const handleShareButtonClick = async () => {
		const currentUrl = window.location.href;

		if (navigator.share) {
			try {
				// Use the share() method to open a sharing dialog
				await navigator.share({
					title: document.title,
					text: 'Check out this blog post',
					url: currentUrl,
				});
			} catch (error) {
				console.error('Error sharing:', error);
			}
		} else {
			try {
				// Fallback to copying the shareable link to clipboard
				await navigator.clipboard.writeText(currentUrl);
				toastBuilder('Shareable link copied to clipboard!', 'success');
			} catch (error) {
				console.error('Error copying shareable link to clipboard:', error);
			}
		}
	};

	return (
		<div
			id="section-wrapper"
			className="z-20 mb-10 flex flex-col overflow-hidden pt-24 pb-20  sm:gap-y-24  sm:pt-32 lg:pt-40 "
		>
			<div className="image-wrapper 3xl:max-h-[960px] 3xl:min-h-[720px] max-h-[300px] w-full sm:max-h-[256px] sm:min-h-[250px] md:max-h-[300px] md:min-h-[300px] lg:max-h-[500px] lg:min-h-[500px] xl:max-h-[580px]">
				<MaskedImageWithBackgroundVector
					className="h-full w-full rounded-3xl object-cover"
					imageURL={blogImage?.asset?.url || ''}
					imgAltText={blogImage?.asset?.altText || ''}
					width={1000}
					height={1000}
					minHeight={
						width > SCREEN_BREAKPOINTS.LG
							? 650
							: width > SCREEN_BREAKPOINTS.MD
							? 500
							: width > SCREEN_BREAKPOINTS.SM
							? 480
							: width > 450
							? 400
							: width > 380
							? 200
							: 180
					}
					maxHeight={
						width > SCREEN_BREAKPOINTS.MD
							? 580
							: width > SCREEN_BREAKPOINTS.SM
							? 260
							: 260
					}
					maskImg={
						width > SCREEN_BREAKPOINTS.SM
							? '/images/blog-post/blog-image-mask.svg'
							: '/images/blog-post/blog-image-mask-mobile.svg'
					}
					maskPosition="top"
					bgImg={''}
				/>
			</div>
			<div className="mt-4 rounded-xl bg-white py-16 px-5 text-center md:mt-8 lg:rounded-3xl lg:px-20 2xl:mt-12">
				<ContentWrapper>
					<ContentWrapper.Title className="text-left ">
						<Animate bottom>
							<h2 className="text-primary-black ">{blogTitle}</h2>
						</Animate>

						<Animate bottom>
							<div className="mt-4 mb-16 flex w-full flex-wrap gap-4">
								{blogTags?.map((categoryTag, index) =>
									categoryTag?.name ? (
										<p
											key={index}
											className="bg-secondary-shade-3 rich-text text-primary-black rounded-lg py-2 px-6 font-light"
										>
											{categoryTag?.name}
										</p>
									) : null
								)}
								<p className="bg-secondary-shade-3 rich-text text-primary-black flex items-center gap-2 rounded-lg py-2 px-6 font-light">
									<Image
										src={'/images/blog-post/icons/calendar.svg'}
										alt={'calendar-icon'}
										width={25}
										height={25}
										className="h-[18px] w-[18px] sm:h-[20px] sm:w-[20px] lg:h-[25px] lg:w-[25px]"
									/>
									Published on: {formatDate(publishedAt)}
								</p>
								<p className="bg-secondary-shade-3 rich-text text-primary-black flex items-center gap-2 rounded-lg py-2 px-6 font-light">
									<Image
										src={'/images/blog-post/icons/eye.svg'}
										alt={'eye-icon'}
										width={25}
										height={25}
										className="h-[18px] w-[18px] sm:h-[20px] sm:w-[20px] lg:h-[25px] lg:w-[25px]"
									/>
									{views || 0}
								</p>
								<button
									onClick={handleShareButtonClick}
									className="bg-primary-shade-1 rich-text flex items-center gap-2 rounded-lg py-2 px-6 font-light text-white"
								>
									<Image
										src={'/images/blog-post/icons/share.svg'}
										alt={'share-icon'}
										width={25}
										height={25}
										className="h-[18px] w-[18px] sm:h-[20px] sm:w-[20px] lg:h-[25px] lg:w-[25px]"
									/>
									Share
								</button>
							</div>
						</Animate>
					</ContentWrapper.Title>
					<ContentWrapper.Description className="text-primary-shade-1 text-left">
						<PostTextContent value={blogContentRaw} />
					</ContentWrapper.Description>
				</ContentWrapper>
			</div>

			<div className="mt-20 md:mt-32">
				<RelatedBlogPosts currentBlogPost={contentData} />
			</div>
		</div>
	);
};
export default PostContent;
