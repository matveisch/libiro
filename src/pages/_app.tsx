import 'normalize.css/normalize.css';
import '@styles/globals.scss';
import type { AppProps } from 'next/app';
import { Rubik } from 'next/font/google';

const rubik = Rubik({
  subsets: ['latin', 'hebrew', 'cyrillic'],
  weight: ['400', '300'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${rubik.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
