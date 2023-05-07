import styles from './FuncBar.module.scss';
import { useRouter } from 'next/router';
import Link from 'next/link';
import whatsLogo from '@public/whatsapp.svg';
import faceLogo from '@public/fb-icon.svg';
import instLogo from '@public/insta-icon.svg';
import taLogo from '@public/3-icon.svg';
import youtLogo from '@public/youtube-icon.svg';
import Image from 'next/image';

export default function FuncBar() {
  const { pathname, locale } = useRouter();
  const langs = ['ru', 'he', 'en'];
  const links = [
    {
      image: whatsLogo,
      path: 'https://api.whatsapp.com/send/?phone=0522546767&text=Chat%20Libira%20Now',
    },
    {
      image: faceLogo,
      path: 'https://facebook.com/libirapub',
    },
    {
      image: instLogo,
      path: 'https://www.instagram.com/haifa.libira',
    },
    {
      image: taLogo,
      path: 'https://www.tripadvisor.com/Restaurant_Review-g293982-d8725491-Reviews-Libira_Brewpub-Haifa_Haifa_District.html',
    },
    {
      image: youtLogo,
      path: 'https://www.youtube.com/c/libira1haifa',
    },
  ];

  return (
    <div className={styles.funcBar}>
      <ul className={styles.langs}>
        {langs.map((lang) => (
          <li key={lang}>
            <Link
              href={pathname}
              locale={lang}
              className={locale === lang ? styles.active : undefined}
            >
              {lang}
            </Link>
          </li>
        ))}
      </ul>
      <ul className={styles.links}>
        {links.map((l) => (
          <a href={l.path} key={l.path}>
            <Image
              src={l.image}
              alt="icon"
              style={
                l.image === taLogo
                  ? { width: '22px', height: '13px' }
                  : undefined
              }
            />
          </a>
        ))}
      </ul>
    </div>
  );
}
