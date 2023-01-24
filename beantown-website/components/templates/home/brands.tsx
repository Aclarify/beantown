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
		<section
			id="brand"
			className="bg-white "
			style={{
				WebkitMaskImage: "url('./brand-top-wave-mask.svg')",
				WebkitMaskSize: 'cover',
			}}
		>
			<div className="flex  justify-center pt-10">
				<span className="title-6 md:title-3 text-primary-black p-4 m-4">
					{brandsTitle}
				</span>
			</div>
			<div className="group flex flex-nowrap justify-center overflow-x-auto  md:space-x-2 p-4 ">
				{clientsLogo?.map((logo, index) => {
					return (
						logo &&
						logo.image && (
							<div
								key={index}
								className=" group-hover:scale-[0.55] hover:!scale-100 duration-500 flex w-[100px] h-[100px] md:w-[250px] md:h-[250] md:p-4"
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
