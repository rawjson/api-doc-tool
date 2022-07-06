import { Html, Head, Main, NextScript } from 'next/document';
export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link href='/static/favicons/apple-touch-icon.png' rel='apple-touch-icon' sizes='180x180' />
        <link href='/static/favicons/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
        <link href='/static/favicons/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
        <link href='/static/favicons/site.webmanifest' rel='manifest' />
        <link href='/static/favicons/safari-pinned-tab.svg' color='#5bbad5' rel='mask-icon' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
