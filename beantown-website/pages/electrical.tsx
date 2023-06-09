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
import Header from 'components/organisms/nav';
import FooterSection from 'components/organisms/footer';
import React, { useContext } from 'react';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { GlobalContext } from '@contexts/global/global.context';
import CtaWrapper from 'components/molecules/cta-wrapper.molecule';
import Link from 'next/link';
import AboutElectricalServiceSection from 'components/templates/electrical/about-the-service/electrical-about.section';
import BookNowButton from 'components/atoms/book-now-button.atom';

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

const ElectricalServicesPage: React.FC = (props) => {
	const { pageContent } =
		useContext<GlobalContextProps<ElectricalContentProps>>(GlobalContext);

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
	return (
		<section id="electrical-services" className="bg-primary-white-shade-1">
			<PageHead />
			<Header
				fontColor="text-primary-shade-1"
				logoDesktop={logoDark?.image}
				logoMobile={logoDark?.image}
				content={headerData}
				mobileBgColor="bg-service-yellow-bg"
				mobileButtonText={headerData.headerButton?.text || ''}
			>
				<div className=" hidden lg:flex lg:justify-end ">
					<BookNowButton
						fontColor="text-white"
						bgColor="bg-primary-shade-1"
						buttonStyle="headerButton"
					>
						{headerData.headerButton?.text}
					</BookNowButton>
				</div>
			</Header>
			<ElectricalHeroSection />
			<AboutElectricalServiceSection />
			<ElectricalPageCTASection />
			<ElectricalBlogsSection />
			<ElectricalFaqSection />
			<FooterSection logoDesktop={logoLight?.image} content={footerData} />
		</section>
	);
};
export default WithGlobalContent<ElectricalContentProps>(
	ElectricalServicesPage
);
