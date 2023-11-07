import { useState } from "react";

const AddTask = ({ taskList, setTaskList }) => {
  const handlesubmit = (e)=>{
    e.preventDefault()
    const date = new Date()
      const newTasks = [
        {id:date.gettime() , name: setTaskList, time: Date}
      ]
  }
  return (
    <section className="addTask">
      <form onSubmit={handlesubmit}>
        <input
          name="task"
          autoComplete="off"
          maxLength={25}
          type="text"
          placeholder="Type your Task"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button type="submit" onClick={(e) => {}}>
          Add
        </button>
      </form>
    </section>
  );
};

export default AddTask;
