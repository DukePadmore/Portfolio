import { useState } from 'react';
import { experience } from '../../data';

function Experience() {
  const [job, setJob] = useState(1);
  const selectedJob = experience.find((position) => position.id === job);
  const displayJob = (e) => {
    if (selectedJob.id != e.target.value) {
      setJob(e.target.value);
    }
  };
  return (
    <section className='section experience' id='experience'>
      <h2>Relevant Work Experience</h2>
      <div className='experience-container'>
        <ul className='experience-list'>
          {experience &&
            experience.map((position) => (
              <li
                key={position.id}
                className={
                  position.id === selectedJob.id
                    ? 'experience-item selected'
                    : 'experience-item'
                }
                value={position.id}
                onClick={displayJob}
              >
                {position.position} @ {position.company}
              </li>
            ))}
        </ul>
        <div className='experience-detail' key={selectedJob.id}>
          <h3>
            {selectedJob.position} @<span> {selectedJob.company}</span>
          </h3>
          <h4>{selectedJob.year}</h4>
          <ol className='missions-list'>
            {selectedJob.description.map((detail) => (
              <li className='missions-item' key={detail}>
                {detail}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Experience;
