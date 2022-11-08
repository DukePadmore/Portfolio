// import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
// import Mail from '../../assets/mail.svg';
// import LinkedIn from '../../assets/linkedin.svg';

function Logo() {
  // const [isHovering, setIsHovering] = useState(false);

  // const handleMouseOver = () => {
  //   setIsHovering(true);
  // };

  // const handleMouseOut = () => {
  //   setIsHovering(false);
  // };

  return (
    <div
      className='logo'
      // onMouseOver={handleMouseOver}
      // onMouseOut={handleMouseOut}
    >
      <HashLink smooth to={'#'} className='logo__text animated-gradient'>
        <sup className='logo__text--duke'>Duke</sup>
        <sub className='logo__text--pad'>Padmore</sub>
      </HashLink>
      {/* {isHovering && (
        <div className='logo__contact'>
          <a
            href='https://www.linkedin.com/in/dukepadmore'
            target='_blank'
            rel='noreferrer'
            className='logo__linkedin'
          >
            <img src={LinkedIn} alt='linkedin' />
          </a>

          <a href='mailto:dukepadmore@gmail.com' className='logo__email'>
            <img src={Mail} alt='mail' />
          </a>
        </div>
      )} */}
    </div>
  );
}

export default Logo;
