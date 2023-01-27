import Header from '../components/organisms/nav';
import Brands from '../components/templates/home/brands';
import Faq from '../components/templates/home/faq/faq';
import FooterComponent from '../components/organisms/footer';
import FooterCta from '../components/templates/home/footer-cta-home';
import Blogs from '../components/templates/home/blogs/blogs';
import React from 'react';
import ServiceAreas from '../components/templates/home/service-areas/service-areas';
import Testimonials from '../components/templates/testimonials/testimonials';
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

const getStaticProps = generateGetStaticProps<HomePageContentProps>(
	pageQuery,
	PageNames.HOME
);
export { getStaticProps };

const HomePage: React.FC = () => {
	return (
		<>
			<Header />
			<HomeHero />
			<Services />
			<WhyUs />
			<Testimonials />
			<div
				style={{
					WebkitMaskImage: "url('./service-area-wave-mask.svg')",
					WebkitMaskSize: 'cover',
				}}
			>
				<ServiceAreas />
				<Blogs />
			</div>
			<Faq></Faq>
			<Brands />
			<FooterCta />
			<FooterComponent />
		</>
	);
};

export default WithGlobalContent<HomePageContentProps>(HomePage);
