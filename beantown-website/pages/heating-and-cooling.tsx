import React from 'react';
import { HeatingAndCooling, Nav, Footer } from '@typing/gql/graphql';
import Head from 'next/head';
import pageQuery from '@lib/queries/pages/get-heating-and-cooling.query';
import WithGlobalContent, {
	generateGetStaticProps,
} from '../components/containers/global-content/global-content.container';
import { PageNames } from '@configs/client/pages/pages.config';
import HeatingCoolingPageHero from 'components/templates/heating-and-cooling/heating-cooling-hero';
import MassSave from 'components/templates/heating-and-cooling/heating-cooling-mass-save';

export interface HeatingCoolingContentProps {
	page: HeatingAndCooling[];
	header: Nav[];
	footer: Footer[];
}

const PageHead = () => {
	return (
		<Head>
			{/* TODO to fetch from CMS */}
			<title>Heating &amp; Cooling Services</title>
			<meta
				name="description"
				content="Beantown Services is a full-service cleaning company that provides residential and commercial cleaning services in the Boston area."
			/>
			<link rel="icon" href="/favicon.ico" />
		</Head>
	);
};
const getStaticProps = generateGetStaticProps<HeatingCoolingContentProps>(
	pageQuery,
	PageNames.HEATINGCOOLING
);
export { getStaticProps };

const HeatingAndCoolingServices: React.FC = (props) => {
	return (
		<section className="bg-primary-white-shade-1">
			<HeatingCoolingPageHero />
			<MassSave />
			{/* <HeatingCoolingServiceCard />
			<HeatingCoolingProductsCards />
			
			<FooterCtaHeatingCooling />
			<Brands />
			<Blogs />
			<Faq /> */}
		</section>
	);
};

export default WithGlobalContent<HeatingCoolingContentProps>(
	HeatingAndCoolingServices
);
