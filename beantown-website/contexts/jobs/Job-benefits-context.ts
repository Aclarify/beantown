/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';
import { JobDetails } from '../../typing/gql/graphql';

export const jobsContext = createContext<JobsContextValue>({
	activeJobDetails: null,
	setActiveJobDetails: () => {},
});

interface JobsContextValue {
	activeJobDetails: JobDetails | null;
	setActiveJobDetails: (activeData: JobDetails) => void;
}
