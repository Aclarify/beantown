import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';

export const LOGROCKET_ID = process.env.NEXT_PUBLIC_LOGROCKET_ID || '';

export const isLogRocketEnabled = !!(
	process.env.NEXT_PUBLIC_NODE_ENV === 'production' && LOGROCKET_ID
);

// https://docs.logrocket.com/docs/using-logrocket-with-server-side-rendering
export const initializeLogRocket = (): void => {
	// only initialize when in the browser
	if (isLogRocketEnabled && typeof window !== 'undefined') {
		LogRocket.init(LOGROCKET_ID);
		// plugins should also only be initialized when in the browser
		setupLogRocketReact(LogRocket);
	}
};
