import React, { useContext } from 'react';
import { AboutUs, Nav, Footer } from '@typing/gql/graphql';
import Head from 'next/head';
import pageQuery from '@lib/queries/pages/get-about-us.query';
import WithGlobalContent, {
	generateGetStaticProps,
} from '../components/containers/global-content/global-content.container';
import { PageNames } from '@configs/client/pages/pages.config';
import Header from 'components/organisms/nav';
import FooterSection from 'components/organisms/footer';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { GlobalContext } from '@contexts/global/global.context';
import CtaWrapper from 'components/molecules/cta-wrapper.molecule';
import TeamSection from 'components/templates/about-us/team/meet-our-team.section';
import AboutUsHeroSection from 'components/templates/about-us/hero/about-us-hero.section';
import CTASection from 'components/templates/about-us/cta/about-us-cta.section';
import MissionValuesSection from 'components/templates/about-us/mission/mission.section';
import AboutUsTestimonials from 'components/templates/about-us/testimonials/about-us-testimonials';
import AboutUsServiceAreas from 'components/templates/about-us/service-areas/service-areas';
import CommunityCTASection from 'components/templates/about-us/community-cta/about-us-community-cta.section';
import Link from 'next/link';
import BookNowButton from 'components/atoms/book-now-button.atom';
export interface AboutUsContentProps {
	page: AboutUs[];
	header: Nav[];
	footer: Footer[];
}

const getStaticProps = generateGetStaticProps<AboutUsContentProps>(
	pageQuery,
	PageNames.ABOUTUS
);
export { getStaticProps };
const AboutUsPage: React.FC = (props) => {
	const { pageContent } =
		useContext<GlobalContextProps<AboutUsContentProps>>(GlobalContext);

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
		<div id="about-us" className="bg-primary-white-shade-1">
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
			<AboutUsHeroSection />
			<MissionValuesSection />
			<CommunityCTASection />
			<TeamSection />
			<AboutUsServiceAreas />
			<AboutUsTestimonials />
			<CTASection />
			<FooterSection logoDesktop={logoLight?.image} content={footerData} />
		</div>
	);
};
export default WithGlobalContent<AboutUsContentProps>(AboutUsPage);
