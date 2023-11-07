import { useState } from "react"
import "./App.css"
import {TodoForm} from "./com/TodoForm"
import {TodoList} from './com/TodoList'
function App() {
  return (
    <div className="todo-app'">
      
      <TodoForm />
    <TodoList />
    </div>
  )
}

export default App
