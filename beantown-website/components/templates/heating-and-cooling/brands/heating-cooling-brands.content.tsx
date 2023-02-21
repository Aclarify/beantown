import { useContext } from 'react';
import React from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HeatingCoolingContentProps } from 'pages/heating-and-cooling';
import Brands from 'components/organisms/brands.organism';

const HeatingCoolingBrandsContent = () => {
	const { pageContent } =
		useContext<GlobalContextProps<HeatingCoolingContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { clientsLogo, brandsTitle } = pageData;
	let clonedLogoArray = clientsLogo ? [...clientsLogo] : [];
	if (clientsLogo && clientsLogo?.length < 5) {
		clonedLogoArray = [...clientsLogo, ...clientsLogo];
	}
	return (
		<>
			{clonedLogoArray && (
				<Brands
					brandsTitle={brandsTitle || ''}
					logoArray={clonedLogoArray || []}
					brandsBgColour={'bg-primary-white-shade-1' || ''}
				></Brands>
			)}
		</>
	);
};

export default HeatingCoolingBrandsContent;
