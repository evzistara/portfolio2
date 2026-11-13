import data from "../data/skillData";

const groups = [
  { title: "Data", skills: data.data },
  { title: "SAP", skills: data.sap },
  { title: "Front-end", skills: data.frontend },
  { title: "Tools", skills: data.tools },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-10 md:py-24 md:px-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block mb-4 py-1.5 text-primary-strong rounded-lg text-md uppercase">
            My skills
          </div>

          {groups.map((group, index) => (
            <div key={group.title} className={index === 0 ? "" : "my-5"}>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-4 py-2 mb-1">
                {group.skills.map((skill) => (
                  <div
                    key={skill.id}
                    className="flex gap-2 bg-white rounded-md px-4 py-2 items-center mb-1 shadow-md shadow-primary/30 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 ease-in-out"
                  >
                    <i className={`${skill.icon} text-3xl`} aria-hidden="true"></i>
                    <p>{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
