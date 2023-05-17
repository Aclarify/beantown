import React, { useContext } from 'react';
import {
	Nav,
	Footer,
	Booknow as BookNow,
	PrivacyPolicy,
} from '@typing/gql/graphql';
import Head from 'next/head';
import pageQuery from '@lib/queries/pages/get-privacy-policy.query';
import WithGlobalContent, {
	generateGetStaticProps,
} from '../components/containers/global-content/global-content.container';
import { PageNames } from '@configs/client/pages/pages.config';
import FooterSection from 'components/organisms/footer';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { GlobalContext } from '@contexts/global/global.context';
import PrivacyPolicySection from 'components/templates/privacy-policy/policy-content/privacy-policy.section';
import Header from 'components/organisms/nav';
import BookNowButton from 'components/atoms/book-now-button.atom';
import PrivacyPolicyHeroSection from 'components/templates/privacy-policy/hero/privacy-policy-hero.section';

export interface PrivacyPolicyContentProps {
	page: PrivacyPolicy[];
	header: Nav[];
	footer: Footer[];
}
const getStaticProps = generateGetStaticProps<PrivacyPolicyContentProps>(
	pageQuery,
	PageNames.PRIVACYPOLICY
);
export { getStaticProps };

const PrivacyPolicyPage: React.FC = (props) => {
	const { pageContent } =
		useContext<GlobalContextProps<PrivacyPolicyContentProps>>(GlobalContext);

	if (!pageContent) {
		return null;
	}
	const pageData: any = pageContent.page[0];
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
		<div id="privacy-policy" className="bg-secondary-shade-3">
			<PageHead />
			<Header
				fontColor="text-white"
				logoDesktop={logoLight?.image}
				logoMobile={logoLight?.image}
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
			<PrivacyPolicyHeroSection />
			<PrivacyPolicySection />
			<FooterSection
				logoDesktop={logoLight?.image || ''}
				content={footerData}
			/>
		</div>
	);
};
export default WithGlobalContent<PrivacyPolicyContentProps>(PrivacyPolicyPage);
