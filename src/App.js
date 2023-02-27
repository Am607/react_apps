
import Header from "./component/Header";
import Tasks from "./component/Tasks";
import AddTask from "./component/addTask";
import { useState } from "react";
function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'this is a tile',
      day: 'Feb  5th at 1.30pm',
      reminder: true
    },

    {
      id: 2,
      title: 'this is a tile 2',
      day: 'Feb  5th at 1.30pm',
      reminder: true
    },
    {
      id: 3,
      title: 'this is new task',
      day: 'Feb  5th at 1.30pm',
      reminder: true
    },

  ])

  const onDelete = (id) => {
    setTasks(tasks.filter((t) => t.id !== id))
  }
//? add task
 
  const addTask = (task) => {
    console.log(task)
    const id = Math.floor(Math.random() * 10000)+1
    const newTask = {id , ...task}
    setTasks([...tasks, newTask])
  }


  const setReminder = (id) => {
    setTasks(tasks.map((t) => 
      t.id === id ? { ...t, reminder: !t.reminder } : t
    ))
  }
  return (
    <div className="container">
      <Header onclick={()=>setShowAddTask()}/>
      {showAddTask && <AddTask  onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={onDelete} onToggle={setReminder} /> : <h1>No task found </h1>

      }
    </div>
  );
}

export default App;
