import data from "../data/skillData";
import Skill from './Skill';

function Skills(){

    const skillsF = data.frontend.map((skill) => {
        return <Skill key={skill.id} skill={skill} />;
      });
    
      const skillsB = data.backend.map((skill) => {
        return <Skill key={skill.id} skill={skill} />;
      });
    
      const tools = data.tools.map((skill) => {
        return <Skill key={skill.id} skill={skill} />;
      });
    
    return(
        <div className="lg:w-5xl lg:mx-auto">
        <h2 className="text-3xl my-4 capitalize text-primary">My skills</h2>
        <div className="my-10">
          <h3 className="text-xl mb-2 text-text uppercase">Front-end</h3>
          <div className="flex flex-wrap gap-5">
          {skillsF}</div>
        </div>
        <div className="my-10">
          <h3 className="text-xl mb-2 uppercase text-primary">Back-end</h3>
          <div className="flex flex-wrap gap-5">
          {skillsB}</div>
        </div>
        <div className="my-10">
          <h3 className="text-xl mb-2 uppercase text-primary">Tools</h3>
          <div className="flex flex-wrap gap-5">
          {tools}</div>
        </div>
       </div>
    )
}

export default Skills;