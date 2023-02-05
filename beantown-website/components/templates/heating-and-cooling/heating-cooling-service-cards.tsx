import React from 'react';

export default function HeatingCoolingServiceCard() {
	return (
		<section id="heatingCard ">
			<div className="mx-8 flex flex-col items-center text-center ">
				<p className="text-2xl font-bold leading-normal">
					heating & Cooling Services
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam.
				</p>
			</div>
			<div className="group grid lg:grid-cols-4 lg:grid-col-4 mx-8 px-8 items-center space-y-5 lg:space-x-5 ">
				<div className="group-hover:scale-[0.85] hover:!scale-100 duration-500 bg-[FFFFFF]  text-center space-y-2 py-8  items-center  shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
					{/* <Image src={cardImg1} alt={'card Image'}  width={100}
                height={100}/> */}
					<div className="ml-48 lg:ml-16  p-4 ">
						<img src="images/cooling-and-heating-service-page/service-cards/heating-service-card-image-installation.svg"></img>
					</div>
					<p>Installation</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam.
					</p>
				</div>
				<div className="group-hover:scale-[0.85] hover:!scale-100 duration-500 bg-[FFFFFF]  text-center space-y-2 py-8 items-center shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
					<div className="ml-48 lg:ml-16 p-4 ">
						<img src="images/cooling-and-heating-service-page/service-cards/heating-service-card-image-installation.svg"></img>
					</div>
					<p>Installation</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam.
					</p>
				</div>
				<div className="group-hover:scale-[0.85] hover:!scale-100 duration-500 bg-[FFFFFF]  text-center space-y-2 py-8 items-center shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
					<div className="ml-48 lg:ml-16  p-4 ">
						<img src="images/cooling-and-heating-service-page/service-cards/heating-service-card-image-installation.svg"></img>
					</div>
					<p>Installation</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam.
					</p>
				</div>
				<div className="group-hover:scale-[0.85] hover:!scale-100 duration-500 bg-[FFFFFF]  text-center space-y-2 py-8  items-center  shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
					<div className="ml-48 lg:ml-16 p-4 ">
						<img src="images/cooling-and-heating-service-page/service-cards/heating-service-card-image-installation.svg"></img>
					</div>
					<p>Installation</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam.
					</p>
				</div>
			</div>
		</section>
	);
}
