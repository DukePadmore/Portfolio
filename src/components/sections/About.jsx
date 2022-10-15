import { HashLink } from 'react-router-hash-link';

function About() {
  return (
    <section className='section' id='about'>
      <h2>About Me</h2>
      <p>
        Hi ! My name is Duke and I am a French web developer living in Canada.
        After almost 10 years of experience in Retail and Procurement, I decided
        to transition to a new career in a field that has fascinated me for as
        long as I can remember: Web Development. Thanks to an intensive 6-months
        Fullstack JavaScript program at École O'Clock (Paris, France), I am now
        ready to take on new challenges as a web developer in Canada. With a
        strong interest for anything related to front-end, my goal is to create
        intuitive, carefully designed websites.
      </p>

      {/* <HashLink smooth to='/#contact'>
        I'd be happy to tell you more about me.
      </HashLink> */}
      {/* <ul>
        Here are a few technologies I've been working with lately:
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Redux</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>Sass</li>
        <li>Tailwind CSS</li>
      </ul> */}
    </section>
  );
}

export default About;
