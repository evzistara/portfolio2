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
    }, 3000);

    return () => clearInterval(interval); // cleanup interval on unmount
  }, []);

  return (
    <div className="lg:w-5xl lg:mx-auto">
      <div className="p-8 text-text">
        <h1 className="text-5xl mb-3">Hey, I am Evzi!</h1>
        <h2 className="text-2xl">
          I am a junior front-end developer,
          <br />
          but I am also <span className="font-bold">{facts}</span>
        </h2>
        <div className="mt-4">
          <SoMe />
        </div>
      </div>
    </div>
  );
}

export default Hero;
