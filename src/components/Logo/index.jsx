import { HashLink } from 'react-router-hash-link';

function Logo() {
  return (
    <div className='logo'>
      <HashLink smooth to={'#'} className='logo__text animated-gradient'>
        <sup className='logo__text--duke'>Duke</sup>
        <sub className='logo__text--pad'>Padmore</sub>
      </HashLink>
    </div>
  );
}

export default Logo;
