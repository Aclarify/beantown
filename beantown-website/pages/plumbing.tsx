import React, { useContext } from 'react';
import { OtherServices, Nav, Footer } from '@typing/gql/graphql';
import Head from 'next/head';
import pageQuery from '@lib/queries/pages/get-plumbing.query';
import WithGlobalContent, {
	generateGetStaticProps,
} from '../components/containers/global-content/global-content.container';
import { PageNames } from '@configs/client/pages/pages.config';
import PlumbingHeroContent from 'components/templates/plumbing/hero/plumbing-hero.content';
import AboutPlumbingServiceSection from 'components/templates/plumbing/about-the-service/plumbing-about.section';
import PlumbingCTASection from 'components/templates/plumbing/cta/plumbing-cta.section';
import PlumbingBlogsSection from 'components/templates/plumbing/blogs/plumbing-blogs.section';
import PlumbingFaqSection from 'components/templates/plumbing/faq/plumbing-faq.section';
import Header from 'components/organisms/nav';
import FooterSection from 'components/organisms/footer';

import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { GlobalContext } from '@contexts/global/global.context';
import CtaWrapper from 'components/molecules/cta-wrapper.molecule';
import Link from 'next/link';
import BookNowButton from 'components/atoms/book-now-button.atom';

export interface PlumbingContentProps {
	page: OtherServices[];
	header: Nav[];
	footer: Footer[];
}

const getStaticProps = generateGetStaticProps<PlumbingContentProps>(
	pageQuery,
	PageNames.PLUMBING
);
export { getStaticProps };

const PlumbingServicesPage: React.FC = (props) => {
	const { pageContent } =
		useContext<GlobalContextProps<PlumbingContentProps>>(GlobalContext);

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
		<div id="plumbing-services" className="bg-primary-white-shade-1">
			<PageHead />
			<Header
				fontColor="text-white"
				logoDesktop={logoLight?.image}
				logoMobile={logoDark?.image}
				content={headerData}
				mobileBgColor="bg-service-green-bg"
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
			<PlumbingHeroContent />
			<AboutPlumbingServiceSection />
			<PlumbingCTASection />
			<PlumbingBlogsSection />
			<PlumbingFaqSection />
			<FooterSection logoDesktop={logoLight?.image} content={footerData} />
		</div>
	);
};
export default WithGlobalContent<PlumbingContentProps>(PlumbingServicesPage);
