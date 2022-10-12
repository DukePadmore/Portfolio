function Project({ name, description, technologies }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      {technologies.map((technology) => (
        <span key={technology}>{technology}</span>
      ))}
    </div>
  );
}

export default Project;
