import Evzi from "../assets/Evzi.jpg";
import Bonnie from "../assets/EvziBonnie.jpeg";
import EvziSport from "../assets/EvziSport.jpg";

function About() {
  return (
    <section id="about" className="py-32 px-10 md:py-40 md:px-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-8xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start justify-center">
            <div className="">
              <div className="inline-block mb-4 py-1.5 text-primary rounded-lg text-md uppercase">
                About me{" "}
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6 text-balance">
                Hey, it's Evzi
              </h2>
              <div className="basis-md">
                <p className="mb-4">
                  I’m a developer based in Oslo, Norway, with a background in
                  SEO and SEM. I have a master’s degree in Economics and
                  Marketing, completed a one-year IT study program at OsloMet,
                  and a Frontend developer course from Scrimba. These days I
                  work as a SAP developer with making WordPress website on the
                  side, but web development is still the area I enjoy exploring
                  the most.
                </p>

                <p className="mb-6">
                  I’ve been interested in programming since I was a teenager,
                  but I thought I didn't have what it take. Few years ago I
                  decided that wasn't true and started my journey with different
                  courses and a year at university. What I enjoy most is
                  figuring things out, fixing problems, and making ideas
                  actually work.
                </p>
                <p className="mb-6">
                  I’m naturally curious, so I tend to fall into rabbit holes
                  learning new technologies or experimenting with projects just
                  because they sound interesting. Outside of coding, you’ll
                  usually find me reading fantasy books, watching anime, doing
                  calisthenics, trying not to die during a run, or hanging out
                  with my dog Bonnie.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 justify-center items-center md:grid-cols-2">
              <img className="rounded-md md:col-span-full" src={Evzi} alt="" />

              <img className="object-cover rounded-md" src={EvziSport} alt="" />

              <img className="object-cover rounded-md" src={Bonnie} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
