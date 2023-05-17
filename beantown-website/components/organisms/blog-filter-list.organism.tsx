import React from 'react';
import Image from 'next/image';
import Animate from 'components/molecules/animate.molecule';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	filters: string[];
	onRemoveTerm: (filterTerm: string) => void;
}

const BlogFilters: React.FC<IProps> = ({ filters, onRemoveTerm }) => {
	return (
		<div className="mb-8 flex w-full flex-wrap gap-4 md:mb-16">
			{filters?.map((filterTerm, index) => (
				<Animate key={index} bottom>
					<div
						key={index}
						className="bg-primary-shade-3 para text-primary-black flex gap-2 rounded-lg py-2 pl-6 pr-2 leading-[28px]"
					>
						{filterTerm}
						<button
							className="ml-1 p-1 px-2"
							onClick={() => onRemoveTerm(filterTerm)}
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

export default BlogFilters;
