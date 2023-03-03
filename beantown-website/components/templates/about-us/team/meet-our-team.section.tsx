import SectionContentWrapper from "components/molecules/section-content-wrapper.molecule";
import MeetOurTeam from "./meet-our-team.content"

const TeamSection=() =>{
    return (
			<section
				id="team-section"
				className="bg-secondary-shade-3  3xl-[-8em] lg:mt-4em] relative z-10 mt-[-5em] sm:mt-[-7em] md:mt-[-12em] 2xl:mt-[-12em] "
			>
				<SectionContentWrapper>
					<MeetOurTeam />
				</SectionContentWrapper>
			</section>
		);

}
export default TeamSection