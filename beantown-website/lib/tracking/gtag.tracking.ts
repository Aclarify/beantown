export type GTagEvent = {
	action: string;
	event?: string;
	method?: string;
	event_category?: string;
	event_label?: string;
	value?: number;
	non_interaction?: boolean;
	[key: string]: unknown;
};

export const GA_TRACKING_ID_UA =
	process.env.NEXT_PUBLIC_GA_TRACKING_ID_UA || '';

// TODO: Integrate GA4 once go ahead is given
export const GA_TRACKING_ID_GA =
	process.env.NEXT_PUBLIC_GA_TRACKING_ID_GA || '';

export const isGAEnabled = !!(
	process.env.NEXT_PUBLIC_NODE_ENV === 'production' && GA_TRACKING_ID_UA
);

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL): void => {
	if (window === undefined || !isGAEnabled) return;
	window?.gtag('config', GA_TRACKING_ID_UA, {
		page_path: url,
	});
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const sendGAEvent = ({ action, ...options }: GTagEvent): void => {
	if (window === undefined || !isGAEnabled) return;
	window.gtag('event', action, options);
};
