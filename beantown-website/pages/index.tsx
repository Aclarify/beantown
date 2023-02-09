import Head from 'next/head';

import Header from '../components/organisms/nav';
import Brands from '../components/templates/home/brands';
import Faq from '../components/templates/home/faq/faq';
import FooterComponent from '../components/organisms/footer';
import FooterCta from '../components/templates/home/footer-cta-home';
import Blogs from '../components/templates/home/blogs/blogs';
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

export interface HomePageContentProps {
	home: Home[];
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
		<div className="overflow-hidden">
			<PageHead />
			<Header />
			<HomeHero />
			<Services />
			<WhyUs />
			<Testimonials />
			<div
				id="desktop-view"
				className="hidden lg:block "
				style={{
					WebkitMaskImage: "url('./service-area-wave.svg')",
					WebkitMaskSize: 'cover',
					maskImage: "url('./service-area-wave.svg')",
					maskSize: 'cover',
				}}
			>
				<ServiceAreas />
				<Blogs />
			</div>
			<div
				id="mobile-view"
				className="block lg:hidden"
				style={{
					WebkitMaskImage: "url('./service-area-wave-mobile.svg')",
					WebkitMaskSize: 'cover',
					maskImage: "url('./service-area-wave-mobile.svg')",
					maskSize: 'cover',
				}}
			>
				<ServiceAreas />
				<Blogs />
			</div>
			<Faq></Faq>

			<Brands />

			<FooterCta />
			<FooterComponent />
		</div>
	);
};

export default WithGlobalContent<HomePageContentProps>(HomePage);
