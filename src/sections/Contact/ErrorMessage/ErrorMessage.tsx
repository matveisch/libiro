import styles from './ErrorMessage.module.scss';

export default function ErrorMessage({ message }: { message: string }) {
  return <span className={styles.errorMessage}>{message}</span>;
}
