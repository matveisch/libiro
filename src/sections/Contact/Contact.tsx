import styles from './Contact.module.scss';
import lines from '@public/lines.png';
import { useState } from 'react';
import ContactForm from '@/sections/Contact/ContactForm/ContactForm';
import { useTranslation } from 'next-i18next';

export default function Contact() {
  const [hasForm, setHasForm] = useState(false);
  const { t } = useTranslation();

  return (
    <section className={styles.contact}>
      <div
        className={styles.frame}
        style={{ backgroundImage: `url(${lines.src})` }}
      >
        <div className={styles.frameBackground}>
          <h3>{t('askDetails')}</h3>
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <button type="button" className="link" onClick={() => setHasForm(true)}>
          {t('plsContact')}
        </button>
        <div className={styles.square} />
      </div>
      {hasForm && <ContactForm setHasForm={setHasForm} />}
    </section>
  );
}
