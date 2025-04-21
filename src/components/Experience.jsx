import School from "./School";
import Work from "./Work";     
import data from "../data/experienceData"  

function Experience(){

    const school = data.university.map((uni) => {
        return(
            <School 
                key={uni.id}
                uni={uni} />
            )
    })

    const work = data.work.map((work) => {
        return(
            <Work 
                key={work.id}
                work={work} />
            )
    });

    return(
        <div className=" lg:w-5xl lg:mx-auto">
        <div>
        <h2 className="text-3xl my-4 capitalize">University</h2>
        <div>
            {school}
        </div>
        </div>
        <div>
        <h2 className="text-3xl my-4 capitalize">Experience</h2>
        <div>
            {work}
        </div>
        </div>
        </div>
    )
}

export default Experience;