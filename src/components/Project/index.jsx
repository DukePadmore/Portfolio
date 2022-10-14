function Project({ name, description, technologies, image }) {
  return (
    <div className='projects-item'>
      {/* <img src={image} alt={name} /> */}
      <h3>{name}</h3>
      <p>{description}</p>
      {technologies.map((technology) => (
        <span key={technology}>{technology}</span>
      ))}
    </div>
  );
}

export default Project;
