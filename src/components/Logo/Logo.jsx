import css from './Logo.module.css'; // Importing CSS modules for styling
import icons from '../../assets/sprite.svg'; // Importing SVG icons
import { Link } from 'react-router-dom'; // Importing Link component for navigation

const Logo = () => {
  return (
      <Link to="/" className={css.logo}> {/* Link component for navigation to the homepage */}
          <svg width="136" height="16"> {/* SVG element for displaying the logo */}
            <use href={`${icons}#Logo`} /> {/* Using the Logo icon from the sprite */}
          </svg>
      </Link>
  )
}

export default Logo; // Exporting Logo component as default