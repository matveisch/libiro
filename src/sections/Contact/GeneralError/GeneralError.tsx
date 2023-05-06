import styles from './GeneralError.module.scss';
import { useTranslation } from 'next-i18next';

export default function GeneralError() {
  const { t } = useTranslation();

  return (
    <div className={styles.generalError}>
      <p>{t('generalError')}</p>
    </div>
  );
}
