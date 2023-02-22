import { PageNames } from "@configs/client/pages/pages.config";
import { Nav, Footer, HeatingAndCooling } from "@typing/gql/graphql";
import WithGlobalContent, { generateGetStaticProps } from "components/containers/global-content/global-content.container";
import Head from "next/head"
import { FC } from "react";
import { HeatingCoolingContentProps } from "./heating-and-cooling";
import pageQuery from '@lib/queries/pages/get-electrical.query';
import ElectricalHeroSection from "components/templates/electrical/hero/electrical-hero.section";
import ElectricalRepairsInstallationUpgradesSection from "components/templates/electrical/repairs-installation-upgrades/electrical-repairs-installation-upgrades.section";
import ElectricalRIUList from "components/templates/electrical/services/electrical-RIU-more.content";

export interface ElectricalContentProps {
	page: HeatingAndCooling[];  
	header: Nav[];
	footer: Footer[];
}
const getStaticProps = generateGetStaticProps<ElectricalContentProps>(
	pageQuery,
	PageNames.ELECTRICAL
);
export { getStaticProps };
const PageHead =()=>{
	return (
		<Head>
			<title>Electrical Services</title>
			<meta
				name="description"
				content="Beantown Services is a full-service cleaning company that provides residential and commercial cleaning services in the Boston area."
			/>
			<link rel="icon" href="/favicon.ico"/>
		</Head>
	);
}

const ElectricalServicesPage: React.FC = (props) => {
	return (
		<section id="electrical-services" className="bg-primary-white-shade-1">
			<PageHead />
			<ElectricalHeroSection />
			<ElectricalRepairsInstallationUpgradesSection />
			<ElectricalRIUList />
		</section>
	);
}
    export default WithGlobalContent<HeatingCoolingContentProps>(
			ElectricalServicesPage
		);
	 ;



