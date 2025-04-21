import Project from './Project';
import data from '../data/projectsData';

function Projects(){
    const project = data.map((project, index) => {
        return(
            <Project 
                key={project.id}
                project={project}
                index={index} />
        )
    })

    return(
        <div className="lg:w-5xl lg:mx-auto">
        <h2 className="text-3xl my-4 capitalize text-primary">Projects</h2>
        <div>
            {project}
        </div>
        </div>
    )
}

export default Projects;