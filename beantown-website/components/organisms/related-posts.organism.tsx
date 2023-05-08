import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { BlogPosts } from '@typing/gql/graphql';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BlogPostCard from './blog-post-card.organism';
import Animate from 'components/molecules/animate.molecule';
import { SCREEN_BREAKPOINTS } from '@typing/common/interfaces/devices.interface';
import useSearch from 'lib/hooks/useSearch.hook';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	currentBlogPost: BlogPosts;
}

const RelatedBlogPosts: React.FC<IProps> = ({ currentBlogPost }) => {
	const slider = React.useRef<Slider | null>(null);
	const tags =
		currentBlogPost.blogTags?.map((item) => item?.category || '') ?? [];
	const currentPostId = currentBlogPost._id || undefined;
	const { hits: relatedPosts } = useSearch('', 0, 9, tags, currentPostId);

	const previous = () => {
		if (slider.current) {
			slider.current.slickPrev();
		}
	};
	const next = () => {
		if (slider.current) {
			slider.current.slickNext();
		}
	};

	const settings = {
		dots: false,
		infinite: false,
		speed: 800,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		initialSlide: 0,
		variableWidth: false,
		focusOnSelect: true,
		useTransform: false,
		swipe: true,
		responsive: [
			{
				breakpoint: SCREEN_BREAKPOINTS.SM,
				settings: {
					slidesToShow: 1.1,
					slidesToScroll: 1,
					variableWidth: false,
				},
			},
			{
				breakpoint: SCREEN_BREAKPOINTS.MD,
				settings: {
					slidesToShow: 2.2,
					slidesToScroll: 1,
					variableWidth: false,
				},
			},
			{
				breakpoint: SCREEN_BREAKPOINTS.LG,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					variableWidth: false,
				},
			},
		],
	};

	if (!relatedPosts) {
		return null;
	}

	return (
		<div>
			<div className="mb-16 w-full">
				<div className="flex flex-row items-center justify-between">
					<Animate bottom>
						<h2 className="text-primary-black">Related Articles</h2>
					</Animate>

					<div className="flex space-x-2 md:space-x-6">
						<button
							onClick={previous}
							aria-label={'left-arrow'}
							className="text-primary-shade-1 h-10 w-16 rounded-full bg-white py-2 px-4 md:h-16 md:w-32 md:py-4 md:px-6 md:text-lg"
						>
							<FontAwesomeIcon icon={faArrowLeft} />
						</button>
						<button
							onClick={next}
							aria-label={'right-arrow'}
							className="bg-primary-shade-1 h-10 w-16 rounded-full px-4 py-2 text-white md:h-16 md:w-32 md:py-4 md:px-6 md:text-lg"
						>
							<FontAwesomeIcon icon={faArrowRight} />
						</button>
					</div>
				</div>
			</div>

			<div className="slider-wrapper w-full">
				<Slider ref={slider} {...settings}>
					{relatedPosts?.map((blogPost, index) => {
						return (
							<div className="w-1/3 px-3" key={index}>
								<BlogPostCard blogPost={blogPost} />
							</div>
						);
					})}
				</Slider>
			</div>
		</div>
	);
};

export default RelatedBlogPosts;
