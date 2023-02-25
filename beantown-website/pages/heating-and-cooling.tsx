import React, { useContext } from 'react';
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
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { GlobalContext } from '@contexts/global/global.context';
import Header from 'components/organisms/nav';
import FooterSection from 'components/organisms/footer';
import CtaWrapper from 'components/molecules/cta-wrapper.molecule';

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

const HeatingCoolingServicePage: React.FC = (props) => {
	const { pageContent } =
		useContext<GlobalContextProps<HeatingCoolingContentProps>>(GlobalContext);

	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const headerData = pageContent.header[0];
	const footerData = pageContent.footer[0];
	const { logoDesktop, logoMobile } = pageData;
	return (
		<div id="heating-services" className="bg-primary-white-shade-1">
			<PageHead />
			<Header
				fontColor="text-white"
				logoDesktop={logoDesktop?.image}
				logoMobile={logoMobile?.image}
				content={headerData}
			>
				<div className=" hidden lg:flex lg:justify-end ">
					<CtaWrapper.CTA className="text-primary-shade-1 para-3 h-[48px] w-[139px] rounded-lg bg-white py-1 px-4  tracking-wide  md:py-2 md:px-8 lg:tracking-wider ">
						<p>{headerData.headerButton?.text}</p>
					</CtaWrapper.CTA>
				</div>
			</Header>
			<HeatingCoolingHeroSection />
			<HeatingCoolingHeroServicesSection />
			<HeatingCoolingProductsSection />
			<HeatingCoolingMassSaveSection />
			<HeatingCoolingPageCTASection />
			<HeatingCoolingBrandsSection />
			<HeatingCoolingBlogsSection />
			<HeatingCoolingFaqSection />
			<FooterSection
				logoDesktop={logoDesktop?.image}
				logoMobile={logoMobile?.image}
				content={footerData}
			/>
		</div>
	);
};

export default WithGlobalContent<HeatingCoolingContentProps>(
	HeatingCoolingServicePage
);
