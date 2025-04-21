function Work(props) {
  return (
    <div className="border rounded-md flex gap-5 my-5 p-4 items-start">
      <img
        className="w-20"
        src={props.work.logo}
        alt="oslomet university logo"
      />
      <div>
        <h3 className="font-bold text-xl">{props.work.title}</h3>
        <p>{props.work.company}</p>
        <p>{props.work.period}</p>
        <p>{props.work.tasks}</p>
      </div>
    </div>
  );
}

export default Work;
