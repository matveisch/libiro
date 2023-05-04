import * as Yup from 'yup';
import { Formik, Form, FormikHelpers, Field } from 'formik';
import styles from './ContactForm.module.scss';
import ErrorMessage from '@/sections/Contact/ErrorMessage/ErrorMessage';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import Chooser from '@/sections/Contact/Chooser/Chooser';

interface Values {
  subject: 'Event/Party' | 'Menu' | 'Beer' | 'Other' | '';
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
  const [count, setCount] = useState(0);

  let validationShape = {
    name: Yup.string().required(
      'This field is required. Please input your name.'
    ),
    email: Yup.string()
      .email('Invalid email')
      .required('This field is required. Please input a valid email.'),
    phone: Yup.string(),
    message: Yup.string().max(180, 'Message is too long'),
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
            <button
              className={styles.closeButton}
              type="button"
              onClick={() => setHasForm(false)}
            >
              <span>x</span>
            </button>
            <div className={styles.inputsWrapper}>
              <div className={styles.singleInput}>
                <Chooser />
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
                <Field
                  name="email"
                  placeholder="Email Address"
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
                  placeholder="Phone Number"
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
              <div className={styles.singleInput}>
                <Field
                  name="message"
                  placeholder="Enter your message..."
                  as="textarea"
                  onKeyUp={(e: ChangeEvent<HTMLTextAreaElement>) =>
                    setCount(e.target.value.length)
                  }
                  style={
                    errors.message && touched.message
                      ? { borderColor: '#E04562' }
                      : undefined
                  }
                />
                {errors.message && touched.message ? (
                  <ErrorMessage message={errors.message} />
                ) : null}
                <span className={styles.count}>{`${count}/180`}</span>
              </div>
            </div>
            <button type="submit" className={styles.sendButton}>
              Send Message
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
}
