import { useState } from 'react';
import { navLinks } from '../../data';
import { HashLink } from 'react-router-hash-link';
import { useEffect } from 'react';

function HamburgerMenu() {
  const [menuActive, setMenuActive] = useState(false);
  const handleClick = () => {
    setMenuActive((current) => !current);
    document.body.classList.toggle('fixed-body');
  };

  return (
    <>
      <div
        className={menuActive ? 'hamburger active' : 'hamburger'}
        onClick={handleClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        className={
          menuActive ? 'hamburger__nav active' : 'hamburger__nav inactive'
        }
      >
        <ul className='hamburger__list'>
          {navLinks &&
            navLinks.map((navLink) => (
              <li key={navLink.name} className='hamburger__item'>
                <HashLink
                  smooth
                  to={navLink.url}
                  className='hamburger__item-link'
                  onClick={handleClick}
                >
                  {navLink.name}
                </HashLink>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default HamburgerMenu;
