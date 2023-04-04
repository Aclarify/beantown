import { useEffect } from 'react';
import { isGAEnabled, pageview } from '@lib/tracking/gtag.tracking';
import { useRouter } from 'next/router';

const useTrackPageGA = (): void => {
	const router = useRouter();
	useEffect(() => {
		if (window !== undefined && isGAEnabled) {
			const handleRouteChange = (url: URL) => {
				pageview(url);
			};
			router.events.on('routeChangeComplete', handleRouteChange);
			return () => {
				router.events.off('routeChangeComplete', handleRouteChange);
			};
		}
	}, [router.events]);
};

export default useTrackPageGA;
