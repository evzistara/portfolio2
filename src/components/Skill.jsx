
function Skill(props){

    return(
        <>
       
            <div className="flex gap-4 bg-white rounded-md px-6 py-2 items-center w-fit mb-1 shadow-md hover:shadow-lg hover:shadow-gray-500 transition-all duration-300 ease-in-out">
                <img  className="h-10 w-10" src={props.skill.icon} alt="" />
                <p>{props.skill.name}</p>
            </div>
        </>
    )
}

export default Skill;