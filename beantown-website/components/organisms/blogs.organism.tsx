import React from 'react';
import Button from 'components/atoms/button.atom';
import Link from 'next/link';
import {
	ImageDescriptionButtonGroup as Blogs,
	Maybe,
} from '@typing/gql/graphql';
import BlogCard from './blog-card.organism';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	blogsTitle: string;
	blogsDescription: string;
	blogsButtonText: string;
	blogsButtonTextColour: string;
	blogsButtonBgColour: string;
	blogCards: Maybe<Array<Maybe<Blogs>>>;
}

const Blogs: React.FC<IProps> = (props) => {
	return (
		<section className="  pb-[1px] ">
			<div>
				<div className="title-5 lg:title-2 text-primary-black text-center">
					<h1>{props.blogsTitle}</h1>
				</div>
				<div className="para-4 lg:para-2 text-primary-shade-1 pt-4 pb-6 text-center">
					<p>{props.blogsDescription}</p>
				</div>
			</div>
			<div className=" no-scrollbar flex snap-x snap-mandatory flex-nowrap gap-4 overflow-x-auto pb-4  ">
				{props.blogCards?.map((blog, index) => {
					return (
						<div
							key={index}
							className="w-[250px] flex-none   snap-start   snap-always lg:w-1/3  "
						>
							<BlogCard
								blogName={blog?.name || ''}
								buttonText={blog?.button?.text || ''}
								blogDescription={blog?.description || ''}
								thumbnailSrc={blog?.image?.image?.asset?.url || ''}
								thumbnailAltText={blog?.image?.altText || ''}
							/>
						</div>
					);
				})}
			</div>
			<div className="items-center pt-4 text-center lg:mb-16">
				<Link href={'/'}>
					<Button
						fontColor={props.blogsButtonTextColour}
						bgColor={props.blogsButtonBgColour}
					>
						{props.blogsButtonText}
					</Button>
				</Link>
			</div>
		</section>
	);
};

export default Blogs;
