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
const myFont = localFont({
  src: './fonts/neue-plak-cufonfonts/NeuePlak-Thin.woff2',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ApolloProvider client={graphQLClient}>
        <main className={myFont.className}>
          <Component {...pageProps} />
        </main>
        {/* <Footer /> */}
      </ApolloProvider>
    </>
  );
}
