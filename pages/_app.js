import 'firebaseui/dist/firebaseui.css'
import '../styles/globals.scss'

import NextNprogress from 'nextjs-progressbar'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Head>
        <title>NextPLANET</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#060410"/>
    </Head>
    <NextNprogress color="black" startPosition={0.3} stopDelayMs={200} height="3"/>
    <Component {...pageProps} />
  </>
  )
}

export default MyApp