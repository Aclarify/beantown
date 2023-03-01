import { PageNames } from "@configs/client/pages/pages.config";
import { generateGetStaticProps } from "components/containers/global-content/global-content.container";
import SectionContentWrapper from "components/molecules/section-content-wrapper.molecule";
import MeetOurTeam from "components/templates/about-us/meet-our-team";
import OurValuesCards from "components/templates/about-us/our-values-card";
import Head from "next/head"
import pageQuery from '@lib/queries/pages/get-home.query';
import { useContext } from "react";
import { GlobalContextProps } from "@typing/common/interfaces/contexts.interface";
import { GlobalContext } from "@contexts/global/global.context";
import Header from "components/organisms/nav";
import CtaWrapper from "components/molecules/cta-wrapper.molecule";
import Footer from "components/organisms/footer";


export interface AbouUsPageContentProps{
    page:AboutUs[];
    header:nav[];
    footer:footer[];

}

const PageHead = () => {
	return (
		<Head>
			<title>About Us</title>
			<meta
				name="description"
				content="Beantown Services is a full-service cleaning company that provides residential and commercial cleaning services in the Boston area."
			/>
			<link rel="icon" href="/favicon.ico" />
		</Head>
	);
};
const getStaticProps = generateGetStaticProps<AbouUsPageContentProps>(
    pageQuery,
    PageNames.ABOUT
)
export { getStaticProps };


const AboutUs: React.FC = (props) => {
    const {pageContent} = useContext<GlobalContextProps<AbouUsPageContentProps>>(GlobalContext)
    if(!pageContent){
        return null
    }
    const pageData = pageContent.page[0];
    const headerData = pageContent.header[0];
    const footerData = pageContent.footer[0];
    const {logoDesktop , logoMobile} = pageData;
	return (
		<div id="about-us" className="bg-primary-white-shade-1 w-full h-full">
			<SectionContentWrapper>
				<PageHead />
				<Header
					fontColor="text-white"
					logoDesktop={logoDesktop?.image}
					logoMobile={logoMobile?.image}
					content={headerData}
				>
					<div className=" hidden lg:flex lg:justify-end ">
						<CtaWrapper.CTA className="text-primary-shade-1 para-3 h-[48px] w-[139px] rounded-lg bg-white py-1 px-4  tracking-wide  md:py-2 md:px-8 lg:tracking-wider ">
							<p>{headerData.headerButton?.text}</p>
						</CtaWrapper.CTA>
					</div>
				</Header>
				<OurValuesCards />
				<MeetOurTeam />
				<Footer
					logoDesktop={logoDesktop?.image}
					logoMobile={logoMobile?.image}
					content={footerData}
				/>
			</SectionContentWrapper>
		</div>
	);
};
export default AboutUs;
