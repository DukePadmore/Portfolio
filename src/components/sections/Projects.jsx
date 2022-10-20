import { myProjects } from '../../data';
import Project from '../Project';

function Projects() {
  return (
    <section className='section projects' id='projects'>
      <h2 className='projects__title'>Projects</h2>
      <div className='projects__box'>
        {myProjects &&
          myProjects.map((project) => (
            <Project key={project.name} {...project} />
          ))}
      </div>
    </section>
  );
}

export default Projects;
