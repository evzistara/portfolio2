export type University = {
  id: number;
  name: string;
  school: string;
  period: string;
  location: string;
  info: string;
};

const data: University[] = [
  {
    id: 1,
    name: "Frontend Development Career Path",
    school: "Scrimba course",
    period: "06/2025 - 10/2025",
    location: "Online",
    info: "Completed comprehensive coursework in modern frontend frameworks and best practices.",
  },
  {
    id: 2,
    name: "1 year IT program OsloMet",
    school: "OsloMet",
    period: "08/2024 - 06/2025",
    location: "Oslo, Norway",
    info: "I studied the following subjects: Inclusive web design, Programming, Interaction design, IoT, Databases, Web programming.",
  },
  {
    id: 3,
    name: "Master's degree in Economy and Management",
    school: "University of Economy and Management",
    period: "09/2018 - 06/2020",
    location: "Praha, Czech Republic",
    info: "I specialized in marketing and advertising and got to learn about both online and offline marketing.",
  },
];

export default data;
