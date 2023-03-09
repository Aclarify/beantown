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

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<style jsx global>{`
				:root {
					--font-neue-plak: ${neuePlak.style.fontFamily};
				}
			`}</style>
			<ApolloProvider client={graphQLClient}>
				<main
					className={`${neuePlak.className}  overflow-hidden tracking-wide lg:tracking-wider`}
				>
					<Component {...pageProps} />
				</main>
			</ApolloProvider>
		</>
	);
}
