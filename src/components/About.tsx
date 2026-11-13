import Evzi from "../assets/Evzi.webp";

function About() {
  return (
    <section id="about" className="py-20 px-10 md:py-24 md:px-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block mb-4 py-1.5 text-primary-strong rounded-lg text-md uppercase">
            About me{" "}
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-3 text-balance">
            Hey, it's Evzi
          </h2>
          <div aria-hidden="true" className="h-1 w-10 rounded-full bg-accent mb-6" />
          <div className="flow-root">
            <div>
              <img
                className="rounded-md w-full mb-6 md:w-1/2 md:float-right md:ml-12 md:mb-4 md:mt-1.5"
                src={Evzi}
                alt="Portrait of Evzi Stara"
                width={1200}
                height={960}
                loading="lazy"
                decoding="async"
              />
              <div className="md:text-justify">
                <p className="mb-4">
                  I'll be honest. I am not the typical corporate type. I don’t
                  like working at a fast pace, I don’t do things at the "cutting
                  edge," and the only thing I’m passionate about is getting home
                  before rush hour.
                </p>
                <p className="mb-4">
                  I like tech. It took me a few years to figure out what I
                  actually want to do, and now I’ve landed on data. I work as a
                  consultant at the Norwegian Armed Forces with SAP BW, so data
                  is one thing I’m certainly not lacking :) Now I’m on my way
                  toward orienting myself more toward data engineering. I have a
                  background working 4 years as an SEO and SEM consultant. I
                  have a master’s degree in economics and marketing, a one-year
                  IT program from OsloMet, and a frontend developer course from
                  Scrimba. Currently, I’m diving deeper into SQL and Python.
                </p>
                <p className="mb-4">
                  I’m an honest and direct person. I’m also curious, love to
                  learn and explore, and frequently come up with advice and
                  improvements no one asked for :) Outside of tech, you’ll
                  usually find me reading fantasy books, watching anime, doing
                  calisthenics or hanging out with my dog Bonnie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
