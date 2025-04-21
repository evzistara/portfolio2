function Work(props) {
  return (
    <div className="bg-backgroundLight rounded-md flex gap-5 my-5 p-4 items-start shadow-md">
      <img
        className="w-20"
        src={props.work.logo}
        alt="oslomet university logo"
      />
      <div>
        <h3 className="font-bold text-xl">{props.work.title}</h3>
        <p>{props.work.company}</p>
        <p className="mb-2">{props.work.period}</p>
        <p>{props.work.clients}</p>
        <p>{props.work.tasks}</p>
      </div>
    </div>
  );
}

export default Work;
