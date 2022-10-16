import { useState, useEffect } from 'react';
import Logo from '../Logo';
import NavBar from '../NavBar';

function Header() {
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const [navbarHidden, setNavbarHidden] = useState(false);

  const handleButtonClick = () => {
    console.log('file downloaded');
    fetch('Duke Padmore - resume.pdf').then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'Duke Padmore - resume.pdf';
        alink.click();
      });
    });
  };

  let previousScroll = 0;
  let newScroll = 0;
  const changeNavbar = () => {
    newScroll = window.scrollY;
    if (newScroll >= 80 && newScroll > previousScroll) {
      setNavbarScrolled(true);
      setNavbarHidden(true);
    } else if (newScroll >= 80 && newScroll < previousScroll) {
      setNavbarScrolled(true);
      setNavbarHidden(false);
    } else if (newScroll < 80) {
      setNavbarScrolled(false);
      setNavbarHidden(false);
    }
    previousScroll = newScroll;
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavbar);

    return () => {
      window.removeEventListener('scroll', changeNavbar);
    };
  }, []);

  return (
    <header
      className={
        !navbarHidden
          ? navbarScrolled
            ? 'header active'
            : 'header'
          : 'header hidden'
      }
    >
      <Logo />
      <div className='navigation'>
        <NavBar />
        <button className='downloadButton' onClick={handleButtonClick}>
          Resume
        </button>
      </div>
    </header>
  );
}

export default Header;
