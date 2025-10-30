
import WeatherApp from "../assets/projects/weather-app.png";
import Library from "../assets/projects/library.png";
import CookingHelper from "../assets/projects/cookingHelper.png";
import comingSoon from "../assets/projects/comingSoon.png";
import questPicker from "../assets/projects/questPicker.png";

export default [
  {
    id: 1,
    name: "Dog Food Calculator",
    technologies: [""],
    description:
      "A web application that helps dog owners determine the right amount of food based on specific criterias",
    site: "",
    github: "",
    image: comingSoon,
  },
   {
    id: 2,
    name: "Quest Picker",
    technologies: ["React", "TalwindCSS", "JavaScript"],
    description:
      "A tool that helps you pick either a random task or a task from specific category to complete.",
    site: "https://evzistara.github.io/questpicker/",
    github: "https://github.com/evzistara/questpicker",
    image: questPicker,
  },
  {
    id: 3,
    name: "Cooking Helper",
    technologies: ["React", "TailwindCSS", "Claude AI"],
    description:
      "An AI cooking helper that can suggest you recipes based on ingredients you input by connecting to ClaudeAI.",
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
  {
    id: 5,
    name: "Library",
    technologies: ["HTML", "CSS", "JavaScript"],
    description:
      "A virtual bookshelf where users can have overview of their books - they can add books and mark them as read",
    site: "https://evzistara.github.io/books/",
    github: "https://github.com/evzistara/books",
    image: Library,
  }
];
