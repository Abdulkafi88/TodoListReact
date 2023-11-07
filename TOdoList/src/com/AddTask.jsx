import { useState } from "react";

const AddTask = ({taskList,setTaskList}) => {
  const [value,setValue] = useState('')
  return (

    <section className="addTask">
            <form onSubmit={(e)=>e.preventDefault()}>
                <input name="task" autoComplete="off" maxLength={25} type="text" placeholder="Type your Task" value={value} onChange={(e)=>{
                 setValue(e.target.value)
                }} />
                <button type="submit" onClick={(e)=>{console.log(1)}}>Add</button>
            </form>
    </section>
  )
};

export default AddTask;
