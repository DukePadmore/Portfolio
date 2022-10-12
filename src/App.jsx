import './App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <main className='main'>
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
