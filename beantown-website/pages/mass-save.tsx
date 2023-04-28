import React, { useContext } from 'react';
import { MassSave, Nav, Footer } from '@typing/gql/graphql';
import Head from 'next/head';
import pageQuery from '@lib/queries/pages/get-mass-save.query';
import WithGlobalContent, {
	generateGetStaticProps,
} from '../components/containers/global-content/global-content.container';
import { PageNames } from '@configs/client/pages/pages.config';
import Header from 'components/organisms/nav';
import FooterSection from 'components/organisms/footer';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { GlobalContext } from '@contexts/global/global.context';
import BookNowButton from 'components/atoms/book-now-button.atom';
import MassSaveHeroSection from 'components/templates/mass-save/hero/mass-save-hero.section';
import MassSaveFaqSection from 'components/templates/mass-save/faq/mass-save-faq.section';
import AboutMassSaveSection from 'components/templates/mass-save/about-mass-save/about-mass-save.section';
import MassSaveStagesSection from 'components/templates/mass-save/stages/mass-save-stages.section';
import FooterCTASection from 'components/templates/mass-save/cta/mass-save-cta.section';
export interface MassSaveContentProps {
	page: MassSave[];
	header: Nav[];
	footer: Footer[];
}

const getStaticProps = generateGetStaticProps<MassSaveContentProps>(
	pageQuery,
	PageNames.MASSSAVE
);
export { getStaticProps };
const MassSavePage: React.FC = (props) => {
	const { pageContent } =
		useContext<GlobalContextProps<MassSaveContentProps>>(GlobalContext);

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
	return (
		<div id="mass-save" className="bg-primary-white-shade-1">
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
			<MassSaveHeroSection />
			<AboutMassSaveSection />
			<MassSaveStagesSection />
			<MassSaveFaqSection />
			<FooterCTASection />
			<FooterSection logoDesktop={logoLight?.image} content={footerData} />
		</div>
	);
};
export default WithGlobalContent<MassSaveContentProps>(MassSavePage);
