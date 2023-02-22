import useWindowDimensions from "@lib/hooks/use-window-dimensions.hook";
import SectionContentWrapper from "components/molecules/section-content-wrapper.molecule";
import WaveWrapper from "components/molecules/wave-wrapper.molecule";
import HeatingCoolingMassSaveContent from "components/templates/heating-and-cooling/mass-save/heating-cooling-mass-save.content";
import ElectricalRepairsInstallationUpgradesContent from "./electrical-repairs-installation-upgrades.content";

const ElectricalRepairsInstallationUpgradesSection =()=>{
    	const { width } = useWindowDimensions();
 return (
		<section
			id="repairs-installation-upgrades"
			className=" relative z-10 -mb-[2em] sm:-mb-[2em] md:-mb-[3em] lg:-mb-[4em] 2xl:-mb-[6em]"
		>
			<SectionContentWrapper>
				<ElectricalRepairsInstallationUpgradesContent />
			</SectionContentWrapper>
			
			
		</section>
 );   
}
export default ElectricalRepairsInstallationUpgradesSection

