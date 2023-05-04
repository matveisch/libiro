import { useState } from 'react';
import { FormikHelpers, useFormik } from 'formik';
import styles from './Chooser.module.scss';
import { Values } from '@/sections/Contact/ContactForm/ContactForm';

const options = ['Event/Party', 'Menu', 'Beer', 'Other'];

export default function Chooser({
  setFieldValue,
}: {
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => void;
}) {
  const [open, setOpen] = useState(false);
  const [activeSubject, setActiveSubject] = useState('Pls choose subject');

  return (
    <div
      className={styles.chooser}
      style={open ? { borderColor: '#17A8E3' } : undefined}
    >
      <div className={styles.active} onClick={() => setOpen(!open)}>
        {activeSubject}
      </div>
      {open && (
        <div className={styles.options}>
          {options.map((option) => (
            <div
              className={styles.option}
              key={option}
              style={
                activeSubject === option
                  ? { backgroundColor: '#17A8E3' }
                  : undefined
              }
              onClick={() => {
                setActiveSubject(option);
                setFieldValue('subject', option);
                setOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
