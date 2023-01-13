import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HomePageContentProps } from 'pages';

export default function Brands() {
	const { pageContent } =
		useContext<GlobalContextProps<HomePageContentProps>>(GlobalContext);
	if (!pageContent) {
		return;
	}
	const homeData = pageContent.allHome[0];
	const { clientsLogo } = homeData;
	return (
		<section id="brand">
			<div className="flex  justify-center">
				<span className="text-xl md:text-4xl font-bold">
					Proud To Represent
				</span>
			</div>
			<div className="group flex flex-nowrap overflow-x-auto space-x-4 md:space-x-4">
				<div className=" group-hover:scale-[0.55] hover:!scale-100 duration-500  flex-none w-[150px] h-[150px] md:w-[250px] md:h-[250] p-4">
					<img src="images/home_page/brands/mitsubishi.svg" />
				</div>
				<div className=" group-hover:scale-[0.55] hover:!scale-100 duration-500  flex-none w-[150px] h-[150px] md:w-[250px] md:h-[250] p-4">
					<img src="images/home_page/brands/lennox.svg" />
				</div>
				<div className=" group-hover:scale-[0.55] hover:!scale-100 duration-500 flex-none w-[150px] h-[150px] md:w-[250px] md:h-[250] p-4">
					<img src="images/home_page/brands/mitsubishi.svg" />
				</div>
				<div className=" group-hover:scale-[0.55] hover:!scale-100 duration-500 flex-none w-[150px] h-[150px] md:w-[250px] md:h-[250] p-4">
					<img src="images/home_page/brands/lennox.svg" />
				</div>
			</div>
		</section>
	);
}
