import { HashLink } from 'react-router-hash-link';

function About() {
  return (
    <section className='section about' id='about'>
      <h2 className='about__title'>About Me</h2>
      <p className='about__desc'>
        Hi ! My name is Duke and I am a French web developer living in Canada.
        After almost 10 years of experience in Retail and Procurement, I decided
        to transition to a new career in a field that has fascinated me for as
        long as I can remember: Web Development.
      </p>
      <p className='about__desc'>
        Thanks to an intensive 6-months Fullstack JavaScript program at École
        O'Clock (Paris, France), I am now ready to take on new and exciting
        challenges as a web developer in Canada.
      </p>
      <p className='about__desc'>
        With a strong interest for anything related to front-end, my goal is to
        create intuitive, carefully designed websites.
      </p>
    </section>
  );
}

export default About;
