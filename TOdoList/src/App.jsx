import { useState } from 'react'
import './App.css'
import Header from './com/Header'
import AddTask from './com/AddTask'
import ShowTask from './com/ShowTask'
function App() {
const [taskList , setTaskList] = useState([ ])

  return (
    <>
      <Header />
      <AddTask taskList = {taskList} setTaskList = {setTaskList} />
      <ShowTask  taskList = {taskList} setTaskList = {setTaskList}/>
    </>
  )
}

export default App
1