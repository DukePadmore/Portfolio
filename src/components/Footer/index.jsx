import LinkedIn from '../../assets/linkedin.svg';
import GitHub from '../../assets/github.svg';

function Footer() {
  return (
    <footer className='footer'>
      <p>© Duke Padmore 2022</p>
      <div>
        <a
          href='https://www.linkedin.com/in/dukepadmore'
          target='_blank'
          rel='noreferrer'
        >
          <img className='footer-linkedin' src={LinkedIn} alt='linkedin' />
        </a>
        <a
          href='https://www.linkedin.com/in/dukepadmore'
          target='_blank'
          rel='noreferrer'
        >
          <img className='footer-github' src={GitHub} alt='github' />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
