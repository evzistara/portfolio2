export type Work = {
  id: number;
  title: string;
  company: string;
  period: string;
  tasks: string;
};

const data: Work[] = [
  {
    id: 1,
    title: "Solution expert",
    company: "Norwegian Armed Forces, Oslo",
    period: "12/2025 -",
    tasks: "I am working with SAP S4/HANA with focus on economic modules.  ",
  },
  {
    id: 2,
    title: "Search Executive",
    company: "Publicis Norway, Oslo",
    period: "05/2023 - 06/2024",
    tasks:
      "I worked with Google paid search for clients as Ice and Bertel og Steen. Apart from daily optimization, I was involved in various technical projects: use of GPT for keyword analysis; use of first party data in search accounts; automatization in paid search with use of scripts and third party tools",
  },
  {
    id: 3,
    title: "SEO consultant, Oslo",
    company: "Idium 1881",
    period: "04/2022 - 12/2022",
    tasks:
      "I was doing on-page and technical SEO for different clients, together with SEO analysis, keywords analysis, competitor analysis. I cooperated with content writers, web developers. I was also member of social committee and internal marketing team",
  },
];

export default data;
