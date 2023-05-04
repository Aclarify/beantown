import React from 'react';
import Modal from './modal.organism';
import BenefitsCard from './benefit-card.organism';
interface Props {
	visible : boolean;
	onClose: ()=>void;
	benefitsIconImage : any;
	benefitCardTitle :string;
	benefitCardDescription:string;
}

const JobBenefitsModal: React.FC<Props> = (props) => {	

	return (
		<Modal isVisible={props.visible} onClose={props.onClose}>
			<BenefitsCard
				briefcaseIconImage={props.benefitsIconImage || ''}
				benefitTitle={props.benefitCardTitle || ''}
				benefitDescription={props.benefitCardDescription || ''}
			/>
		</Modal>
	);
};
export default JobBenefitsModal;
