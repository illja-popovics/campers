import css from './Layout.module.css'; // Importing CSS modules for styling
import Navigation from '../Navigation/Navigation'; // Importing Navigation component
import Logo from '../Logo/Logo'; // Importing Logo component
import { Outlet } from 'react-router-dom'; // Importing Outlet component to render matching child routes

const Layout = () => {
    return (
    <>
        {/* Header section with Logo and Navigation */}
        <header className={css.header}>
            <Logo /> {/* Logo component for displaying site logo */}
            <Navigation /> {/* Navigation component for site navigation links */}
        </header>
        
        {/* Main section to render nested routes */}
        <main>
            <Outlet /> {/* Outlet component renders the matched child routes */}
        </main>
    </>
  )
}

export default Layout; // Exporting Layout component as default