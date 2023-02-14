import React from 'react';
import HeatingCoolingServiceCard from '../components/templates/heating-and-cooling/heating-cooling-service-cards';
import HeatingCoolingProductsCards from '../components/templates/heating-and-cooling/heating-cooling-product-cards';
import Nav from 'components/organisms/nav';

export default function CoolingandHeating() {
	return (
		<>
			
			<HeatingCoolingServiceCard />
			<HeatingCoolingProductsCards />
			
		</>
	);
}
