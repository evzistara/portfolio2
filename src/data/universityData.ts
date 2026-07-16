import { University } from "lucide";

export type University = {
  id: number;
  name: string;
  school: string;
  period: string;
  info: string;
};

const data: University[] = [
  {
    id: 1,
    name: "Fullstand Development Career Path",
    school: "Online course, Scrimba",
    period: "06/2026 - ",
    info: "Focused on skills from the JavaScript ecosystem, including React, Node, Express, Next, TypeScript, and even AI engineering.",
  },
  {
    id: 2,
    name: "Frontend Development Career Path",
    school: "Online course, Scrimba",
    period: "06/2025 - 10/2025",
    info: "Completed comprehensive coursework in modern frontend framworks and best practices",
  },
  {
    id: 3,
    name: "1 year IT program OsloMet",
    school: "OsloMet",
    period: "08/2024 - 06/2025",
    info: "I studied following subjects: Inclusive web design, Programing, Interaction design, IoT, Databases, Web programming",
  },
  {
    id: 4,
    name: "Master's degree in Economy and Management",
    school: "University of Economy and Management",
    period: "09/2018 - 06/2020",
    info: "I specialized in marketing and advertisment and got to learn about both offline and offline marketing",
  },
];

export default data;
