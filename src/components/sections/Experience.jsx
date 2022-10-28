import { useState } from 'react';
import { experience } from '../../data';

function Experience() {
  // const [job, setJob] = useState(1);
  // const selectedJob = experience.find((position) => position.id === job);
  // const displayJob = (e) => {
  //   if (selectedJob.id != e.target.value) {
  //     setJob(e.target.value);
  //   }
  // };
  return (
    <section className='section experience' id='experience'>
      <h2 className='experience__title'>Relevant Work Experience</h2>
      <div className='experience__box'>
        {/* <ul className='experience__list'>
          {experience &&
            experience.map((position) => (
              <li
                key={position.id}
                className={
                  position.id === selectedJob.id
                    ? 'experience__list-item experience__list-item--selected'
                    : 'experience__list-item'
                }
                value={position.id}
                onClick={displayJob}
              >
                {position.position} @ {position.company}
              </li>
            ))}
        </ul> */}
        {/* <div className='experience__detail' key={selectedJob.id}>
          <h3 className='experience__title'>
            {selectedJob.position} @
            <span className='experience__company'> {selectedJob.company}</span>
          </h3>
          <h4 className='experience__date'>{selectedJob.year}</h4>
          <ol className='experience__missions-list'>
            {selectedJob.description.map((detail) => (
              <li className='experience__missions-item' key={detail}>
                {detail}
              </li>
            ))}
          </ol>
        </div> */}

        {experience &&
          experience.map((position) => (
            <div key={position.id} className='experience__position'>
              <h3 className='experience__title'>
                {position.position} @
                <span className='experience__company'> {position.company}</span>
              </h3>
              <h4 className='experience__date'>{position.year}</h4>
              <ol className='experience__missions-list'>
                {position.description.map((detail) => (
                  <li className='experience__missions-item' key={detail}>
                    {detail}
                  </li>
                ))}
              </ol>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Experience;
