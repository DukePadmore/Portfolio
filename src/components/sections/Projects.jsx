import { myProjects } from '../../data';
import Project from '../Project';

function Projects() {
  return (
    <>
      <h2>Projects</h2>
      <section id='projects'>
        {myProjects &&
          myProjects.map((project) => (
            <Project key={project.name} {...project} />
          ))}
      </section>
    </>
  );
}

export default Projects;
