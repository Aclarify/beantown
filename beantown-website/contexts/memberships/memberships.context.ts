import { createContext } from "react";
import { ServiceMemberships } from '../../typing/gql/graphql';

export const MembershipsContext = createContext<MembershipsContextValue>({
    activeServiceMembership: null,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setActiveServiceMembership: () => { },
});


interface MembershipsContextValue {
    activeServiceMembership: ServiceMemberships | null;
    setActiveServiceMembership: (user: ServiceMemberships) => void;
}