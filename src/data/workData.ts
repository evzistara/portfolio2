export type Work = {
  id: number;
  title: string;
  company: string;
  period: string;
  location: string;
  tasks: string;
};

const data: Work[] = [
  {
    id: 1,
    title: "Solution expert",
    company: "Norwegian Armed Forces",
    period: "12/2025 -",
    location: "Oslo, Norway",
    tasks:
      "I am working in datawarehouse team with SAP S4/HANA with focus mainly on SD, FI, CO and MM modules (economy, sales, logistics). I build data flows for new extractors and maintain existing data flows. I also fix issues that our customers might have with data in Analysis reports (queries).",
  },
  {
    id: 2,
    title: "Search Executive",
    company: "Publicis Norway",
    period: "05/2023 - 06/2024",
    location: "Oslo, Norway",
    tasks:
      "I worked with Google paid search for clients as Ice and Bertel og Steen. Apart from daily optimization, I was involved in various technical projects: use of GPT for keyword analysis; use of first party data in search accounts; automatization in paid search with use of scripts and third party tools",
  },
  {
    id: 3,
    title: "SEO consultant",
    company: "Idium 1881",
    period: "04/2022 - 12/2022",
    location: "Oslo, Norway",
    tasks:
      "I was doing on-page and technical SEO for different clients, together with SEO analysis, keywords analysis, competitor analysis. I cooperated with content writers, web developers. I was also member of social committee and internal marketing team",
  },
];

export default data;
