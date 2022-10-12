import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

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
      <HashLink smooth to={'#top'} className='logo'>
        <sup>Duke</sup>
        <sub className='logo-sub'>Padmore</sub>
      </HashLink>
      {isHovering && (
        <div>
          <p className='email' onClick={sendEmail}>
            dukepadmore@gmail.com
          </p>
          <p className='linkedIn' onClick={linkedInProfile}>
            my LinkedIn
          </p>
        </div>
      )}
    </div>
  );
}

export default Logo;
