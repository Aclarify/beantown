import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client/react';
import Nav from '../components/organisms/nav';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import localFont from '@next/font/local';
import { graphQLClient } from '@lib/clients/apollo/apollo.client';

const neuePlak = localFont({
	variable: '--font-neue-plak',
	src: [
		{
			path: './fonts/neue-plak-narrow/NeuePlak-NarrowThin.woff2',
			weight: '100',
			style: 'normal',
		},
		{
			path: './fonts/neue-plak-narrow/NeuePlak-NarrowBold.woff2',
			weight: '700',
			style: 'normal',
		},
		{
			path: './fonts/neue-plak-narrow/NeuePlak-NarrowBlack.woff2',
			weight: '900',
			style: 'normal',
		},
		{
			path: './fonts/neue-plak-narrow/NeuePlak-NarrowExtraBlack.woff2',
			weight: '950',
			style: 'normal',
		},
		{
			path: './fonts/neue-plak-narrow/NeuePlak-NarrowLight.woff2',
			weight: '300',
			style: 'normal',
		},
		{
			path: './fonts/neue-plak-narrow/NeuePlak-NarrowRegular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: './fonts/neue-plak-narrow/NeuePlak-NarrowSemiBold.woff2',
			weight: '600',
			style: 'normal',
		},
	],
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<ApolloProvider client={graphQLClient}>
				<main className={`${neuePlak.className} font-light`}>
					<Component {...pageProps} />
				</main>
			</ApolloProvider>
		</>
	);
}
