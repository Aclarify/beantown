import React from 'react';

import BlogCard from './blog-card.organism';
import CtaWrapper from 'components/molecules/cta-wrapper.molecule';
import { getExcerpt } from 'utils/helper';
import Animate from 'components/molecules/animate.molecule';
import clsx from 'clsx';
import { buttonHoverStyle } from '@lib/styles/button.style';
import useSearchByCategory from 'lib/hooks/useSearchByCategory';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	blogsTitle: string;
	blogsDescription: string;
	blogsButtonText: string;
	blogsButtonTextColour: string;
	blogsButtonBgColour: string;
	categories: string[];
}

const Blogs: React.FC<IProps> = (props) => {
	const { hits: blogPosts } = useSearchByCategory(
		0,
		3,
		props.categories,
		undefined
	);

	return (
		<Animate cascade>
			<section className="relative z-10 pb-[3rem] lg:pb-1 lg:pt-[3em] ">
				<div className=" flex flex-col justify-center text-center align-middle  ">
					<div className="  text-primary-shade-1 px-[1em] pt-[2em] text-center md:mx-40 lg:px-[1em] lg:pt-0 xl:px-[2em] 2xl:px-[4em]">
						<Animate bottom>
							<h2>{props.blogsTitle}</h2>
						</Animate>
					</div>
					<div className=" text-primary-shade-1 pt-6 pb-10  text-center md:px-[1em]  md:pt-10 md:pb-16 xl:px-[8em] 2xl:px-[7em]">
						<Animate>
							<p>{props.blogsDescription}</p>
						</Animate>
					</div>
				</div>
				<Animate className="pb-6 sm:pb-10">
					<div className="no-scrollbar  flex snap-x snap-mandatory flex-nowrap gap-4 overflow-x-auto ">
						{blogPosts?.map((blog, index) => {
							return (
								<div
									key={index}
									className="w-[250px] flex-none snap-start snap-always md:w-[32%]  "
								>
									<BlogCard
										blogName={blog?.blogTitle || ''}
										blogSlug={blog?.blogSlug?.current || ''}
										buttonText={'Read Article'}
										blogDescription={getExcerpt(blog?.blogContentRaw)}
										thumbnailSrc={blog?.blogImage?.asset?.url || ''}
										thumbnailAltText={blog?.blogImage?.asset?.altText || ''}
									/>
								</div>
							);
						})}
					</div>
				</Animate>

				<div className="items-center text-center">
					<CtaWrapper.CTA
						className={clsx(
							`${props.blogsButtonTextColour} ${props.blogsButtonBgColour}
					 button`,
							buttonHoverStyle
						)}
					>
						<p className={clsx('font-normal')}>{props.blogsButtonText}</p>
					</CtaWrapper.CTA>
				</div>
			</section>
		</Animate>
	);
};

export default Blogs;
