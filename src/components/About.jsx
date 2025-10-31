import Evzi from "../assets/Evzi.jpg";
import Bonnie from "../assets/EvziBonnie.jpeg";
import EvziSport from "../assets/EvziSport.jpg";

function About() {
  return (
    <section id="about" className="py-32 px-10 md:py-40 md:px-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            About Me
          </h2>
          <div>
            <p className="mb-4">
              I am a Frontend developer based in Oslo, Norway. I have a master’s
              degree in Economics and Marketing, one year IT study program from
              OsloMet and a Frontend developer course from Scrimba. I worked as
              an SEO & SEM Specialist for about 4 years in various marketing
              agencies. I love findining solutions to problems and make things
              better.
            </p>
            <p className="mb-6">
              Curious by nature, I love asking questions, exploring new ideas,
              and figuring out how things work. Outside of coding, you’ll find
              me reading fantasy books, watching anime (Naruto, currently),
              doing calisthenics, or hanging out with my dog Bonnie.
            </p>
          </div>
          <div className="flex flex-col gap-4 mt-12 items-center md:flex-row">
            <div className="border border-primary bg-white p-2 rounded-md w-xs h-xs flex items-center justify-center">
              <img className="w-xs h-xs rounded-md" src={Evzi} alt="" />
            </div>
            <div className="border border-primary bg-white p-2 rounded-md w-xs h-xs flex items-center justify-center">
              <img className="w-xs h-xs object-cover rounded-md" src={EvziSport} alt="" />
            </div> 
            <div className="border border-primary bg-white p-2 rounded-md w-xs h-xs flex items-center justify-center">
              <img className="w-xs h-xs object-cover rounded-md" src={Bonnie} alt="" />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
