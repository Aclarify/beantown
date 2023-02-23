import React from 'react';
import { OtherServices, Nav, Footer } from '@typing/gql/graphql';
import Head from 'next/head';
import pageQuery from '@lib/queries/pages/get-plumbing.query';
import WithGlobalContent, {
	generateGetStaticProps,
} from '../components/containers/global-content/global-content.container';
import { PageNames } from '@configs/client/pages/pages.config';
import PlumbingServicesList from 'components/templates/plumbing/plumbing-services-list';
import PlumbingHeroContent from 'components/templates/plumbing/hero/plumbing-hero.content';
import AboutPlumbingServiceSection from 'components/templates/plumbing/about-the-service/plumbing-about.section';

export interface PlumbingContentProps {
	page: OtherServices[];
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
const getStaticProps = generateGetStaticProps<PlumbingContentProps>(
	pageQuery,
	PageNames.PLUMBING
);
export { getStaticProps };

const PlumbingServicesPage: React.FC = (props) => {
	return (
		<div id="plumbing-services" className="bg-primary-white-shade-1">
			<PageHead />
			<PlumbingHeroContent />
			<AboutPlumbingServiceSection />
		</div>
	);
};
export default WithGlobalContent<PlumbingContentProps>(PlumbingServicesPage);
