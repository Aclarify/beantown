import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HomePageContentProps } from 'pages';
import Image from 'next/image';

export default function Brands() {
	const { pageContent } =
		useContext<GlobalContextProps<HomePageContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const homeData = pageContent.home[0];
	const { clientsLogo, brandsTitle } = homeData;
	return (
		<section id="brand">
			<div className="flex  justify-center">
				<span className="text-xl md:text-2xl font-bold">{brandsTitle}</span>
			</div>
			<div className="group flex flex-nowrap overflow-x-auto space-x-4 md:space-x-10">
				{clientsLogo?.map((logo, index) => {
					return (
						logo && (
							<div
								key={index}
								className=" group-hover:scale-[0.55] hover:!scale-100 duration-500 flex w-[150px] h-[150px] md:w-[250px] md:h-[250] p-4"
							>
								<Image
									alt={logo?.image?.asset?.altText || ''}
									width={200}
									height={300}
									src={logo?.image?.asset?.url || ''}
								/>
							</div>
						)
					);
				})}
			</div>
		</section>
	);
}
