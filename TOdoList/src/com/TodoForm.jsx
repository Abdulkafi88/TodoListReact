import React, { useState } from "react"

export const TodoForm = () => {
    const [uservalue,setUserValue] = useState('')
    const handleSubmit = (e)=>{
       e.preventDefault()
    }
  return (
    <div className="todo-app">
      <h1>what's the plan for Todoy?</h1>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="type your Task"
          className="todo-input"
          value={uservalue}
          onChange={(e)=>setUserValue(e.target.value)}
        />
        <button className="todo-button" type="submit">Add Tasks</button>
      </form>
      <div>
        <p className="todo-row1">sdfsfsf</p>
      </div>
    </div>
  )
}
export default TodoForm
