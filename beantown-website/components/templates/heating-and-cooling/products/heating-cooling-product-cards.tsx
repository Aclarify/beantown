import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HeatingCoolingContentProps } from 'pages/heating-and-cooling';

export default function HeatingCoolingProductsCards() {
	const { pageContent } =
		useContext<GlobalContextProps<HeatingCoolingContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { productsTitle,productsDescription,productsGroup } = pageData;
	return (
		<section id="heatingCoolingProductsCards">
			<div className="flex  items-center justify-between mx-16">
				<div>
					<p className="text-2xl font-bold">{productsTitle}</p>
				</div>

				<div className="hidden  lg:flex gap-4 pt-4 ">
					<button className="bg-red-100 py-2 px-4 rounded-full w-16 ">
						<FontAwesomeIcon icon={faArrowLeft} />
					</button>
					<button className=" py-2 px-4 rounded-full w-16 text-white bg-red-900">
						<FontAwesomeIcon icon={faArrowRight} />
					</button>
				</div>
			</div>

			<div>
				<div className="flex flex-nowrap overflow-x-auto  mx-8 px-8 items-center space-y-5 lg:space-x-5 ">
					<div className="flex-none w-[250px] p-4 bg-[FCF7F7]  text-center space-y-2   items-center  shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
						
						<div className="ml-20 lg:ml-16  p-4 FFFFFF">
							<img src="images/cooling-and-heating-service-page/products/products1.svg"></img>
						</div>
						<p>Installation</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam.
						</p>
					</div>
					 <div className="flex-none w-[250px] p-4 bg-[FCF7F7]  text-center space-y-2  items-center shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
						<div className="ml-20 lg:ml-16  p-4 FFFFFF">
							<img src="images/cooling-and-heating-service-page/products/products1.svg"></img>
						</div>
						<p>Installation</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam.
						</p>
					</div>
					<div className="flex-none w-[250px] p-4 bg-[FCF7F7]  text-center space-y-2  items-center shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
						<div className="ml-20 lg:ml-16  p-4 FFFFFF">
							<img src="images/cooling-and-heating-service-page/products/products1.svg"></img>
						</div>
						<p>Installation</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam.
						</p>
					</div>
					<div className="flex-none w-[250px] p-4 bg-[FCF7F7]  text-center space-y-2   items-center  shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
						<div className="ml-20 lg:ml-16  p-4 FFFFFF">
							<img src="images/cooling-and-heating-service-page/products/products1.svg"></img>
						</div>
						<p>Installation</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam.
						</p>
					</div> 
				</div>
			</div>

			<div className="lg:hidden flex justify-center gap-4 pt-4 ">
				<button className="bg-red-100 py-2 px-4 rounded-full w-16">
					<FontAwesomeIcon icon={faArrowLeft} />
				</button>
				<button className=" py-2 px-4 rounded-full w-16 text-white bg-red-900">
					<FontAwesomeIcon icon={faArrowRight} />
				</button>
			</div>
		</section>
	);
}
