import React, { useContext } from 'react';
import { Nav, Footer, Booknow as BookNow } from '@typing/gql/graphql';
import Head from 'next/head';
import pageQuery from '@lib/queries/pages/get-book-now.query';
import WithGlobalContent, {
	generateGetStaticProps,
} from '../components/containers/global-content/global-content.container';
import { PageNames } from '@configs/client/pages/pages.config';
import FooterSection from 'components/organisms/footer';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { GlobalContext } from '@contexts/global/global.context';
import BookNowSection from 'components/templates/Book-now/book-now.section';
import CtaWrapper from 'components/molecules/cta-wrapper.molecule';
import Header from 'components/organisms/nav';

export interface BookNowContentProps {
	page: BookNow[];
	header: Nav[];
	footer: Footer[];
}
const getStaticProps = generateGetStaticProps<BookNowContentProps>(
	pageQuery,
	PageNames.BOOKNOW
);
export { getStaticProps };

const BookNowPage: React.FC = (props) => {
	const { pageContent } =
		useContext<GlobalContextProps<BookNowContentProps>>(GlobalContext);

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
				{/* TODO to fetch from CMS */}
				<title>{pageTitle}</title>
				<meta name="description" content={metaDescription || ''} />
				<link rel="icon" href="/favicon.ico" />
			</Head>
		);
	};
	return (
		<div id="book-now" className="bg-primary-white-shade-1">
			<PageHead />
			<Header
				fontColor="text-primary-shade-1"
				logoDesktop={logoDark?.image}
				logoMobile={logoDark?.image}
				content={headerData}
				mobileBgColor="bg-secondary-shade-3"
			>
				<div className=" hidden lg:flex lg:justify-end ">
					<CtaWrapper.CTA className="headerButton bg-primary-shade-1 text-white  ">
						{headerData.headerButton?.text}
					</CtaWrapper.CTA>
				</div>
			</Header>
			<BookNowSection />
			<FooterSection
				logoDesktop={logoLight?.image || ''}
				content={footerData}
			/>
		</div>
	);
};
export default WithGlobalContent<BookNowContentProps>(BookNowPage);
