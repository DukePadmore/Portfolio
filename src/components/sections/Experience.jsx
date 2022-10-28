import { experience } from '../../data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import nike from '../../assets/linkedin.svg';

function Experience() {
  return (
    <section className='section experience' id='experience'>
      <h2 className='experience__title'>Relevant Work Experience</h2>
      {/* <div className='experience__box'> */}
      <Swiper
        modules={[Navigation]}
        navigation
        className='experience__box'
        centeredSlides
        slidesPerView='auto'
      >
        {experience &&
          experience.map((position) => (
            <SwiperSlide
              className={`experience__position experience__position--${position.class}`}
              key={position.id}
            >
              <h3 className='experience__title'>
                {position.position}
                {/* <span className='experience__company'>{position.company}</span> */}
              </h3>
              <h3 className='experience__company'>{position.company}</h3>
              <h4 className='experience__date'>{position.year}</h4>
              <ul className='experience__missions-list'>
                {position.description.map((detail) => (
                  <li className='experience__missions-item' key={detail}>
                    {detail}
                  </li>
                ))}
              </ul>
            </SwiperSlide>
          ))}
      </Swiper>
      {/* </div> */}
    </section>
  );
}

export default Experience;
