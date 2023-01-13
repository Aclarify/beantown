import React from 'react';

interface Props {
	title: string;
	buttonText: string;
	hRef: string;
}
const ServiceCard: React.FC<Props> = (props) => {
	return (
		<>
			<div className="group-hover:scale-[0.55]  hover:!scale-100 duration-500 cursor-pointer border rounded-lg flex flex-col  items-center gap-4 bg-[#FFFFFF] my-4">
				<a>
					<img className="" src="images/home_page/servicesCardImage1.svg" />
				</a>
				<h1>{props.title}</h1>
				<button className="border rounded-lg text-white text-xs  bg-[#15284C] p-2 ">
					{props.buttonText}
				</button>
			</div>
		</>
	);
};
export default ServiceCard;
