import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client/react';
import Nav from '../components/organisms/nav';
// import Footer from '../components/footer';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import localFont from '@next/font/local';
import { graphQLClient } from '@lib/clients/apollo/apollo.client';

// Font files can be colocated inside of `pages`
// const neuePlak = localFont({
// 	src: './fonts/neue-plak-cufonfonts/NeuePlak-Regular.woff2',
// 	weight: '400',
// 	style: 'Regular',
// 	variable: '--font-neuePlak',
// });
const neuePlak = localFont({
	src: [
		{
			path: './fonts/neue-plak-cufonfonts/NeuePlak-Thin.woff2',
			weight: '400',
			style: 'thin',
		},
		{
			path: './fonts/neue-plak-cufonfonts/NeuePlak-Bold.woff2',
			weight: '700',
			style: 'Bold',
		},
		{
			path: './fonts/neue-plak-cufonfonts/NeuePlak-Black.woff2',
			weight: '700',
			style: 'Black',
		},
		{
			path: './fonts/neue-plak-cufonfonts/NeuePlak-ExtraBlack.woff2',
			weight: '700',
			style: 'ExtraBlack',
		},
		{
			path: './fonts/neue-plak-cufonfonts/NeuePlak-Light.woff2',
			weight: '700',
			style: 'Light',
		},
		{
			path: './fonts/neue-plak-cufonfonts/NeuePlak-Regular.woff2',
			weight: '400',
			style: 'Regular',
		},
		{
			path: './fonts/neue-plak-cufonfonts/NeuePlak-SemiBold.woff2',
			weight: '400',
			style: 'SemiBold',
		},
	],
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<ApolloProvider client={graphQLClient}>
				<main className={neuePlak.className}>
					{/* <main className={`${neuePlak.variable} font-neuePlak`}> */}
					<Component {...pageProps} />
				</main>
				{/* <Footer /> */}
			</ApolloProvider>
		</>
	);
}
