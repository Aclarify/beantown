import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Nav from '../components/nav'
import Footer from '../components/footer'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
        <Nav/>
        <main>         
          <Component {...pageProps}/>         
        </main>
        {/* <Footer /> */}
        
    </>

  )
    
}
