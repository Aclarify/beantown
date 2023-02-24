import { PageNames } from '@configs/client/pages/pages.config';
import { Nav, Footer, OtherServices } from '@typing/gql/graphql';
import WithGlobalContent, {
	generateGetStaticProps,
} from 'components/containers/global-content/global-content.container';
import Head from 'next/head';
import pageQuery from '@lib/queries/pages/get-electrical.query';
import ElectricalHeroSection from 'components/templates/electrical/hero/electrical-hero.section';
import ElectricalPageCTASection from 'components/templates/electrical/cta/electrical-cta.section';
import ElectricalBlogsSection from 'components/templates/electrical/blog/electrical-blogs.section';
import ElectricalFaqSection from 'components/templates/electrical/faq/electrical-faqs.section';
import AboutPlumbingServiceSection from 'components/templates/electrical/about-the-service/electrical-about.section';

export interface ElectricalContentProps {
	page: OtherServices[];
	header: Nav[];
	footer: Footer[];
}
const getStaticProps = generateGetStaticProps<ElectricalContentProps>(
	pageQuery,
	PageNames.ELECTRICAL
);
export { getStaticProps };
const PageHead = () => {
	return (
		<Head>
			<title>Electrical Services</title>
			<meta
				name="description"
				content="Beantown Services is a full-service cleaning company that provides residential and commercial cleaning services in the Boston area."
			/>
			<link rel="icon" href="/favicon.ico" />
		</Head>
	);
};

const ElectricalServicesPage: React.FC = (props) => {
	return (
		<section id="electrical-services" className="bg-primary-white-shade-1">
			<PageHead />
			<ElectricalHeroSection />
			<AboutPlumbingServiceSection/>
			<ElectricalPageCTASection />
			<ElectricalBlogsSection />
			<ElectricalFaqSection />
		</section>
	);
};
export default WithGlobalContent<ElectricalContentProps>(
	ElectricalServicesPage
);
