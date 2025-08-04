function Project(props) {
    const {project, index} = props;
  return (
    <div key={props.project.id} className={`mb-20 md:flex md:gap-10 md:justify-center md:items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
      <img className="border-2 rounded-xl md:w-sm lg:w-md shadow-md hover:shadow-lg hover:shadow-gray-400 " src={props.project.image} alt="" />
      <div className=" my-4 lg:w-md">
        <h3 className="text-2xl my-2 text-primary">{props.project.name}</h3>
        <div className="flex flex-row gap-2 my-2">
          {props.project.technologies.map((tech) => {
            return (
              <span
                key={tech}
                className="bg-text text-white px-2 py-1 rounded-md text-sm font-semibold"
              >
                {tech}
              </span>
            );
          })}
        </div>

        <p className="my-5">{props.project.description}</p>

        <a
          href={props.project.site}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary bg-primary rounded-md px-2 py-1 mr-2 hover:bg-highlight inline-block transform hover:scale-105 transition"
        >
          View Project
        </a>
        <a
          href={props.project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary bg-primary rounded-md px-2 py-1  mr-2 hover:bg-highlight inline-block transform hover:scale-105 transition"
        >
          View GitHub
        </a>
      </div>
    </div>
  );
}

export default Project;
