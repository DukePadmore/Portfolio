import { useState } from 'react';

function HamburgerMenu() {
  const [menuActive, setMenuActive] = useState(false);
  const handleClick = () => {
    setMenuActive((current) => !current);
  };
  return (
    <div
      className={menuActive ? 'hamburger active' : 'hamburger'}
      onClick={handleClick}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default HamburgerMenu;
