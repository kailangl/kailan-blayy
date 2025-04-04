import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
      
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Descrição do seu aplicativo" />
        
      
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    
      <div className="min-h-screen bg-gray-50">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp