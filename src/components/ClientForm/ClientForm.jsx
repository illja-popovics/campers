import css from './ClientForm.module.css'; // Importing the CSS module for styling
import { Field, Form, Formik } from "formik"; // Importing components from Formik for form handling
import * as Yup from 'yup'; // For form validation
import DatePicker from 'react-datepicker'; // For selecting the booking date
import 'react-datepicker/dist/react-datepicker.css'; // DatePicker's default styles
import { registerLocale } from "react-datepicker"; // To register a locale for the DatePicker
import enGB from 'date-fns/locale/en-GB'; // British English locale for the DatePicker
import toast from 'react-hot-toast'; // For toast notifications

// Register the British English locale for DatePicker
registerLocale('en-GB', enGB);

// Schema for validating form fields using Yup
const Schema = Yup.object().shape({
    name: Yup.string().required('Name is required'), // Name is a required field
    email: Yup.string().email('Invalid email').required('Email is required'), // Email is required and must be valid
    comment: Yup.string(), // Comment is optional
    date: Yup.date().required('Date is required'), // Date is required and must be a valid date
});

const ClientForm = () => {
  return (
      <div className={css.form_wrapper}>
          {/* Form header */}
          <h3 className={css.client_title}>Book your campervan now</h3>
          <p className={css.client_text}>Stay connected! We are always ready to help you.</p>

          {/* Formik handles form state, validation, and submission */}
          <Formik
              initialValues={{
                  name: '',   // Initial value for name
                  email: '',  // Initial value for email
                  date: '',   // Initial value for date
                  comment: '' // Initial value for comment
              }}
              validationSchema={Schema} // Form validation with Yup
              onSubmit={(values, { resetForm }) => {    
                  toast.success('You successfully sent the form!'); // Success toast notification
                  resetForm(); // Reset the form after successful submission
              }}
            >
              {({ errors, values, touched, setFieldValue }) => (
                  <Form>
                      <div className={css.input_wrapper}>
                          {/* Name field */}
                          <label htmlFor="name"></label>
                          <Field
                              className={css.input_text}
                              name="name"
                              type="text"
                              placeholder="Name*"/>
                          {touched.name && errors.name ? (
                              <div className={css.errorMessage}>{errors.name}</div>
                          ) : null}

                          {/* Email field */}
                          <label htmlFor="email"></label>
                          <Field
                              className={css.input_text}
                              name="email"
                              type="email"
                              placeholder="Email*" />
                          {touched.email && errors.email ? (
                              <div className={css.errorMessage}>{errors.email}</div>
                          ) : null}

                          {/* DatePicker for booking date */}
                          <label htmlFor="date"></label>
                          <DatePicker
                              selected={values.date}
                              onChange={(date) => setFieldValue('date', date)} // Handle date change
                              className={css.input_text}
                              placeholderText="Booking date*"
                              locale="en-GB" />
                          {touched.date && errors.date ? (
                              <div className={css.errorMessage}>{errors.date}</div>
                          ) : null}

                          {/* Comment field */}
                          <label htmlFor="comment"></label>
                          <Field
                              className={css.input_comment}
                              name="comment"
                              as="textarea"
                              placeholder="Comment" />
                      </div>

                      {/* Submit button */}
                      <button className={css.send_button} type="submit"> Send </button>
                  </Form>
              )}
          </Formik>
      </div>
  )
}

export default ClientForm;