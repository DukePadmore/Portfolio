function Project({ name, description, stack, image }) {
  return (
    <div className='project-item'>
      <img className='project-image' src={image} alt={name} />
      <h3 className='project-name'>{name}</h3>
      <p className='project-desc'>{description}</p>
      <div className='project-techs'>
        {stack.map((technology) => (
          <span className='tech' key={technology}>
            {technology}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Project;
