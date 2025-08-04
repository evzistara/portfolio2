
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
      "Dog Food Calculator is a web application that helps dog owners determine the right amount of food to feed their dogs based on their weight and age. It also helps with finding out how to split food if you want to mix kibble and raw food. The website provides personalized feeding recommendations and tips for maintaining a healthy diet for dogs.",
    site: "",
    github: "",
    image: comingSoon,
  },
   {
    id: 2,
    name: "Quest Picker",
    technologies: ["React", "TalwindCSS", "JavaScript"],
    description:
      "A tool that helps you pick a daily task or 'quest' to complete. You can either pick a random ask or specify a category to choose from. The app is designed to help you stay motivated and focused by providing a daily challenge.",
    site: "https://evzistara.github.io/questpicker/",
    github: "https://github.com/evzistara/questpicker",
    image: questPicker,
  },
  {
    id: 3,
    name: "Cooking Helper",
    technologies: ["React", "TailwindCSS", "Claude AI"],
    description:
      "Do you need help with inspiration for cooking? Here you can input ingredients you have in your kitchen and based on these, AI will recommend you a recipe that fits with ingridients you have.",
    site: "https://cookinghelper13.netlify.app/",
    github: "https://github.com/evzistara/cookingHelper",
    image: CookingHelper,
  },
  {
    id: 4,
    name: "Weather App",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "API"],
    description:
      "A simple weather app that allows users to search for any city and instantly view real-time weather data. The app fetches information from the AccuWeather API and displays the current temperature, weather condition, city name, and whether it's day or night — complete with a matching background image and weather icon.",
    site: "https://evzistara.github.io/weather-app/",
    github: "https://github.com/evzistara/weather-app",
    image: WeatherApp,
  },
  {
    id: 5,
    name: "Library",
    technologies: ["HTML", "CSS", "JavaScript"],
    description:
      "A virtual bookshelf where users can manage their book collection. Users can add new books through a form modal, mark books as read/unread with a toggle button, and remove books from the list. The app demonstrates form handling, object constructors, prototype methods, and event-driven UI updates. ",
    site: "https://evzistara.github.io/books/",
    github: "https://github.com/evzistara/books",
    image: Library,
  }
];
