import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { AppProvider } from '../contexts/AppContext';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Descrição do seu aplicativo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="min-h-screen bg-gray-50">
          <Component {...pageProps} />
        </div>
      </Layout>
    </AppProvider>
  );
}

export default MyApp;