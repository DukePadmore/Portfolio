import { myProjects } from '../../data';
import Project from '../Project';

function Projects() {
  return (
    <section id='projects'>
      <h2>Projects</h2>
      {myProjects &&
        myProjects.map((project) => (
          <Project key={project.name} {...project} />
        ))}
    </section>
  );
}

export default Projects;
