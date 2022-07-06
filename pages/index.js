import APIDashboard from '@/components/api-dashboard';
import Head from 'next/head';

export default function APIReferenceTemplate() {
  return (
    <>
      <Head>
        <title>Backend API Reference Template by RawJson</title>
        <meta
          name='description'
          content='Backend API Reference Template created for developers. Uses NextJs, TailwindCSS. Get started quickly by editing the endpoint, parameters, and attributes.'
        />
      </Head>
      <div>
        <APIDashboard />;
      </div>
    </>
  );
}
