import { PageNames } from '@configs/client/pages/pages.config';
import { Nav, Footer, Electrical } from '@typing/gql/graphql';
import WithGlobalContent, {
	generateGetStaticProps,
} from 'components/containers/global-content/global-content.container';
import Head from 'next/head';
import pageQuery from '@lib/queries/pages/get-electrical.query';
import ElectricalHeroSection from 'components/templates/electrical/hero/electrical-hero.section';
import ElectricalRepairsInstallationUpgradesSection from 'components/templates/electrical/repairs-installation-upgrades/electrical-repairs-installation-upgrades.section';
import ElectricalRIUMoreSection from 'components/templates/electrical/services/electrical-RIU-more.section';
import ElectricalPageCTASection from 'components/templates/electrical/cta/electrical-cta.section';
import ElectricalBlogsSection from 'components/templates/electrical/blog/electrical-blogs.section';

export interface ElectricalContentProps {
	page: Electrical[];
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
			<ElectricalRepairsInstallationUpgradesSection />
			<ElectricalRIUMoreSection />
			<ElectricalPageCTASection />
			<ElectricalBlogsSection/>
		</section>
	);
};
export default WithGlobalContent<ElectricalContentProps>(
	ElectricalServicesPage
);
