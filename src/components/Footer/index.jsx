import LinkedIn from '../../assets/linkedin.svg';
import GitHub from '../../assets/github.svg';

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__text'>© Duke Padmore 2023</p>
      <div className='footer__medias'>
        <a
          className='footer__link'
          href='https://www.linkedin.com/in/dukepadmore'
          target='_blank'
          rel='noreferrer'
        >
          <img className='footer__icon' src={LinkedIn} alt='linkedin' />
        </a>
        <a
          className='footer__link'
          href='https://github.com/DukePadmore'
          target='_blank'
          rel='noreferrer'
        >
          <img className='footer__icon' src={GitHub} alt='github' />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
