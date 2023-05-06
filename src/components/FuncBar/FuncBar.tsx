import styles from './FuncBar.module.scss';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function FuncBar() {
  const { pathname, locale } = useRouter();
  const langs = ['ru', 'he', 'en'];

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
      <ul className={styles.links}></ul>
    </div>
  );
}
