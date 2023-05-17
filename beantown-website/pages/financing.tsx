import React, { useContext } from 'react';
import { Nav, Footer, Financing } from '@typing/gql/graphql';
import Head from 'next/head';
import pageQuery from '@lib/queries/pages/get-financing.query';
import WithGlobalContent, {
	generateGetStaticProps,
} from '../components/containers/global-content/global-content.container';
import { PageNames } from '@configs/client/pages/pages.config';
import FooterSection from 'components/organisms/footer';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { GlobalContext } from '@contexts/global/global.context';
import FinancingHeroSection from 'components/templates/financing/hero/financing-hero.section';
import AboutFinancingSection from 'components/templates/financing/about-financing/about-financing.section';
import FinancingServiceAreas from 'components/templates/financing/service-areas/service-areas';
import FinancingTestimonials from 'components/templates/financing/testimonials/financing-testimonials';
import FinancingCTASection from 'components/templates/financing/cta/financing-cta.section';
import { withFeatureFlag } from 'components/templates/under-construction/with-feature-flag';
import FeatureFlagDarkHeader from 'components/organisms/feature-flag-dark-header.organism';

export interface FinancingContentProps {
	page: Financing[];
	header: Nav[];
	footer: Footer[];
}

const getStaticProps = generateGetStaticProps<FinancingContentProps>(
	pageQuery,
	PageNames.FINANCING
);
export { getStaticProps };
const FinancingPage: React.FC = (props) => {
	const { pageContent } =
		useContext<GlobalContextProps<FinancingContentProps>>(GlobalContext);

	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const headerData = pageContent.header[0];
	const footerData = pageContent.footer[0];
	const { logoLight, logoDark, pageTitle, metaDescription } = pageData;
	const PageHead = () => {
		return (
			<Head>
				{/* TODO to fetch from CMS */}
				<title>{pageTitle}</title>
				<meta name="description" content={metaDescription || ''} />
			</Head>
		);
	};

	const flagValue = process.env.NEXT_PUBLIC_FINANCING_PAGE;

	const FlaggedContent = withFeatureFlag(
		() => (
			<>
				<FinancingHeroSection />
				<AboutFinancingSection />
				<FinancingServiceAreas />
				<FinancingTestimonials />
				<FinancingCTASection />
			</>
		),
		flagValue
	);

	return (
		<div id="financing" className="bg-primary-white-shade-1">
			<PageHead />
			<FeatureFlagDarkHeader
				{...{
					flagValue,
					headerData,
					logoLight,
					logoDark,
				}}
			/>
			<FlaggedContent />
			<FooterSection logoDesktop={logoLight?.image} content={footerData} />
		</div>
	);
};
export default WithGlobalContent<FinancingContentProps>(FinancingPage);
