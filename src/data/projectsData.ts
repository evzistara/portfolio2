import WeatherApp from "../assets/projects/weather-app.png";
import Library from "../assets/projects/library.png";
import CookingHelper from "../assets/projects/cookingHelper.png";
import Grimsoybua from "../assets/projects/grimsoybua.png";
import Wedding from "../assets/projects/wedding.png";

export default {
  personal: [
    {
      id: 1,
      name: "Cooking Helper",
      technologies: ["React", "TailwindCSS", "Claude AI"],
      description:
        "An AI cooking helper that can suggest you recipes based on ingredients you input by connecting to ClaudeAI.",
      site: "https://cookinghelper13.netlify.app/",
      github: "https://github.com/evzistara/cookingHelper",
      image: CookingHelper,
    },
    {
      id: 2,
      name: "Weather App",
      technologies: ["HTML", "Bootstrap", "JavaScript", "API"],
      description:
        "A simple weather app that allows users to search for any city and instantly view real-time weather data.",
      site: "https://evzistara.github.io/weather-app/",
      github: "https://github.com/evzistara/weather-app",
      image: WeatherApp,
    },
    {
      id: 3,
      name: "Library",
      technologies: ["TypeScript", "React", "Vite", "TailwindCSS"],
      description:
        "A virtual bookshelf where users can have overview of their books - they can add books and mark them as read",
      site: "https://evzistara.github.io/books/",
      github: "https://github.com/evzistara/books",
      image: Library,
    },
  ],
  work: [
    {
      id: 1,
      name: "Grimsøybua",
      technologies: ["WordPress"],
      description:
        "Webpage for a simple marina café in Sarpsborg, Norway. I was responsible for the design and development of the website.",
      site: "https://grimsoybua.no/",
      image: Grimsoybua,
    },
    {
      id: 2,
      name: "Wedding website",
      technologies: ["React", "TailwindCSS", "TypeScript", "Vercel"],
      description:
        "Partly vibe coded website for a wedding. I was responsible for the design and development of the website.",
      site: "https://kent-og-mayliss.vercel.app/",
      image: Wedding,
    },
  ],
};
