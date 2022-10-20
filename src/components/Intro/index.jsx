import IconCloud from '../IconCloud';

function Intro() {
  return (
    <section className='intro'>
      <h1 className='intro__title'>
        Hi, my name is <span className='intro__title--focus'>Duke.</span> I'm a
        front-end web developer based in Montreal, Canada.
      </h1>
      <IconCloud />
    </section>
  );
}

export default Intro;
