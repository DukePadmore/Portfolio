import IconCloud from '../IconCloud';
import arrow from '../../assets/arrow.svg';

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
          Hi, my name is
          <span className='intro__title--focus'>Duke.</span>
          I'm a{' '}
          <span className='animated-gradient'>
            front-end web developer
          </span>{' '}
          based in Montreal, Canada.
        </h1>
        <button className='intro__button' onClick={handleButtonClick}>
          Download my resume
        </button>
        {/* <div>
          <img src={arrow} alt='' className='intro__scroll-arrow' />
          <p>Scroll</p>
        </div> */}
      </div>
      <IconCloud />
    </section>
  );
}

export default Intro;
