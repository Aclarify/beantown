import React from 'react';
import { HeatingAndCooling, Nav, Footer } from '@typing/gql/graphql';
import Head from 'next/head';
import pageQuery from '@lib/queries/pages/get-heating-and-cooling.query';
import WithGlobalContent, {
	generateGetStaticProps,
} from '../components/containers/global-content/global-content.container';
import { PageNames } from '@configs/client/pages/pages.config';
import HeatingCoolingHeroSection from 'components/templates/heating-and-cooling/hero/heating-cooling-hero.section';
import HeatingCoolingHeroServicesSection from 'components/templates/heating-and-cooling/services/heating-cooling-services.section';
import HeatingCoolingProductsSection from 'components/templates/heating-and-cooling/products/heating-cooling-products.section';
import HeatingCoolingBlogsSection from 'components/templates/heating-and-cooling/blogs/heating-cooling-blogs.section';
import HeatingCoolingMassSaveSection from 'components/templates/heating-and-cooling/mass-save/heating-cooling-mass-save.section';
import HeatingCoolingBrandsSection from 'components/templates/heating-and-cooling/brands/heating-cooling-brands.section';
import HeatingCoolingPageCTASection from 'components/templates/heating-and-cooling/cta/heating-cooling-cta.section';
import HeatingCoolingFaqSection from 'components/templates/heating-and-cooling/faq/heating-cooling-faqs.section';

export interface HeatingCoolingContentProps {
	page: HeatingAndCooling[];
	header: Nav[];
	footer: Footer[];
}

const PageHead = () => {
	return (
		<Head>
			{/* TODO to fetch from CMS */}
			<title>Plumbing Services</title>
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

const PlumbingServicePage: React.FC = (props) => {
	return (
		<div id="heating-services" className="bg-primary-white-shade-1">
			<PageHead />
			<HeatingCoolingHeroSection />
			<HeatingCoolingHeroServicesSection />
			<HeatingCoolingProductsSection />
			<HeatingCoolingMassSaveSection />
			<HeatingCoolingPageCTASection />
			<HeatingCoolingBrandsSection />
			<HeatingCoolingBlogsSection />
			<HeatingCoolingFaqSection />
		</div>
	);
};

export default WithGlobalContent<HeatingCoolingContentProps>(
	PlumbingServicePage
);
