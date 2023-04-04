import { FC } from 'react';
import Script from 'next/script';
import { isGAEnabled } from '@lib/tracking/gtag.tracking';
import useTrackPageGA from '@lib/hooks/useTrackPageGA.hook';
import Head from 'next/head';

interface GTagProps {
	trackingId: string;
}

const GTag: FC<GTagProps> = ({ trackingId }) => {
	useTrackPageGA();

	return (
		<>
			{/* Global Site Tag (gtag.js) - Google Analytics */}
			{isGAEnabled && (
				<>
					<Head>
						<script
							dangerouslySetInnerHTML={{
								__html: `
          partytown = {
            lib: "/_next/static/~partytown/",
            forward: ["gtag"]
          };
        `,
							}}
						/>
					</Head>

					<Script
						id={`gtag-worker-init-${trackingId}`}
						strategy="worker"
						src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
					/>
					<Script
						id={`gtag-init-${trackingId}`}
						type="text/partytown"
						dangerouslySetInnerHTML={{
							__html: `
            window.dataLayer = window.dataLayer || [];
            window.gtag = function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${trackingId}', {
              page_path: window.location.pathname,
            });
          `,
						}}
					/>
				</>
			)}
		</>
	);
};

export default GTag;
