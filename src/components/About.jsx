import Evzi from "../assets/Evzi.jpg";

function About() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 md:flex-row md:gap-10 lg:w-5xl lg:mx-auto">
      <img
        className="h-100 rounded-xl shadow-gray-600 shadow-md block"
        src={Evzi}
        alt="Evzi and her dog"
      />
      <div>
        <h2 className="text-3xl my-4 capitalize text-primary">About me</h2>
        <p className="mb-4 text-xl">
          Hi! I am Evzi — a junior Front-end developer based in <span className="font-bold text-primary">Oslo, Norway</span>.
        </p>
        <p className="mb-4">
          I'm currently studying a<span className="font-bold text-primary"> year-long IT program at OsloMet</span> . And on the side I am
          diving deeper into web development and modern technologies.
        </p>
        <p className="mb-4">
          Curious by nature, I love asking questions, exploring new ideas, and
          figuring out how things work. I have a master’s degree in Economics
          and Marketing, and I worked as an <span className="font-bold text-primary">SEO & SEM
          Specialist for about 4 years</span> in various marketing agencies. I love findining solutions to problems and make things better.
        </p>
        <p>
          Outside of coding, you’ll find me reading fantasy books, watching anime (Naruto, currently), doing calisthenics, or hanging out with my dog Bonnie.
        </p>
      </div>
    </div>
  );
}

export default About;
