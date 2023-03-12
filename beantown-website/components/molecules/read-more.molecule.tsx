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

			<span className="cursor-pointer text-blue-600" onClick={props.onShowMore}>
				{props.content.length > props.limit ? '... Show More' : ''}
			</span>
		</>
	);
};
export default ReadMore;
