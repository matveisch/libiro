import Head from 'next/head';
import styles from '@styles/Home.module.scss';
import axios from 'axios';
import Events from '@/sections/Events/Events';
import Description from '@/sections/Description/Description';
import Halls from '@/sections/Halls/Halls';
import Gallery from '@/sections/Gallery/Gallery';
import Contact from '@/sections/Contact/Contact';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import FuncBar from '@/components/FuncBar/FuncBar';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  const { locale } = useRouter();

  useEffect(() => {
    if (locale === 'he') {
      document.body.dir = 'rtl';
    } else {
      document.body.dir = 'ltr';
    }
  }, [locale]);

  async function sendMessage() {
    const url = `https://graph.facebook.com/v16.0/${process.env.PHONE_NUMBER_ID}/messages`;
    const data = {
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      to: process.env.RECIPIENT_WAID,
      type: 'template',
      template: { name: 'hello_world', language: { code: 'en_US' } },
    };
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    };

    try {
      const response = await axios.post(url, data, { headers });
      console.log(response.data);
    } catch (e: any) {
      console.error(e.response.data);
    }
  }

  return (
    <>
      <Head>
        <title>Libira</title>
        <meta name="description" content="Libira restaurant website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Events />
        <Description />
        <Halls />
        <Gallery />
        <Contact />
        <FuncBar />
      </main>
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
