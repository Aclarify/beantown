import { PageNames } from '@configs/client/pages/pages.config';
import { Nav, Footer, OtherServices } from '@typing/gql/graphql';
import WithGlobalContent, {
	generateGetStaticProps,
} from 'components/containers/global-content/global-content.container';
import Head from 'next/head';
import pageQuery from '@lib/queries/pages/get-electrical.query';
import ElectricalHeroSection from 'components/templates/electrical/hero/electrical-hero.section';
import ElectricalPageCTASection from 'components/templates/electrical/cta/electrical-cta.section';
import ElectricalBlogsSection from 'components/templates/electrical/blog/electrical-blogs.section';
import ElectricalFaqSection from 'components/templates/electrical/faq/electrical-faqs.section';
import AboutPlumbingServiceSection from 'components/templates/electrical/about-the-service/electrical-about.section';
import Header from 'components/organisms/nav';
import FooterSection from 'components/organisms/footer';
import { useContext } from 'react';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { GlobalContext } from '@contexts/global/global.context';
import CtaWrapper from 'components/molecules/cta-wrapper.molecule';

export interface ElectricalContentProps {
	page: OtherServices[];
	header: Nav[];
	footer: Footer[];
}
const getStaticProps = generateGetStaticProps<ElectricalContentProps>(
	pageQuery,
	PageNames.ELECTRICAL
);
export { getStaticProps };
const PageHead = () => {
	return (
		<Head>
			<title>Electrical Services</title>
			<meta
				name="description"
				content="Beantown Services is a full-service cleaning company that provides residential and commercial cleaning services in the Boston area."
			/>
			<link rel="icon" href="/favicon.ico" />
		</Head>
	);
};

const ElectricalServicesPage: React.FC = (props) => {
	const { pageContent } =
		useContext<GlobalContextProps<ElectricalContentProps>>(GlobalContext);

	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const headerData = pageContent.header[0];
	const footerData = pageContent.footer[0];

	const { logoDesktop, logoMobile } = pageData;
	return (
		<section id="electrical-services" className="bg-primary-white-shade-1">
			<PageHead />
			<Header
				fontColor="text-primary-shade-1"
				logoDesktop={logoDesktop?.image}
				logoMobile={logoMobile?.image}
				content={headerData}
			>
				<div className=" hidden lg:flex lg:justify-end ">
					<CtaWrapper.CTA className="para-3 bg-primary-shade-1 h-[48px] w-[139px] rounded-lg py-1 px-4 tracking-wide  text-white  md:py-2 md:px-8 lg:tracking-wider ">
						<p>{headerData.headerButton?.text}</p>
					</CtaWrapper.CTA>
				</div>
			</Header>
			<ElectricalHeroSection />
			<AboutPlumbingServiceSection />
			<ElectricalPageCTASection />
			<ElectricalBlogsSection />
			<ElectricalFaqSection />
			<FooterSection logoDesktop={logoDesktop?.image} content={footerData} />
		</section>
	);
};
export default WithGlobalContent<ElectricalContentProps>(
	ElectricalServicesPage
);
