import { useEffect } from 'react';
import * as gtag from '@lib/tracking/gtag.tracking';
import { useRouter } from 'next/router';

const useTrackPageGA = (): void => {
	const router = useRouter();
	useEffect(() => {
		if (gtag.isGAEnabled) {
			const handleRouteChange = (url: URL) => {
				gtag.pageview(url);
			};
			router.events.on('routeChangeComplete', handleRouteChange);
			return () => {
				router.events.off('routeChangeComplete', handleRouteChange);
			};
		}
	}, [router.events]);
};

export default useTrackPageGA;
