import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import Mail from '../../assets/mail.svg';
import LinkedIn from '../../assets/linkedin.svg';

function Logo() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const sendEmail = () => {
    console.log('email sent');
  };

  const linkedInProfile = () => {
    console.log('linkedIn Profile');
  };

  return (
    <div
      className='logoBox'
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <HashLink smooth to={'#'} className='logo'>
        <sup className='logo-sup'>Duke</sup>
        <sub className='logo-sub'>Padmore</sub>
      </HashLink>
      {isHovering && (
        <div className='logo-contacts'>
          <a
            href='https://www.linkedin.com/in/dukepadmore'
            target='_blank'
            rel='noreferrer'
            className='logo-linkedIn'
          >
            <img src={LinkedIn} alt='linkedin' />
          </a>

          <a href='mailto:dukepadmore@gmail.com' className='logo-email'>
            <img src={Mail} alt='mail' />
          </a>
        </div>
      )}
    </div>
  );
}

export default Logo;
