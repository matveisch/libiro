import 'normalize.css/normalize.css';
import '@styles/globals.scss';
import type { AppProps } from 'next/app';
import { Rubik } from 'next/font/google';
import localFont from 'next/font/local';

const rubik = Rubik({
  subsets: ['latin', 'hebrew', 'cyrillic'],
  weight: ['400', '300'],
});

const gillSans = localFont({
  src: [
    {
      path: './fonts/GillSansWoff2/GillSansC-Bold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/GillSansWoff2/GillSansC.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/GillSansWoff2/GillSansLightC.woff2',
      weight: '300',
      style: 'normal',
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${gillSans.style.fontFamily}, ${rubik.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
