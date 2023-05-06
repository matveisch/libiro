import styles from './Description.module.scss';
import { useTranslation } from 'next-i18next';

export default function Description() {
  const { t } = useTranslation();

  return (
    <section className={styles.description}>
      <div className={styles.description__headerBlock}>
        <h2 className={styles.description__header}>{t('libiraInvites')}</h2>
      </div>
      <div className={styles.description__textContainer}>
        <div className={styles.description__textBlock}>
          <p className={styles.description__text}>{t('libiraIsGoto')}</p>
        </div>
        <div className={styles.description__textBlock}>
          <p className={styles.description__text}>{t('yearsOfExperience')}</p>
        </div>
      </div>
    </section>
  );
}
