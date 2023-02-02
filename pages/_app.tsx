import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
        <title>Infomoji</title>
        <link rel="shortcut icon" href="favicon.png" />
    </Head>
    <Component {...pageProps} />
    </>
  )
}
