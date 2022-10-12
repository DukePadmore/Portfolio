import { navLinks } from '../../data';
import { HashLink } from 'react-router-hash-link';

function NavBar() {
  return (
    <nav>
      <ul className='nav'>
        {navLinks &&
          navLinks.map((navLink) => (
            <li key={navLink.name} className='nav-item'>
              <HashLink smooth to={navLink.url} className='nav-item-link'>
                {navLink.name}
              </HashLink>
            </li>
          ))}
      </ul>
    </nav>
  );
}

export default NavBar;
