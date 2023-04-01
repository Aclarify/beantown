import clsx from 'clsx';
import React from 'react';

interface Props {
	content: string;
	limit: number;
	onShowMore: () => void;
}

const ReadMore: React.FC<Props> = (props) => {
	return (
		<>
			<span>
				{props.content.length < props.limit
					? props.content
					: props.content.substring(0, props.limit)}
			</span>
			<span onClick={props.onShowMore}>
				{props.content.length > props.limit ? (
					<>
						<span className={clsx()}> ...</span>
						<p className={clsx('text-blue-600', 'pt-2', 'text-center')}>
							Read More
						</p>
					</>
				) : (
					''
				)}
			</span>
		</>
	);
};
export default ReadMore;
