import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
function Loading() {
  const titleRef = useRef();
  useEffect(() => {
    let ctx = gsap.context(() => {
      // gsap.fromTo(
      //   '.loading-title_char',
      //   {
      //     y: 100,
      //     opacity: 0,
      //   },
      //   {
      //     y: 0,
      //     opacity: 1,
      //     stagger: 0.05,
      //     delay: 0.2,
      //     duration: 0.4,
      //   }
      // );
      gsap.to('.loading-title_char', {
        y: 0,
        stagger: 0.05,
        delay: 0.2,
        duration: 0.1,
      });
    }, titleRef);
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
