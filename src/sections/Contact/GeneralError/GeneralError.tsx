import styles from './GeneralError.module.scss';
import { useTranslation } from 'next-i18next';
import { RotatingLines } from 'react-loader-spinner';

export default function GeneralError({
  isSubmitting,
}: {
  isSubmitting: boolean;
}) {
  const { t } = useTranslation();

  return (
    <div
      className={styles.generalError}
      style={
        isSubmitting
          ? { backgroundColor: '#0a0a0a', boxShadow: 'unset' }
          : undefined
      }
    >
      {isSubmitting && (
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="15"
          visible={true}
        />
      )}
      {isSubmitting ? (
        <p style={{ color: '#fff' }}>{t('submitting')}</p>
      ) : (
        <p>{t('generalError')}</p>
      )}
    </div>
  );
}
