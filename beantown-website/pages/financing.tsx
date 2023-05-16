import React, { useContext } from 'react';
import { Nav, Footer, Financing } from '@typing/gql/graphql';
import Head from 'next/head';
import pageQuery from '@lib/queries/pages/get-financing.query';
import WithGlobalContent, {
	generateGetStaticProps,
} from '../components/containers/global-content/global-content.container';
import { PageNames } from '@configs/client/pages/pages.config';
import Header from 'components/organisms/nav';
import FooterSection from 'components/organisms/footer';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { GlobalContext } from '@contexts/global/global.context';
import BookNowButton from 'components/atoms/book-now-button.atom';
import FinancingHeroSection from 'components/templates/financing/hero/financing-hero.section';
import AboutFinancingSection from 'components/templates/financing/about-financing/about-financing.section';
import FinancingCTASection from 'components/templates/financing/cta/financing-cta.section';
import FinancingFaqSection from 'components/templates/financing/faq/financing-faq.section';
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
				<title>{pageTitle}</title>
				<meta name="description" content={metaDescription || ''} />
			</Head>
		);
	};
	return (
		<div id="financing" className="bg-primary-white-shade-1">
			<PageHead />
			<Header
				fontColor="text-white"
				logoDesktop={logoLight?.image}
				logoMobile={logoDark?.image}
				content={headerData}
				mobileBgColor="bg-secondary-shade-3"
				mobileButtonText={headerData.headerButton?.text || ''}
			>
				<div className=" hidden lg:flex lg:justify-end ">
					<BookNowButton
						fontColor="text-primary-shade-1"
						bgColor="bg-white"
						buttonStyle="headerButton"
					>
						{headerData.headerButton?.text}
					</BookNowButton>
				</div>
			</Header>
			<FinancingHeroSection />
			<AboutFinancingSection />	
			<FinancingFaqSection/>		
			<FinancingCTASection />
			<FooterSection logoDesktop={logoLight?.image} content={footerData} />
		</div>
	);
};
export default WithGlobalContent<FinancingContentProps>(FinancingPage);
