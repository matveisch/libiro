import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Langs.module.scss';

export default function Langs() {
  const { pathname, locale } = useRouter();
  const langs = ['ru', 'he', 'en'];

  return (
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
  );
}
