import * as Yup from 'yup';
import { Formik, Form, FormikHelpers, Field } from 'formik';
import { useTranslation } from 'next-i18next';
import ErrorMessage from '@/sections/Contact/ErrorMessage/ErrorMessage';
import GeneralError from '@/sections/Contact/GeneralError/GeneralError';
import styles from './UpdatedForm.module.scss';

export interface Values {
  name: string;
  email: string;
  phone: string;
}

export default function UpdatedForm() {
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
    phone: Yup.string()
      .required(
        t('inputPhone') || 'This field is required. Please input a valid phone number.'
      )
  };

  const contactSchema = Yup.object().shape(validationShape);

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        phone: '',
      }}
      validationSchema={contactSchema}
      onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
        console.log(values);
        setSubmitting(false);
      }}
    >
      {({ errors, touched, isValid, isSubmitting }) => (
        <div className={styles.updatedForm}>
          <Form>
            {!isValid ||
              (isSubmitting && <GeneralError isSubmitting={isSubmitting} />)}
            <div className={styles.inputsWrapper}>
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
                    errors.name && touched.name
                      ? { borderColor: '#E04562' }
                      : undefined
                  }
                />
                {errors.email && touched.name ? (
                  <ErrorMessage message={errors.email} />
                ) : null}
              </div>
              <div className={styles.singleInput}>
                <Field
                  name="phone"
                  placeholder={t('phoneNumber')}
                  style={
                    errors.phone && touched.name
                      ? { borderColor: '#E04562' }
                      : undefined
                  }
                />
                {errors.phone && touched.name ? (
                  <ErrorMessage message={errors.phone} />
                ) : null}
              </div>
            </div>
            <button type="submit" className={styles.sendButton}>
              <span>{'צור/י איתנו קשר, ונחזור אלייך במהירות!'}</span>
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
}
