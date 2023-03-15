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
import CtaWrapper from 'components/molecules/cta-wrapper.molecule';
import Header from 'components/organisms/nav';
import UnderConstructionSection from 'components/templates/under-construction/under-construction.section';
import Link from 'next/link';

export interface UnderConstructionContentProps {
	page: BookNow[];
	header: Nav[];
	footer: Footer[];
}
const PageHead = () => {
	return (
		<Head>
			<title>UnderConstruction - Beantown Home Services</title>
			<meta
				name="description"
				content="Beantown Services is a full-service cleaning company that provides residential and commercial cleaning services in the Boston area."
			/>
			<link rel="icon" href="/favicon.ico" />
		</Head>
	);
};
const getStaticProps = generateGetStaticProps<UnderConstructionContentProps>(
	pageQuery,
	PageNames.UNDERCONSTRUCTION
);
export { getStaticProps };

const UnderConstructionPage: React.FC = (props) => {
	const { pageContent } =
		useContext<GlobalContextProps<UnderConstructionContentProps>>(
			GlobalContext
		);

	if (!pageContent) {
		return null;
	}
	const pageData: any = pageContent.page[0];
	const headerData = pageContent.header[0];
	const footerData = pageContent.footer[0];

	const { logoLight, logoDark } = pageData;
	return (
		<div id="under-construction" className="bg-primary-white-shade-1">
			<PageHead />
			<Header
				mobileBgColor="bg-primary-white-shade-1"
				fontColor="text-primary-shade-1"
				logoDesktop={logoLight?.image}
				logoMobile={logoDark?.image}
				content={headerData}
			>
				<div className=" hidden lg:flex lg:justify-end ">
					<Link href={headerData.headerButton?.href || ''}>
						<CtaWrapper.CTA className="para-3 bg-primary-shade-1 h-[48px] w-[139px] rounded-lg py-1 px-4 tracking-wide  text-white  md:py-2 md:px-8 lg:tracking-wider ">
							<p>{headerData.headerButton?.text}</p>
						</CtaWrapper.CTA>
					</Link>
				</div>
			</Header>
			<UnderConstructionSection />
			<FooterSection
				logoDesktop={logoLight?.image || ''}
				content={footerData}
			/>
		</div>
	);
};
export default WithGlobalContent<UnderConstructionContentProps>(
	UnderConstructionPage
);
