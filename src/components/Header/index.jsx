import { useState, useEffect } from 'react';
import Logo from '../Logo';
import NavBar from '../NavBar';

function Header() {
  const [navbarScrolled, setNavbarScrolled] = useState(false);

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

  const changeNavbar = () => {
    if (window.scrollY >= 80) {
      setNavbarScrolled(true);
    } else {
      setNavbarScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavbar);

    return () => {
      window.removeEventListener('scroll', changeNavbar);
    };
  }, [window.scrollY]);

  return (
    <header className={navbarScrolled ? 'header active' : 'header'}>
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
