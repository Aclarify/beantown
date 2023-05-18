import React from 'react';
import Modal from './modal.organism';
import PlanCard from './financing-plan-card.organism';
interface Props {
	visible: boolean;
	onClose: () => void;
	planIconImage: any;
	planCardTitle: string;
	planCardDescription: string;
}

const PlanModal: React.FC<Props> = (props) => {
	return (
		<Modal isVisible={props.visible} onClose={props.onClose}>
			<PlanCard
				iconImage={props.planIconImage || ''}
				planTitle={props.planCardTitle || ''}
				planDescription={props.planCardDescription || ''}
			/>
		</Modal>
	);
};
export default PlanModal;
