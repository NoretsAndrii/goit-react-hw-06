import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';

// Імпортуємо хук
import { useDispatch } from 'react-redux';
// Імпортуємо генератор екшену
import { addContact } from '../../redux/actions';

const contactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const initialValues = {
  name: '',
  number: '',
};

export default function ContactForm() {
  const nameFieldId = useId();
  const telFieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values.name, values.number));

    // setContacts([...contacts, { ...values, id: nanoid() }]);
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactFormSchema}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor={nameFieldId}>
          Name
        </label>
        <Field
          className={css.input}
          type="text"
          name="name"
          id={nameFieldId}
        ></Field>
        <ErrorMessage className={css.error} name="name" component="div" />

        <label className={css.label} htmlFor={telFieldId}>
          Number
        </label>
        <Field
          className={css.input}
          type="tel"
          name="number"
          id={telFieldId}
        ></Field>
        <ErrorMessage className={css.error} name="number" component="div" />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
