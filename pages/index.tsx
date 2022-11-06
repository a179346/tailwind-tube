import Head from 'next/head';

import { Navbar } from '../components/Navbar/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Twtube</title>
      </Head>

      <main>
        <Navbar />
      </main>
    </div>
  );
}
