import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client/react';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import localFont from '@next/font/local';
import { graphQLClient } from '@lib/clients/apollo/apollo.client';
import Nav from '../components/organisms/nav';
import Footer from 'components/organisms/footer';

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
	const logoDesktop =
		pageProps.globalContext?.pageContent?.page[0]?.logoDesktop?.image;
	const logoMobile =
		pageProps.globalContext?.pageContent?.page[0]?.logoMobile?.image;
	return (
		<>
			<ApolloProvider client={graphQLClient}>
				<main
					className={`${neuePlak.className}  overflow-hidden tracking-wide lg:tracking-wider`}
				>
					{pageProps.globalContext && (
						<Nav
							logoDesktop={logoDesktop}
							logoMobile={logoMobile}
							content={pageProps.globalContext.pageContent.header[0]}
						/>
					)}
					<Component {...pageProps} />
					{pageProps.globalContext && (
						<Footer
							logoDesktop={logoDesktop}
							logoMobile={logoMobile}
							content={pageProps.globalContext.pageContent.footer[0]}
						/>
					)}
				</main>
			</ApolloProvider>
		</>
	);
}
