import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client/react';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import localFont from '@next/font/local';
import { graphQLClient } from '@lib/clients/apollo/apollo.client';

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
			path: '../public/fonts/neue-plak-condensed/NeuePlak-CondBold.ttf',
			weight: '700',
			style: 'normal',
		},
		{
			path: '../public/fonts/neue-plak-condensed/NeuePlak-CondBlack.ttf',
			weight: '900',
			style: 'normal',
		},
		{
			path: '../public/fonts/neue-plak-condensed/NeuePlak-CondExtraBlack.ttf',
			weight: '950',
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
	],
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<ApolloProvider client={graphQLClient}>
				<main
					className={`${neuePlak.className} tracking-wide sm:tracking-wider bg-secondary-shade-3`}
				>
					<Component {...pageProps} />
				</main>
			</ApolloProvider>
		</>
	);
}
