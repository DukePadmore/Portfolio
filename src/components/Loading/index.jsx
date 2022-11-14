import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function Loading() {
  const titleRef = useRef(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to('.loading__title-char', {
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
      <h1 className='loading__title' ref={titleRef}>
        <div className='loading__title-char'>D</div>
        <div className='loading__title-char'>u</div>
        <div className='loading__title-char'>k</div>
        <div className='loading__title-char'>e</div>
        <div className='loading__title-char'>P</div>
        <div className='loading__title-char'>a</div>
        <div className='loading__title-char'>d</div>
        <div className='loading__title-char'>m</div>
        <div className='loading__title-char'>o</div>
        <div className='loading__title-char'>r</div>
        <div className='loading__title-char'>e</div>
      </h1>
    </div>
  );
}

export default Loading;
