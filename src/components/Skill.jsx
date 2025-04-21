
function Skill(props){

    return(
        <>
       
            <div className="flex gap-4 bg-white rounded-md px-6 py-2 items-center w-fit mb-1">
                <img  className="h-10 w-10" src={props.skill.icon} alt="" />
                <p>{props.skill.name}</p>
            </div>
        </>
    )
}

export default Skill;