import Rps from "../assets/projects/rps.png";
import WeatherApp from "../assets/projects/weather-app.png";
import Library from "../assets/projects/library.png";
import CookingHelper from "../assets/projects/cookingHelper.png";
import comingSoon from "../assets/projects/comingSoon.png";

export default [
  {
    id: 1,
    name: "Dog Food Calculator",
    technologies: [""],
    description:
      "Dog Food Calculator is a web application that helps dog owners determine the right amount of food to feed their dogs based on their weight and age. It also helps with finding out how to split food if you want to mix kibble and raw food. The website provides personalized feeding recommendations and tips for maintaining a healthy diet for dogs.",
    site: "",
    github: "",
    image: comingSoon,
  },
  {
    id: 2,
    name: "Cooking Helper",
    technologies: ["React", "TailwindCSS", "Claude AI"],
    description:
      "Do you need help with inspiration for cooking? Here you can input ingredients you have in your kitchen and based on these, AI will recommend you a recipe that firs with ingridients you have.",
    site: "https://cookinghelper13.netlify.app/",
    github: "https://github.com/evzistara/cookingHelper",
    image: CookingHelper,
  },
  {
    id: 3,
    name: "Weather App",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    description:
      "A weather application that allows users to search for the current weather in any city. The app uses the AccuWeather API to fetch weather data.",
    site: "https://evzistara.github.io/weather-app/",
    github: "https://github.com/evzistara/weather-app",
    image: WeatherApp,
  },
  {
    id: 4,
    name: "Library",
    technologies: ["HTML", "CSS", "JavaScript"],
    description:
      "A simple library where you can add and delete books and mark them read.",
    site: "https://evzistara.github.io/books/",
    github: "https://github.com/evzistara/books",
    image: Library,
  },
  {
    id: 5,
    name: "Rock Paper Scissors",
    technologies: ["HTML", "CSS", "JavaScript"],
    description:
      "A simple rock-paper-scissors game where the user can play against the computer. The game uses JavaScript to generate a random choice for the computer and compares it with the user's choice to determine the winner.",
    site: "https://evzistara.github.io/rockpaperscissors/",
    github: "https://github.com/evzistara/rockpaperscissors",
    image: Rps,
  }
];
