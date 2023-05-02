import React from 'react';
import Image from 'next/image';
import { Categories, Maybe } from '@typing/gql/graphql';
import Animate from 'components/molecules/animate.molecule';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	categories: Categories[];
	onExcludeCategory: (category: Categories) => void;
}

const BlogCategoryList: React.FC<IProps> = ({
	categories,
	onExcludeCategory,
}) => {
	return (
		<div className="mb-8 flex w-full flex-wrap gap-4 md:mb-16">
			{categories?.map((categoryTag, index) => (
				<Animate key={index} bottom>
					<div
						key={index}
						className="bg-primary-shade-3 para text-primary-black flex gap-2 rounded-lg py-2 pl-6 pr-2 leading-[28px]"
					>
						{categoryTag?.name}
						<button
							className="ml-1 p-1 px-2"
							onClick={() => onExcludeCategory(categoryTag)}
						>
							<Image
								src={'/images/blogs/icons/icon-close.svg'}
								alt={'close-icon'}
								width={10}
								height={10}
							/>
						</button>
					</div>
				</Animate>
			))}
		</div>
	);
};

export default BlogCategoryList;
