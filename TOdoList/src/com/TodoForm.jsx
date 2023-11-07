import React, { useState } from "react";

export const TodoForm = () => {
  const [userValue, setUserValue] = useState("");
  const [task, setTask] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userValue.trim() !== "") {
      const userTask = {
        id: Math.floor(Math.random() * 1000),
        text: userValue,
      };
      setTask([...task, userTask]);
      setUserValue("");
    }
  };
  const handleDelet = (id) => {
    const update = task.filter((userTask) => userTask.id !== id);
    setTask(update);
  };
  return (
    <div className="todo-app">
      <h1>What's the plan for today?</h1>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your Task"
          className="todo-input"
          value={userValue}
          onChange={(e) => {
            setUserValue(e.target.value);
          }}
        />
        <button className="todo-button" type="submit">
          Add Task
        </button>
      </form>
      <div>
        {task.map((userTask, index) => (
          <li key={index}>
            <p className="todo-row1">
              {userTask.text}
              <i
                className="fa-solid fa-trash"
                onClick={(id) => handleDelet(userTask.id)}
              ></i>
            </p>
          </li>
        ))}
      </div>
    </div>
  );
};

export default TodoForm;
