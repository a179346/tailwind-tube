import Head from 'next/head';

import { Navbar } from '../components/Navbar/Navbar';
import { SideBar } from '../components/SideBar/SideBar';
import { ePage } from '../types/ePage';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Twtube</title>
      </Head>

      <main>
        <Navbar />
        <SideBar page={ePage.HOME} />
      </main>
    </div>
  );
}
