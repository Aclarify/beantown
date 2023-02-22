import SectionContentWrapper from "components/molecules/section-content-wrapper.molecule";
import ElectricalRIULMoreContent from "./electrical-RIU-more.content";


const ElectricalRIUMoreSection =()=>{
    return (
			<section
				id="repairs-installation-upgrades-more"
				className=" relative z-10 -mb-[2em] sm:-mb-[2em] md:-mb-[3em] lg:-mb-[4em] 2xl:-mb-[6em]"
			>
				<SectionContentWrapper>
					<ElectricalRIULMoreContent  />
				</SectionContentWrapper>
			</section>
		);
}
export default ElectricalRIUMoreSection