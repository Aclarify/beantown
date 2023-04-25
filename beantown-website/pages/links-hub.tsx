import React, { useContext } from 'react';
import { Nav, Footer, Booknow as BookNow, LinksHub } from '@typing/gql/graphql';
import Head from 'next/head';
import pageQuery from '@lib/queries/pages/get-links-hub.query';
import WithGlobalContent, {
	generateGetStaticProps,
} from '../components/containers/global-content/global-content.container';
import { PageNames } from '@configs/client/pages/pages.config';
import FooterSection from 'components/organisms/footer';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { GlobalContext } from '@contexts/global/global.context';
import LinksHubSection from 'components/templates/links-hub/links-hub.section';
import Header from 'components/organisms/nav';
import BookNowButton from 'components/atoms/book-now-button.atom';

export interface LinksHubContentProps {
	page: LinksHub[];
	header: Nav[];
	footer: Footer[];
}
const getStaticProps = generateGetStaticProps<LinksHubContentProps>(
	pageQuery,
	PageNames.LINKSHUB
);
export { getStaticProps };

const LinksHubPage: React.FC = (props) => {
	const { pageContent } =
		useContext<GlobalContextProps<LinksHubContentProps>>(GlobalContext);

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
		<div id="book-now" className="bg-secondary-shade-3">
			<PageHead />
			<Header
				fontColor="text-primary-shade-1"
				logoDesktop={logoDark?.image}
				logoMobile={logoDark?.image}
				content={headerData}
				mobileBgColor="bg-secondary-shade-3"
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
			<LinksHubSection />
			<FooterSection
				logoDesktop={logoLight?.image || ''}
				content={footerData}
			/>
		</div>
	);
};
export default WithGlobalContent<LinksHubContentProps>(LinksHubPage);
