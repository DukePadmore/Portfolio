import { useState } from 'react';

function Project({ name, description, stack, image, url, repo }) {
  const [isProjectHovered, setIsProjectHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsProjectHovered(true);
  };
  const handleMouseLeave = () => {
    setIsProjectHovered(false);
  };
  return (
    <div
      className='project'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <figure className='project__figure'>
        <img
          className='project__image'
          src={`/src/assets/${image}.png`}
          alt={name}
        />
        <figcaption
          className={
            isProjectHovered
              ? 'project__image-caption'
              : 'project__image-caption project__image-caption--hidden'
          }
        >
          {url ? (
            <a href={url} target='_blank' rel='noreferrer'>
              Website
            </a>
          ) : (
            ''
          )}
          <a href={repo} target='_blank' rel='noreferrer'>
            GitHub repository
          </a>
        </figcaption>
      </figure>
      <h3 className='project__name'>{name}</h3>
      <p className='project__desc'>{description}</p>
      <div className='project__stack'>
        {stack.map((technology) => (
          <span
            className={`project__tech project__tech--${technology.toLowerCase()}`}
            key={technology}
          >
            {technology}
          </span>
        ))}
      </div>
      <div className='project__links-mobile'>
        {url ? (
          <a href={url} target='_blank' rel='noreferrer'>
            <span className='material-symbols-sharp'>link</span>
          </a>
        ) : (
          ''
        )}
        <a href={repo} target='_blank' rel='noreferrer'>
          <span className='material-symbols-sharp'>code</span>
        </a>
      </div>
    </div>
  );
}

export default Project;
