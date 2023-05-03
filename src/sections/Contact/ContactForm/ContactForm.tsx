import * as Yup from 'yup';
import { Formik, Form, FormikHelpers, Field } from 'formik';
import styles from './ContactForm.module.scss';
import ErrorMessage from '@/sections/Contact/ErrorMessage/ErrorMessage';

interface Values {
  subject: 'Event/Party' | 'Menu' | 'Beer' | 'Other' | '';
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  let validationShape = {
    name: Yup.string().required(
      'This field is required. Please input your name.'
    ),
    email: Yup.string()
      .email('Invalid email')
      .required('This field is required. Please input a valid email.'),
    phone: Yup.string(),
    message: Yup.string().required().max(180, 'Message is too long'),
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
      {({ errors, touched }) => (
        <div className={styles.contactForm}>
          <Form>
            <div className={styles.closeButton}>
              <span>x</span>
            </div>
            <div className={styles.inputsWrapper}>
              <div className={styles.singleInput}>
                <Field
                  name="name"
                  placeholder="Your name"
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
                <Field name="email" placeholder="Email Address" />
                {errors.email && touched.email ? (
                  <ErrorMessage message={errors.email} />
                ) : null}
              </div>
              <div className={styles.singleInput}>
                <Field name="phone" placeholder="Phone Number" />
                {errors.phone && touched.phone ? (
                  <ErrorMessage message={errors.phone} />
                ) : null}
              </div>
              <div className={styles.singleInput}>
                <Field
                  name="message"
                  placeholder="Enter your message..."
                  as="textarea"
                />
                {errors.message && touched.message ? (
                  <ErrorMessage message={errors.message} />
                ) : null}
              </div>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
}
