import styles from './GeneralError.module.scss';

export default function GeneralError() {
  return (
    <div className={styles.generalError}>
      <p>Error: Your form is not valid, please fix the errors!</p>
    </div>
  );
}
