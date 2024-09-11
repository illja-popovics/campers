import { NavLink } from 'react-router-dom'; // Importing NavLink for navigation with active link styling
import css from './Navigation.module.css'; // Importing CSS modules for styling
import clsx from "clsx"; // Importing clsx for conditional class names

// Function to apply active link class
const activeLinkClass = ({ isActive }) => {
  return clsx(css.navLink, isActive && css.active); // Apply 'active' class if the link is active
};

const Navigation = () => {
  return (
      <>
      <nav className={css.nav}> {/* Navigation container */}
        <NavLink to='/' className={activeLinkClass}>Home</NavLink> {/* Navigation link to Home */}
        <NavLink to='/catalog' className={activeLinkClass}>Catalog</NavLink> {/* Navigation link to Catalog */}
        <NavLink to='/favourites' className={activeLinkClass}>Favourites</NavLink> {/* Navigation link to Favourites */}
      </nav>
      </>
  )
}

export default Navigation; // Exporting Navigation component as default