import { navLinks } from '../../data';
import { HashLink } from 'react-router-hash-link';

function NavBar() {
  return (
    <nav className='nav'>
      <ul className='nav__list'>
        {navLinks &&
          navLinks.map((navLink) => (
            <li key={navLink.name} className='nav__item'>
              <HashLink smooth to={navLink.url} className='nav__item-link'>
                {navLink.name}
              </HashLink>
            </li>
          ))}
      </ul>
    </nav>
  );
}

export default NavBar;
