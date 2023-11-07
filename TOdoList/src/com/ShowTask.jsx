const ShowTask = ({ taskList, setTaskList }) => {
  return (
    <section className="showTask">
      <div className="flex">
        <div>
          <span className="title">Todo</span>
          <span className="count">{taskList.length}</span>
        </div>
        <button className="clearAll ">Clear All</button>
      </div>
      <ul>
        {taskList.map((tasks, index) => (
          <li key={index}>
            <p>
              <span className="name">{tasks.name}</span>
              <span className="time">{tasks.time}</span>
            </p>
            <i className="bi bi-pencil-square"></i>
            <i className="bi bi-trash"></i>
          </li>
        ))}
        {/* <li>
          <p>
            <span className="name">task a </span>
            <span className="time">2:09:01 AM 9/14/2030</span>
          </p>
          <i className="bi bi-pencil-square"></i>
          <i className="bi bi-trash"></i>
        </li> */}
      </ul>
    </section>
  );
};

export default ShowTask;
