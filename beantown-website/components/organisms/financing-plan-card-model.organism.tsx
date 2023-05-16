import React from 'react';
import Modal from './modal.organism';
import PlanCard from './financing-plan-card.organism';
interface Props {
	visible : boolean;
	onClose: ()=>void;
	benefitsIconImage : any;
	benefitCardTitle :string;
	benefitCardDescription:string;
}

const PlanModal: React.FC<Props> = (props) => {	

	return (
		<Modal isVisible={props.visible} onClose={props.onClose}>
			<PlanCard
				iconImage={props.benefitsIconImage || ''}
				planTitle={props.benefitCardTitle || ''}
				planDescription={props.benefitCardDescription || ''}
			/>
		</Modal>
	);
};
export default PlanModal;
