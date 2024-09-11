import { Field, Form, Formik } from "formik"; // Importing Formik components to create forms and manage form state
import * as Yup from 'yup'; // Importing Yup for form validation
import css from "./Filters.module.css"; // Importing CSS modules for styling
import icons from '../../assets/sprite.svg'; // Importing an SVG sprite containing icons
import { useDispatch, useSelector } from "react-redux"; // Importing hooks to interact with Redux store
import { changeFilter } from "../../redux/filters/slice"; // Importing action to update filter state in the Redux store
import { selectFilters } from "../../redux/filters/selectors"; // Importing selector to access the filters from the Redux store

// Defining a Yup validation schema for the location input
const LocationSchema = Yup.object().shape({
  location: Yup.string(),
});

const Filters = () => {
  const dispatch = useDispatch(); // Hook to dispatch actions to Redux store
  const filters = useSelector(selectFilters); // Hook to select current filters from the Redux store

  return (
    <div className={css.filter_wrapper}> {/* Wrapper for the entire filter form */}
      
      {/* Formik form setup */}
      <Formik
        initialValues={{
          location: filters.location, // Set initial location from Redux state
          form: filters.form, // Set initial vehicle type from Redux state
          features: filters.features, // Set initial selected features from Redux state
        }}
        validationSchema={LocationSchema} // Attach validation schema to form
        onSubmit={values => {
          dispatch(changeFilter(values)); // Dispatch action to update filters when form is submitted
        }}
      >
        {({ errors, touched }) => ( // Destructure Formik helpers for error handling and touched fields
          <Form> {/* Formik Form component */}
            <div className={css.input_wrapper}> {/* Wrapper for location input */}
              <label className={css.filter_title} htmlFor="location">Location</label> {/* Label for location input */}
              <Field
                className={css.input_location}
                name="location"
                type="text"
                placeholder="City" // Placeholder for location input
              />
              <svg className={css.icon} width="20" height="20"> {/* Location icon */}
                <use href={`${icons}#Map`} />
              </svg>
            </div>
            {errors.location ? ( // Conditional rendering for location input errors
              <div className={css.errorMessage}>{errors.location}</div>
            ) : null}
            
            <p className={css.filter_title}>Filters</p> {/* Filters section title */}
            <h3 className={css.equipment_title}>Vehicle equipment</h3> {/* Equipment section title */}
            
            {/* Group of checkboxes for vehicle equipment */}
            <div role="group" aria-labelledby="features-group" className={css.group_wrapper}>
              <label>
                <Field type="checkbox" name="features" value="AC" /> {/* Checkbox for AC */}
                <p>
                  <svg width="20" height="30">
                    <use href={`${icons}#ac`} />
                  </svg>
                  AC
                </p>
              </label>
              <label>
                <Field type="checkbox" name="features" value="automatic" /> {/* Checkbox for automatic transmission */}
                <p>
                  <svg width="20" height="30">
                    <use href={`${icons}#diagram`} />
                  </svg>
                  Automatic
                </p>
              </label>
              <label>
                <Field type="checkbox" name="features" value="kitchen" /> {/* Checkbox for kitchen */}
                <p>
                  <svg width="20" height="30">
                    <use href={`${icons}#cup-hot`} />
                  </svg>
                  Kitchen
                </p>
              </label>
              <label>
                <Field type="checkbox" name="features" value="TV" /> {/* Checkbox for TV */}
                <p>
                  <svg width="20" height="30">
                    <use href={`${icons}#tv`} />
                  </svg>
                  TV
                </p>
              </label>
              <label>
                <Field type="checkbox" name="features" value="bathroom" /> {/* Checkbox for bathroom */}
                <p>
                  <svg width="20" height="30">
                    <use href={`${icons}#water`} />
                  </svg>
                  Bathroom
                </p>
              </label>
            </div>

            <h3 className={css.equipment_title}>Vehicle type</h3> {/* Vehicle type section title */}
            
            {/* Group of radio buttons for vehicle type */}
            <div role="group" aria-labelledby="form-group" className={css.group_wrapper}>
              <label>
                <Field type="radio" name="form" value="panelTruck" /> {/* Radio button for panel truck */}
                <p>
                  <svg width="32" height="32">
                    <use href={`${icons}#van`} />
                  </svg>
                  Van
                </p>
              </label>
              <label>
                <Field type="radio" name="form" value="fullyIntegrated" /> {/* Radio button for fully integrated vehicle */}
                <p>
                  <svg width="32" height="32">
                    <use href={`${icons}#full`} />
                  </svg>
                  Fully Integrated
                </p>
              </label>
              <label>
                <Field type="radio" name="form" value="alcove" /> {/* Radio button for alcove vehicle */}
                <p>
                  <svg width="32" height="32">
                    <use href={`${icons}#alcove`} />
                  </svg>
                  Alcove
                </p>
              </label>
            </div>
            {errors.bodyType && touched.bodyType ? ( // Conditional rendering for vehicle type errors
              <div className={css.error}>{errors.bodyType}</div>
            ) : null}

            <button className={css.search_button} type="submit"> Search </button> {/* Submit button for the form */}
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Filters; {/* Exporting Filters component as default */}