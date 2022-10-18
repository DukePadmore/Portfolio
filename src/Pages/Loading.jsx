import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function Loading() {
  const titleRef = useRef();
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to('.loading-title_char', {
        y: 0,
        stagger: 0.05,
        delay: 0.2,
        duration: 0.1,
      });
    }, titleRef);
    gsap.to('.loading', {
      opacity: 0,
      delay: 1.5,
      duration: 0.6,
    });
    return () => ctx.revert();
  }, []);
  return (
    <div className='loading'>
      <h1 className='loading-title' ref={titleRef}>
        <div className='loading-title_char'>D</div>
        <div className='loading-title_char'>u</div>
        <div className='loading-title_char'>k</div>
        <div className='loading-title_char'>e</div>
        <div className='loading-title_char'>P</div>
        <div className='loading-title_char'>a</div>
        <div className='loading-title_char'>d</div>
        <div className='loading-title_char'>m</div>
        <div className='loading-title_char'>o</div>
        <div className='loading-title_char'>r</div>
        <div className='loading-title_char'>e</div>
      </h1>
    </div>
  );
}

export default Loading;
