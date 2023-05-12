import * as Yup from 'yup';
import { Formik, Form, FormikHelpers, Field } from 'formik';
import styles from './ContactForm.module.scss';
import ErrorMessage from '@/sections/Contact/ErrorMessage/ErrorMessage';
import { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'next-i18next';
import GeneralError from '@/sections/Contact/GeneralError/GeneralError';

export interface Values {
  subject: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm({
  setHasForm,
}: {
  setHasForm: Dispatch<SetStateAction<boolean>>;
}) {
  const { t } = useTranslation();

  let validationShape = {
    name: Yup.string().required(
      t('inputName') || 'This field is required. Please input your name.'
    ),
    email: Yup.string()
      .email(
        t('inputEmail') || 'This field is required. Please input a valid email.'
      )
      .required(
        t('inputEmail') || 'This field is required. Please input a valid email.'
      ),
    phone: Yup.string(),
    message: Yup.string(),
  };

  const contactSchema = Yup.object().shape(validationShape);

  return (
    <Formik
      initialValues={{
        subject: '',
        name: '',
        email: '',
        phone: '',
        message: '',
      }}
      validationSchema={contactSchema}
      onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
        console.log(values);
        setSubmitting(false);
      }}
    >
      {({ errors, touched, isValid, isSubmitting }) => (
        <div className={styles.contactForm}>
          <Form>
            <button
              className={styles.closeButton}
              type="button"
              onClick={() => setHasForm(false)}
            >
              <span>x</span>
            </button>
            <h1 className={styles.pleaseCall}>{t('orCall')}</h1>
            {!isValid ||
              (isSubmitting && <GeneralError isSubmitting={isSubmitting} />)}
            <div className={styles.inputsWrapper}>
              {/*<Chooser setFieldValue={setFieldValue} />*/}
              <div className={styles.singleInput}>
                <Field
                  name="name"
                  placeholder={t('yourName')}
                  style={
                    errors.name && touched.name
                      ? { borderColor: '#E04562' }
                      : undefined
                  }
                />
                {errors.name && touched.name ? (
                  <ErrorMessage message={errors.name} />
                ) : null}
              </div>
              <div className={styles.singleInput}>
                <Field
                  name="email"
                  placeholder={t('emailAddress')}
                  style={
                    errors.email && touched.email
                      ? { borderColor: '#E04562' }
                      : undefined
                  }
                />
                {errors.email && touched.email ? (
                  <ErrorMessage message={errors.email} />
                ) : null}
              </div>
              <div className={styles.singleInput}>
                <Field
                  name="phone"
                  placeholder={t('phoneNumber')}
                  style={
                    errors.phone && touched.phone
                      ? { borderColor: '#E04562' }
                      : undefined
                  }
                />
                {errors.phone && touched.phone ? (
                  <ErrorMessage message={errors.phone} />
                ) : null}
              </div>
              {/*<div className={styles.singleInput}>*/}
              {/*  <Field*/}
              {/*    name="message"*/}
              {/*    placeholder={t('enterMessage')}*/}
              {/*    as="textarea"*/}
              {/*    maxLength={180}*/}
              {/*    onKeyUp={(e: ChangeEvent<HTMLTextAreaElement>) =>*/}
              {/*      setCount(e.target.value.length)*/}
              {/*    }*/}
              {/*    style={*/}
              {/*      errors.message && touched.message*/}
              {/*        ? { borderColor: '#E04562' }*/}
              {/*        : undefined*/}
              {/*    }*/}
              {/*  />*/}
              {/*  {errors.message && touched.message ? (*/}
              {/*    <ErrorMessage message={errors.message} />*/}
              {/*  ) : null}*/}
              {/*  <span className={styles.count}>{`${count}/180`}</span>*/}
              {/*</div>*/}
            </div>
            <button type="submit" className={styles.sendButton}>
              {'צור/י איתנו קשר, ונחזור אלייך במהירות!'}
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
}
