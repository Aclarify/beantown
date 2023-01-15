import RichText from 'components/molecules/rich-text.molecule';
import React from 'react';

interface Props {
	title: string;
	description: string;
}
const WhyUsCard: React.FC<Props> = (props) => {
	return (
		<>
			<div className="flex border rounded-lg bg-[#F5F5F5]">
				<img className="p-1" src="images/home_page/quality.svg" />
				<div className="p-2">
					<h1 className="text-2xl font-bold">{props.title}</h1>
					<RichText value={props.description} />
				</div>
			</div>
		</>
	);
};
export default WhyUsCard;
