import styles from './Contact.module.scss';
import lines from '@public/lines.png';
import { useState } from 'react';
import ContactForm from '@/sections/Contact/ContactForm/ContactForm';
import { useTranslation } from 'next-i18next';
import ActionButton from '@/components/ActionButton/ActionButton';
import UpdatedForm from './UpdatedForm/UpdatedForm';

export default function Contact({ text }: { text?: string }) {
  const [hasForm, setHasForm] = useState(false);
  const { t } = useTranslation();

  return (
    <section className={styles.contact}>
      <div className={styles.overlay} />
        <div
          className={styles.frame}
          // style={{ backgroundImage: `url(${lines.src})` }}
        >
          <div className={styles.frameBackground}>
            <h3>צרו איתנו קשר</h3>
            <h2>{text}</h2>
          </div>
          <UpdatedForm />
        </div>
        {/* <ActionButton
        title={t('plsContact')}
        onclick={() => setHasForm(true)}
        style={{ marginTop: '-40px' }}
      /> */}
        {hasForm && <ContactForm setHasForm={setHasForm} />}
    </section>
  );
}
