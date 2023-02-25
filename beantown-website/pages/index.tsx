import Head from 'next/head';
import HomeFaq from '../components/templates/home/faq/faq.section';
import FooterCta from '../components/templates/home/footer-cta-home';
import React, { useContext } from 'react';
import ServiceAreas from '../components/templates/home/service-areas/service-areas';
import Testimonials from '../components/templates/home/testimonials/testimonials';
import WhyUs from '../components/templates/home/why-us/why-us';
import Services from '../components/templates/home/services/services';
import HomeHero from '../components/templates/home/home-hero';
import { Nav, Home, Footer } from '@typing/gql/graphql';
import pageQuery from '@lib/queries/pages/get-home.query';
import WithGlobalContent, {
	generateGetStaticProps,
} from '../components/containers/global-content/global-content.container';
import { PageNames } from '@configs/client/pages/pages.config';
import HomeBlogs from '../components/templates/home/blogs/blogs';
import HomeBrands from '../components/templates/home/brands';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { GlobalContext } from '@contexts/global/global.context';
import Header from 'components/organisms/nav';
import FooterSection from 'components/organisms/footer';

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

const HomePage: React.FC = (props) => {
	const { pageContent } =
		useContext<GlobalContextProps<HomePageContentProps>>(GlobalContext);

	if (!pageContent) {
		return null;
	}
	const homeData = pageContent.page[0];
	const headerData = pageContent.header[0];
	const footerData = pageContent.footer[0];
	const { logoDesktop, logoMobile } = homeData;
	return (
		<section className="bg-secondary-shade-3">
			<PageHead />
			<Header
				fontColor="text-white"
				logoDesktop={logoDesktop?.image}
				logoMobile={logoMobile?.image}
				content={headerData}
			/>
			<HomeHero />
			<Services />
			<WhyUs />
			<Testimonials />
			<ServiceAreas />
			<HomeBlogs />
			<HomeFaq />
			<HomeBrands />
			<FooterCta />
			<FooterSection
				logoDesktop={logoDesktop?.image}
				logoMobile={logoMobile?.image}
				content={footerData}
			/>
		</section>
	);
};

export default WithGlobalContent<HomePageContentProps>(HomePage);
