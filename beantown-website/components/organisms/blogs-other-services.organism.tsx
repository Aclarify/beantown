import React from 'react';

import {
	Blog,
	ImageDescriptionButtonGroup as Blogs,
	Maybe,
} from '@typing/gql/graphql';
import BlogCard from './blog-card.organism';
import CtaWrapper from 'components/molecules/cta-wrapper.molecule';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	blogsTitle: string;
	blogsDescription: string;
	blogsButtonText: string;
	blogsButtonTextColour: string;
	blogsButtonBgColour: string;
	blogCards: Maybe<Array<Maybe<Blog>>>;
}

const BlogsOther: React.FC<IProps> = (props) => {
	return (
		<section className="relative z-10 pb-[3rem] lg:pb-1 -mt-4">
			<div className=" flex flex-col justify-center text-center align-middle md:mx-48">
				<div className=" title-5 lg:title-2 text-primary-shade-1 pt-[2em] text-center lg:pt-0 ">
					<h1>{props.blogsTitle}</h1>
				</div>
				<div className=" para-4 lg:para-2 text-primary-shade-1 pt-4 pb-6 text-center px-4 ">
					<p>{props.blogsDescription}</p>
				</div>
			</div>
			<div className=" mt-2 no-scrollbar flex snap-x snap-mandatory flex-nowrap gap-4 overflow-x-auto pb-4  ">
				{props.blogCards?.map((blog, index) => {
					return (
						<div
							key={index}
							className="w-[250px] flex-none  snap-start  snap-always md:w-[32%]  "
						>
							<BlogCard
								blogName={blog?.blogTitle || ''}
								buttonText={blog?.button?.text || ''}
								blogDescription={blog?.description || ''}
								thumbnailSrc={blog?.blogImage?.image?.asset?.url || ''}
								thumbnailAltText={blog?.blogImage?.altText || ''}
							/>
						</div>
					);
				})}
			</div>
			<div className="items-center pt-4 text-center lg:mb-16">
				<CtaWrapper.CTA
					className={`${props.blogsButtonTextColour} ${props.blogsButtonBgColour} 
					para-3 lg:para-2 h-[52px] w-[184px] rounded-lg py-1 px-4 tracking-wide md:py-2  md:px-8  lg:h-[64px] lg:w-[210px] lg:tracking-wider`}
				>
					<p>{props.blogsButtonText}</p>
				</CtaWrapper.CTA>
			</div>
		</section>
	);
};

export default BlogsOther;
