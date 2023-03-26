/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';
import {
	ServiceMemberships,
	ServiceMembershipCard,
} from '../../typing/gql/graphql';

export const MembershipsContext = createContext<MembershipsContextValue>({
	activeServiceMembership: null, // active category (generator?, cooling system?)
	selectedMembership: null, // selected membership (premium, deluxe, basic?)
	setActiveServiceMembership: () => {},
	setSelectedMembership: () => {},
});

interface MembershipsContextValue {
	activeServiceMembership: ServiceMemberships | null;
	selectedMembership: ServiceMembershipCard | null;
	setActiveServiceMembership: (category: ServiceMemberships) => void;
	setSelectedMembership: (membership: ServiceMembershipCard | null) => void;
}
