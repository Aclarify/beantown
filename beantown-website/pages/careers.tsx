import React, { useContext } from 'react';
import { Careers, Nav, Footer } from '@typing/gql/graphql';
import Head from 'next/head';
import pageQuery from '@lib/queries/pages/get-careers-query';
import WithGlobalContent, {
	generateGetStaticProps,
} from '../components/containers/global-content/global-content.container';
import { PageNames } from '@configs/client/pages/pages.config';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { GlobalContext } from '@contexts/global/global.context';
import Header from 'components/organisms/nav';
import FooterSection from 'components/organisms/footer';
import BookNowButton from 'components/atoms/book-now-button.atom';
import CareerHeroSection from 'components/templates/career/hero/career-hero-section';
import JobSection from 'components/templates/career/jobs/jobs-section';
import { withFeatureFlag } from 'components/templates/under-construction/with-feature-flag';

export interface CareersContentProps {
	page: Careers[];
	header: Nav[];
	footer: Footer[];
}

const getStaticProps = generateGetStaticProps<CareersContentProps>(
	pageQuery,
	PageNames.CAREERS
);
export { getStaticProps };

const CareerPage: React.FC = () => {
	const { pageContent } =
		useContext<GlobalContextProps<CareersContentProps>>(GlobalContext);

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

	const flagValue = process.env.NEXT_PUBLIC_CAREERS_PAGE;

	const FlaggedContent = withFeatureFlag(
		() => (
			<>
				<CareerHeroSection />
				<JobSection />
			</>
		),
		flagValue
	);

	return (
		<div id="career" className="bg-primary-white-shade-1">
			<PageHead />
			<Header
				mobileBgColor="bg-primary-white-shade-1"
				fontColor="text-primary-shade-1"
				logoDesktop={logoDark?.image}
				logoMobile={logoDark?.image}
				content={headerData}
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
			<FlaggedContent />
			<FooterSection logoDesktop={logoLight?.image} content={footerData} />
		</div>
	);
};

export default WithGlobalContent<CareersContentProps>(CareerPage);
