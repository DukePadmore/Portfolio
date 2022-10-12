import { experience } from '../../data';

function Experience() {
  return (
    <section id='experience'>
      <h2>Relevant Work Experience</h2>
      <ul>
        {experience &&
          experience.map((position) => (
            <li key={position.id}>
              {position.position} @ {position.company}
            </li>
          ))}
      </ul>
      {experience &&
        experience.map((position) => (
          <div key={position.id}>
            <h3>
              {position.position} @<span> {position.company}</span>
            </h3>
            <h4>{position.year}</h4>
            <ol>
              {position.description.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ol>
          </div>
        ))}
    </section>
  );
}

export default Experience;
