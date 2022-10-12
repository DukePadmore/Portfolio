import Logo from '../Logo';
import NavBar from '../NavBar';

function Header() {
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
    <header className='header'>
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
