import { initializeLogRocket } from '@lib/tracking/logRocket.tracking';

const useTrackLogRocket = (): void => {
	initializeLogRocket();
};

export default useTrackLogRocket;
