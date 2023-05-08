import styles from './FuncBar.module.scss';
import Langs from '@/components/Langs/Langs';
import Links from '@/components/Links/Links';

export default function FuncBar() {
  return (
    <div className={styles.funcBar}>
      <Langs />
      <Links />
    </div>
  );
}
