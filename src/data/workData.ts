export type Work = {
  id: number;
  title: string;
  company: string;
  period: string;
  location: string;
  summary: string; // one line shown above the bullets
  tasks: string[]; // each entry becomes one bullet point
};

const data: Work[] = [
  {
    id: 1,
    title: "SAP BW Consultant",
    company: "Norwegian Armed Forces",
    period: "12/2025 - now",
    location: "Oslo, Norway",
    summary:
      "Data warehouse team, working on SAP BW/4HANA with finance and logistics data (FI, CO, MM and SD).",
    tasks: [
      "Build new data flows from SAP ECC into BW",
      "Develop and maintain data models and process chains",
      "Troubleshoot data issues for the people who use our reports",
      "Responsible for our project to implement metadata management with OpenMetadata",
      "Built the department's onboarding program and onboarded four new colleagues and our new manager",
    ],
  },
  {
    id: 2,
    title: "Search Executive",
    company: "Publicis Norway",
    period: "05/2023 - 06/2024",
    location: "Oslo, Norway",
    summary:
      "Data-driven Google paid search for Ice and Bertel O. Steen.",
    tasks: [
      "Ran structured tests of ad formats and search strategies to improve click-through and conversion rates",
      "Reported performance in Looker Studio",
      "Automated Google Ads processes with scripts",
      "Used first-party data for more accurate targeting",
      "Applied AI to keyword analysis and data processing",
    ],
  },
  {
    id: 3,
    title: "SEO consultant",
    company: "Idium 1881",
    period: "04/2022 - 12/2022",
    location: "Oslo, Norway",
    summary:
      "SEO analysis, technical improvements and advice for a range of small clients.",
    tasks: [
      "Analysed sites and implemented on-page and technical SEO measures myself",
      "Worked on websites built on WordPress, Mono and Umbraco",
      "Collaborated with content creators and developers on technical and content quality",
      "Member of the marketing board and the social committee",
    ],
  },
];

export default data;
