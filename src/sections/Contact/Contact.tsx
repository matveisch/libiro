import styles from './Contact.module.scss';
import lines from '@public/lines.png';
import { useState } from 'react';
import ContactForm from '@/sections/Contact/ContactForm/ContactForm';
import { useTranslation } from 'next-i18next';
import ActionButton from '@/components/ActionButton/ActionButton';

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
      <ActionButton
        title={t('plsContact')}
        onclick={() => setHasForm(true)}
        style={{ marginTop: '-40px' }}
      />
      {hasForm && <ContactForm setHasForm={setHasForm} />}
    </section>
  );
}
