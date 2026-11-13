import { useState, useEffect } from "react";
import BonnieHero from "../assets/bonnie-hero.webp";
import { ColorButton, OutlineButton } from "./Buttons";

export default function Hero() {
  const [index, setIndex] = useState(0);

  const facts = [
    "a big dog mom 🐶",
    "an anime lover 🎌",
    "an ex SEO consultant 🔍",
    "a calisthenics enthusiast 💪",
    "a bookworm 📚",
    "an early bird ☀️",
    "a curious soul 🧠",
    "a hobby frontend dev 💻",
    "a SAP BW consultant 🪏",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % facts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [facts.length]);



  return (
    <section id="" className="py-28 px-10 md:py-32 md:px-24 bg-background/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-10">
          <div className="min-w-0">
          <div className="inline-block mb-4 py-1.5 text-primary-strong rounded-lg text-md uppercase">
            Data engineer
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-foreground mb-4 text-balance">
              Love learning & fixing problems
            </h1>
            <div aria-hidden="true" className="h-1 w-16 rounded-full bg-accent mb-8" />
            <p className="text-lg md:text-lg text-muted-foreground mb-8 leading-relaxed text-pretty md:text-justify">
              Hey, I am Evzi! I love tech, and after some trial and error I found
              out I want to work with data! I built frontend projects on the
              side for a few years, and I am also a former SEO/SEM consultant. I enjoy building things,
              figuring out how they work, and finding solutions when something
              breaks.
            </p>
            <p className="text-lg md:text-lg text-muted-foreground mb-8 leading-relaxed text-pretty">
              I am a techie, but I am also{" "}
              <span className="text-accent-strong font-medium">{facts[index]}</span>
            </p>
            <div className="flex flex-col md:flex-row gap-4 w-fit">
              <ColorButton variant="contained" component="a" href="#projects">
                View my projects
              </ColorButton>
              <OutlineButton variant="outlined" component="a" href="#contact">
                Get in touch
              </OutlineButton>
            </div>
          </div>
          </div>
          <div className="flex shrink-0 flex-col items-center justify-center self-center md:w-72 lg:w-80">
            <div className="relative flex items-center justify-center">
              <div
                aria-hidden="true"
                className="absolute bottom-2 left-1/2 -translate-x-1/2 h-44 w-44 md:h-56 md:w-56 lg:h-64 lg:w-64 rounded-full bg-primary/10"
              />
              <img
                src={BonnieHero}
                alt="Illustration of Bonnie the dog sitting, surrounded by data and code icons"
                width={474}
                height={482}
                className="relative h-52 md:h-64 lg:h-80 w-auto"
              />
            </div>
            <p className="mt-5 text-sm italic text-muted-foreground">
              (This is Bonnie, my dog btw!)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
