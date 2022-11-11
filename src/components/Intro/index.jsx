import IconCloud from '../IconCloud';
import arrow from '../../assets/arrow.svg';
import { HashLink } from 'react-router-hash-link';

function Intro() {
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

  return (
    <section className='intro'>
      <div>
        <h1 className='intro__title'>
          Hi, my name is Duke. I'm a
          <span className='intro__title--focus animated-gradient'>
            Web Developer.
          </span>
        </h1>
        <button className='intro__button' onClick={handleButtonClick}>
          Download my resume
        </button>
        <div className='intro__scroll'>
          <HashLink smooth to='#projects' className='nav__item-link'>
            <img src={arrow} alt='' className='intro__scroll-arrow' />
          </HashLink>
        </div>
      </div>
      <IconCloud />
    </section>
  );
}

export default Intro;
