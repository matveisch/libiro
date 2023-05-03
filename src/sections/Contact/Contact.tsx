import styles from './Contact.module.scss';
import lines from '@public/lines.png';

export default function Contact() {
  return (
    <section className={styles.contact}>
      <div
        className={styles.frame}
        style={{ backgroundImage: `url(${lines.src})` }}
      >
        <div className={styles.frameBackground}>
          <h3>Please, ask us about your next party details</h3>
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <button type="button" className="link">
          pls contact us
        </button>
        <div className={styles.square} />
      </div>
    </section>
  );
}
