import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import axios from 'axios';

export default function Home() {
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

  console.log(process.env.ACCESS_TOKEN);
  console.log(process.env.PHONE_NUMBER_ID);

  return (
    <>
      <Head>
        <title>Libiro</title>
        <meta name="description" content="Libiro restaurant website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <button onClick={sendMessage}>Send Message</button>
      </main>
    </>
  );
}
