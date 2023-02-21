import Head from 'next/head';
import HomeFaq from '../components/templates/home/faq/faq.section';
import FooterCta from '../components/templates/home/footer-cta-home';
import React from 'react';
import ServiceAreas from '../components/templates/home/service-areas/service-areas';
import Testimonials from '../components/templates/home/testimonials/testimonials';
import WhyUs from '../components/templates/home/why-us/why-us';
import Services from '../components/templates/home/services/services';
import HomeHero from '../components/templates/home/home-hero';
import { Nav, Footer, Home } from '@typing/gql/graphql';
import pageQuery from '@lib/queries/pages/get-home.query';
import WithGlobalContent, {
	generateGetStaticProps,
} from '../components/containers/global-content/global-content.container';
import { PageNames } from '@configs/client/pages/pages.config';
import HomeBlogs from '../components/templates/home/blogs/blogs';
import HomeBrands from '../components/templates/home/brands';

export interface HomePageContentProps {
	page: Home[];
	header: Nav[];
	footer: Footer[];
}

const PageHead = () => {
	return (
		<Head>
			{/* TODO to fetch from CMS */}
			<title>Home - Beantown Services</title>
			<meta
				name="description"
				content="Beantown Services is a full-service cleaning company that provides residential and commercial cleaning services in the Boston area."
			/>
			<link rel="icon" href="/favicon.ico" />
		</Head>
	);
};
const getStaticProps = generateGetStaticProps<HomePageContentProps>(
	pageQuery,
	PageNames.HOME
);
export { getStaticProps };

const HomePage: React.FC = () => {
	return (
		<section className="bg-secondary-shade-3">
			<PageHead />
			<HomeHero />
			<Services />
			<WhyUs />
			<Testimonials />
			<ServiceAreas />
			<HomeBlogs />
			<HomeFaq />
			<HomeBrands />
			<FooterCta />
		</section>
	);
};

export default WithGlobalContent<HomePageContentProps>(HomePage);
