import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HeatingCoolingContentProps } from 'pages/heating-and-cooling';
import ProductCard from './heating-cooling-product-card';

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
				<div className=" flex flex-nowrap overflow-x-auto  mx-8 px-8 items-center space-y-5 lg:space-x-5 ">
					{productsGroup?.map((productInfo ,index)=>{
						return (
							<ProductCard
								key={index}
								title={productInfo?.titleText || ''}
								thumbnailSrc={productInfo?.image?.asset?.url || ''}
								thumbnailAltText={'Heating and Cooling Product Images'}
								description={productInfo?.description || ''}
							/>
						);
					})}
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
