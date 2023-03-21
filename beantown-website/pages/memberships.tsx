import React, { useContext } from 'react';
import { Memberships, Nav, Footer } from '@typing/gql/graphql';
import Head from 'next/head';
import pageQuery from '@lib/queries/pages/get-memberships.query';
import WithGlobalContent, {
	generateGetStaticProps,
} from '../components/containers/global-content/global-content.container';
import { PageNames } from '@configs/client/pages/pages.config';
import MembershipsHeroSection from 'components/templates/memberships/hero/memberships-hero.section';
import MembershipsPageCTASection from 'components/templates/memberships/cta/memberships-cta.section';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { GlobalContext } from '@contexts/global/global.context';
import Header from 'components/organisms/nav';
import FooterSection from 'components/organisms/footer';
import CtaWrapper from 'components/molecules/cta-wrapper.molecule';
import MembershipsSelectionSection from '../components/templates/memberships/membership-selection/membership-selection.section';
import BookNowButton from 'components/atoms/book-now-button.atom';

export interface MembershipsContentProps {
	page: Memberships[];
	header: Nav[];
	footer: Footer[];
}

const getStaticProps = generateGetStaticProps<MembershipsContentProps>(
	pageQuery,
	PageNames.MEMBERSHIPS
);
export { getStaticProps };

const MembershipsServicePage: React.FC = (props) => {
	const { pageContent } =
		useContext<GlobalContextProps<MembershipsContentProps>>(GlobalContext);

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
		<div id="memberships" className="bg-primary-white-shade-1">
			<PageHead />
			<Header
				mobileBgColor="bg-primary-white-shade-1"
				fontColor="text-primary-shade-1"
				logoDesktop={logoDark?.image}
				logoMobile={logoDark?.image}
				content={headerData}
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
			<MembershipsHeroSection />
			<MembershipsSelectionSection />
			<MembershipsPageCTASection />
			<FooterSection logoDesktop={logoLight?.image} content={footerData} />
		</div>
	);
};

export default WithGlobalContent<MembershipsContentProps>(
	MembershipsServicePage
);
