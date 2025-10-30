import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export default function Hero() {
  const [index, setIndex] = useState(0);

  const facts = [
    "a big dog mom 🐶",
    "an anime lover 🎌",
    "ex SEO consultant 🔍",
    "a calisthenics enthusiast 💪",
    "a bookworm 📚",
    "an early bird ☀️",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % facts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [facts.length]);

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#9076f3"),
    backgroundColor: "#9076f3",
    "&:hover": {
      backgroundColor: "rgba(144, 118, 243, 0.9)",
    },
  }));

  const OutlineButton = styled(Button)({
    color: "#9076f3",
    borderColor: "#9076f3",
    textColor: "#9076f3",
    "&:hover": {
      backgroundColor: "rgba(144, 118, 243, 0.1)",
    },
  });

  return (
    <section id="" className="py-32 px-10 md:py-40 md:px-24 bg-background/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-block mb-4 px-4 py-1.5 bg-primary/10 text-primary rounded-lg text-md font-semibold">
            Frontend Developer
          </div>
          <div className="">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
              Hey, I am Evzi!
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed text-pretty">
              I am a an ex-marketer with experience with SEO and SEM, but I
              found my new passion in programming and also combining my
              knowledge. I am a front-end developer, but I am also{" "}
              <span className="">{facts[index]}</span>
            </p>
            <div className="flex flex-col gap-4 w-fit">
              <ColorButton variant="contained">View my projects</ColorButton>
              <OutlineButton variant="outlined">Get in touch</OutlineButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
