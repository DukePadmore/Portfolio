import IconCloud from '../IconCloud';

function Intro() {
  return (
    <section className='intro'>
      {/* <div className='intro-box'>
        <p>Hi, my name is </p>
        <h1>Duke.</h1>
        <p>I'm a front-end web developer based in Montreal, Canada. </p>
      </div> */}
      <h1 className='intro__title'>
        Hi, my name is <span className='intro__title--focus'>Duke.</span> I'm a
        front-end web developer based in Montreal, Canada.
      </h1>
      <div>
        <IconCloud />
      </div>
    </section>
  );
}

export default Intro;
