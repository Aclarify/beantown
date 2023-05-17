import React, { useContext } from 'react';
import { Community, Nav, Footer } from '@typing/gql/graphql';
import Head from 'next/head';
import pageQuery from '@lib/queries/pages/get-community.query';
import WithGlobalContent, {
	generateGetStaticProps,
} from '../components/containers/global-content/global-content.container';
import { PageNames } from '@configs/client/pages/pages.config';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { GlobalContext } from '@contexts/global/global.context';
import Header from 'components/organisms/nav';
import FooterSection from 'components/organisms/footer';
import BookNowButton from 'components/atoms/book-now-button.atom';
import CommunityHeroSection from 'components/templates/community/hero/community-hero-section';
import CommunityCTASection from 'components/templates/community/cta/community-cta.section';
import EventsMediaFeedSection from 'components/templates/community/events-media-feed/events-media-feed.section';
import { withFeatureFlag } from 'components/templates/under-construction/with-feature-flag';

export interface CommunityContentProps {
	page: Community[];
	header: Nav[];
	footer: Footer[];
}

const getStaticProps = generateGetStaticProps<CommunityContentProps>(
	pageQuery,
	PageNames.COMMUNITY
);
export { getStaticProps };

const CommunityPage: React.FC = () => {
	const { pageContent } =
		useContext<GlobalContextProps<CommunityContentProps>>(GlobalContext);

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

	const flagValue = process.env.NEXT_PUBLIC_COMMUNITY_PAGE;

	const FlaggedContent = withFeatureFlag(
		() => (
			<>
				<CommunityHeroSection />
				<EventsMediaFeedSection />
				<CommunityCTASection />
			</>
		),
		flagValue
	);

	return (
		<div id="community" className="bg-white">
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

export default WithGlobalContent<CommunityContentProps>(CommunityPage);
