import SectionContentWrapper from "components/molecules/section-content-wrapper.molecule";
import MeetOurTeam from "components/templates/about-us/meet-our-team";
import OurValuesCards from "components/templates/about-us/our-values-card";
import { Head } from "next/document";

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
const AboutUs: React.FC = (props) => {
	return (
		<>
			<section id="about-us" className="bg-primary-white-shade-1 mt-10">
				<SectionContentWrapper>
					<OurValuesCards />
					<MeetOurTeam/>
				</SectionContentWrapper>
			</section>
		</>
	);
};
export default AboutUs;
