import data from "../data/skillData";

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-10 md:py-40 md:px-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            My Skills
          </h2>

          <div className="my-10">
            <h3 className="text-xl mb-2 text-foreground">Front-end</h3>
            <div className="flex flex-wrap gap-4 py-2 mb-1">
              {data.frontend.map((skill) => (
                <div
                  key={skill.id}
                  className="flex gap-2 bg-white rounded-md px-4 py-2 items-center mb-1 shadow-md shadow-primary/30 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 ease-in-out"
                >
                  <img
                    className="h-10 w-10"
                    src={skill.icon}
                    alt={`Icon of ${skill.name}`}
                  />
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="my-10">
            <h3 className="text-xl mb-2  text-foreground">Back-end</h3>
            <div className="flex flex-wrap gap-4 py-2 mb-1">
              {data.backend.map((skill) => (
                <div
                  key={skill.id}
                  className="flex gap-2 bg-white rounded-md px-4 py-2 items-center mb-1 shadow-md shadow-primary/30 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 ease-in-out"
                >
                  <img
                    className="h-10 w-10"
                    src={skill.icon}
                    alt={`Icon of ${skill.name}`}
                  />
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="my-10">
            <h3 className="text-xl mb-2 text-foreground">Tools</h3>
            <div className="flex gap-4 flex-wrap py-2 mb-1">
              {data.tools.map((skill) => (
                <div
                  key={skill.id}
                  className="flex gap-2 bg-white rounded-md px-4 py-2 items-center mb-1 shadow-md shadow-primary/30 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 ease-in-out"
                >
                  <img
                    className="h-10 w-10"
                    src={skill.icon}
                    alt={`Icon of ${skill.name}`}
                  />
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
