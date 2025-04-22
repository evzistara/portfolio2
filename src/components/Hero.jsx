import { useState, useEffect } from "react";
import SoMe from "./SoMe";

function Hero() {
  const [facts, setFacts] = useState("a dog mom 🐶");

  const factList = [
    "an anime lover 🎌",
    "ex SEO consultant 🔍",
    "a calisthenics enthusiast 💪",
    "a bookworm 📚",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFacts((prev) => {
        let newFact;
        do {
          newFact = factList[Math.floor(Math.random() * factList.length)];
        } while (newFact === prev); // avoid repeating same fact
        return newFact;
      });
    }, 2000);

    return () => clearInterval(interval); // cleanup interval on unmount
  }, []);

  return (
    <div className="text-3xl lg:w-5xl lg:mx-auto">
      <div className="lg:p-8 text-text md:text-5xl">
        <h1 className=" mb-4">Hey, I am Evzi!</h1>
        <h2 className=" mb-4">
          I am a  <span className="font-bold">junior front-end developer</span> </h2>
        <h2 >but I am also <span className="">{facts}</span></h2>
        <div className="mt-4">
          <SoMe />
        </div>
      </div>
    </div>
  );
}

export default Hero;
