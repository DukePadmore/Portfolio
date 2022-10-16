import { useState } from 'react';
import { experience } from '../../data';

function Experience() {
  const [job, setJob] = useState(1);
  const selectedJob = experience.find((position) => position.id === job);
  const displayJob = (e) => {
    if (selectedJob.id != e.target.value) {
      console.log(e.target.value);
      setJob(e.target.value);
    }
  };
  return (
    <section className='section experience' id='experience'>
      <h2>Relevant Work Experience</h2>
      <ul>
        {experience &&
          experience.map((position) => (
            <li
              key={position.id}
              className={position.id === selectedJob.id ? 'selected' : ''}
              value={position.id}
              onClick={displayJob}
            >
              {position.position} @ {position.company}
            </li>
          ))}
      </ul>
      <div key={selectedJob.id}>
        <h3>
          {selectedJob.position} @<span> {selectedJob.company}</span>
        </h3>
        <h4>{selectedJob.year}</h4>
        <ol>
          {selectedJob.description.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Experience;
