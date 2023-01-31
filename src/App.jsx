import { useEffect, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './sass/main.scss';
import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Footer from './components/Footer';
import Loading from './components/Loading';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const transitionOnLoad = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        delay: delay,
        duration: duration,
      }
    );
  };
  const transitionOnScroll = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        delay: delay,
        duration: duration,
        scrollTrigger: { trigger: elem },
      }
    );
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useLayoutEffect(() => {
    if (!isLoading) {
      transitionOnLoad('.intro', 0.3, 0.7);
      transitionOnScroll('#about', 0.5, 0.7);
      transitionOnScroll('#projects', 0.5, 0.7);
      transitionOnScroll('#experience', 0.5, 0.7);
      transitionOnScroll('#contact', 0.5, 0.7);
    }
  }, [isLoading]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className='App'>
      <Header />
      <main className='main'>
        <Intro />
        <Projects />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
