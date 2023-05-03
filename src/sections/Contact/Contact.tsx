import styles from './Contact.module.scss';
import lines from '@public/lines.png';
import { useState } from 'react';
import ContactForm from '@/sections/Contact/ContactForm/ContactForm';

export default function Contact() {
  const [hasForm, setHasForm] = useState(false);

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
        <button
          type="button"
          className="link"
          onClick={() => setHasForm(false)}
        >
          pls contact us
        </button>
        <div className={styles.square} />
      </div>
      <ContactForm />
    </section>
  );
}
