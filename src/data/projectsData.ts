import WeatherApp from "../assets/projects/weather-app.webp";
import CookingHelper from "../assets/projects/cookingHelper.webp";
import Wedding from "../assets/projects/wedding.webp";
import Calisthenics from "../assets/projects/calisthenics.webp";

export type Project = {
  id: number;
  name: string;
  technologies: string[];
  description: string;
  image: string;
  site?: string; // live URL - the button is hidden when this is missing
  siteLabel?: string; // button text, defaults to "Demo"
  github?: string; // repo URL - the Code button is hidden when this is missing
};

const frontend: Project[] = [
  {
    id: 1,
    name: "Wedding website",
    technologies: ["React", "TailwindCSS", "TypeScript", "Vercel"],
    description:
      "Website for a wedding, built with AI assistance. I was responsible for the design and development of the website.",
    site: "https://kent-og-mayliss.vercel.app/",
    siteLabel: "Website",
    image: Wedding,
  },
  {
    id: 2,
    name: "Calisthenics Skills",
    technologies: ["React", "TailwindCSS", "TypeScript", "Supabase"],
    description:
      "Overview of calisthenic skills with their progressions and possibility to login and track progress.",
    site: "https://cali-progress.netlify.app/",
    github: "https://github.com/evzistara/calisthenics-skills",
    image: Calisthenics,
  },
  {
    id: 3,
    name: "Cooking Helper",
    technologies: ["React", "TailwindCSS", "Claude AI"],
    description:
      "An AI cooking helper that suggests recipes based on the ingredients you enter, powered by Claude AI.",
    site: "https://cookinghelper13.netlify.app/",
    github: "https://github.com/evzistara/cookingHelper",
    image: CookingHelper,
  },
  {
    id: 4,
    name: "Weather App",
    technologies: ["HTML", "Bootstrap", "JavaScript", "API"],
    description:
      "A simple weather app that allows users to search for any city and instantly view real-time weather data.",
    site: "https://evzistara.github.io/weather-app/",
    github: "https://github.com/evzistara/weather-app",
    image: WeatherApp,
  },
];

export default { frontend };
