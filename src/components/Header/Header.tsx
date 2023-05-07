import styles from './Header.module.scss';
import Image from 'next/image';
import logo from '@public/logo.png';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.innerWrapper}>
        <a href="tel:+97243740251">04-374-0251</a>
        <Image src={logo} alt="logo" />
      </div>
    </header>
  );
}
