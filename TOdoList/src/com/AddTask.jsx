const AddTask = ({taskList,setTaskList}) => {
  return (

    <section className="addTask">
            <form>
                <input name="task" autoComplete="off" maxLength={25} type="text" placeholder="Type your Task" />
                <button type="submit">Add</button>
            </form>
    </section>
  )
};

export default AddTask;
