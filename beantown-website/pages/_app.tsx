import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import { ApolloProvider } from '@apollo/client/react';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import localFont from '@next/font/local';
import { graphQLClient } from '@lib/clients/apollo/apollo.client';
import Toast from 'components/molecules/toast.molecule';
import Head from 'next/head';

const neuePlak = localFont({
	display: 'swap',
	variable: '--font-neue-plak',
	src: [
		{
			path: '../public/fonts/neue-plak-condensed/NeuePlak-CondThin.ttf',
			weight: '100',
			style: 'normal',
		},
		{
			path: '../public/fonts/neue-plak-condensed/NeuePlak-CondLight.ttf',
			weight: '300',
			style: 'normal',
		},
		{
			path: '../public/fonts/neue-plak-condensed/NeuePlak-CondRegular.ttf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../public/fonts/neue-plak-condensed/NeuePlak-CondSemiBold.ttf',
			weight: '600',
			style: 'normal',
		},
		{
			path: '../public/fonts/neue-plak-condensed/NeuePlak-CondBold.ttf',
			weight: '700',
			style: 'normal',
		},
	],
});
const AppHead = () => {
	return (
		<Head>
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/favicons/apple-touch-icon.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/favicons/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/favicons/favicon-16x16.png"
			/>
			<link rel="manifest" href="/favicons/site.webmanifest" />
			<link rel="icon" href="/favicons/favicon.ico" />
		</Head>
	);
};

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<AppHead />
			<style jsx global>{`
				:root {
					--font-neue-plak: ${neuePlak.style.fontFamily};
				}
			`}</style>
			<Script
				data-api-key="ckqky3gqt018408n1em335fyr"
				id="se-widget-embed"
				src="https://embed.scheduleengine.net/schedule-engine-v3.js"
			/>
			<ApolloProvider client={graphQLClient}>
				<main
					className={`${neuePlak.className}  overflow-hidden tracking-wide lg:tracking-wider`}
				>
					<Component {...pageProps} />
					<Toast />
				</main>
			</ApolloProvider>
		</>
	);
}
