import { useContext } from 'react';
import React from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HomePageContentProps } from 'pages';
import Brands from 'components/organisms/brands.organism';

export default function HomeBrands() {
	const { pageContent } =
		useContext<GlobalContextProps<HomePageContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const homeData = pageContent.page[0];
	const { clientsLogo, brandsTitle } = homeData;

	let clonedLogoArray = clientsLogo ? [...clientsLogo] : [];
	if (clientsLogo && clientsLogo?.length < 5) {
		clonedLogoArray = [...clientsLogo, ...clientsLogo];
	}
	return (
		<>
			<section
				id="brand-desktop"
				//		className=" 3xl:-mb-[6em] 4xl:-mb-[8em] relative top-[-5em] z-10 lg:-mb-[3em] xl:-mb-[6em]"
				className="  relative  z-10 "
			>
				{clonedLogoArray && (
					<Brands
						brandsTitle={brandsTitle || ''}
						logoArray={clonedLogoArray || []}
					></Brands>
				)}
			</section>
		</>
	);
}
