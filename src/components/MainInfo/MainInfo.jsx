import { Link } from 'react-router-dom'; // Importing Link component for navigation
import css from './MainInfo.module.css'; // Importing CSS modules for styling

const MainInfo = () => {
  return (
     <section className={css.main_container}> {/* Container for the main section */}
          <div className={css.main_wrapper}> {/* Wrapper for aligning content */}
              <h1 className={css.main_title}>Campers of your dreams</h1> {/* Main heading */}
              <p className={css.main_text}>You can find everything you want in our catalog</p> {/* Descriptive text */}
              <Link to="/catalog"> {/* Navigation link to the catalog page */}
                <button type='button' className={css.main_button}> {/* Button for viewing the catalog */}
                  View Now
                </button>
              </Link>
          </div>
     </section>
  )
}

export default MainInfo; // Exporting MainInfo component as default