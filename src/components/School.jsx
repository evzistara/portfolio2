function School(props) {
  return (
    <div className="rounded-md flex gap-5 my-5 p-4 items-start bg-backgroundLight shadow-md">
      <img
        className="w-20"
        src={props.uni.logo}
        alt="oslomet university logo"
      />
      <div>
        <h3 className="font-bold text-xl">{props.uni.name}</h3>
        <p>{props.uni.location}</p>
        <p>{props.uni.period}</p>
        <p>{props.uni.degree}</p>
        <p>{props.uni.program}</p>
        <p>{props.uni.other} </p>
      </div>
    </div>
  );
}
export default School;
