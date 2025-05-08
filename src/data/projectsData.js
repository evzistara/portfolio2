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
      "Do you need help with inspiration for cooking? Here you can input ingredients you have in your kitchen and based on these, AI will recommend you a recipe that fits with ingridients you have.",
    site: "https://cookinghelper13.netlify.app/",
    github: "https://github.com/evzistara/cookingHelper",
    image: CookingHelper,
  },
  {
    id: 3,
    name: "Weather App",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "API"],
    description:
      "A simple weather app that allows users to search for any city and instantly view real-time weather data. The app fetches information from the AccuWeather API and displays the current temperature, weather condition, city name, and whether it's day or night — complete with a matching background image and weather icon.",
    site: "https://evzistara.github.io/weather-app/",
    github: "https://github.com/evzistara/weather-app",
    image: WeatherApp,
  },
  {
    id: 4,
    name: "Library",
    technologies: ["HTML", "CSS", "JavaScript"],
    description:
      "A virtual bookshelf where users can manage their book collection. Users can add new books through a form modal, mark books as read/unread with a toggle button, and remove books from the list. The app demonstrates form handling, object constructors, prototype methods, and event-driven UI updates. ",
    site: "https://evzistara.github.io/books/",
    github: "https://github.com/evzistara/books",
    image: Library,
  },
  {
    id: 5,
    name: "Rock Paper Scissors",
    technologies: ["HTML", "CSS", "JavaScript"],
    description:
      "A simple interactive game where you play against the computer for 5 rounds. The game tracks and displays the score after each round and provides instant feedback on who won. Designed to practice DOM manipulation, event handling, and basic game logic.",
    site: "https://evzistara.github.io/rockpaperscissors/",
    github: "https://github.com/evzistara/rockpaperscissors",
    image: Rps,
  }
];
