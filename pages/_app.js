import '../styles/globals.css';
import Head from 'next/head';

function RawJsonTemplates({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='msapplication-TileColor' content='#2d89ef' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default RawJsonTemplates;
