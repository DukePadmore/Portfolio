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
  return (
    <div
      className='logoBox'
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div>DP</div>
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
