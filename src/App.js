
import Header from "./component/Header";
import Tasks from "./component/Tasks";
import AddTask from "./component/addTask";
import { useState, useEffect } from "react";
// use effect is used to load someting when page load
// its from hook
function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
  ])


  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchtasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])


  // fetching task form local server
  const fetchtasks = async () => {
    const res = await fetch('http://localhost:3001/task')
    const data = await res.json()
    return data
  }

  const fetchtask = async (id) => {
    const res = await fetch(`http://localhost:3001/task/${id}`)
    const data = await res.json()
    return data
  }
  //? add task

  const addTask = async (task) => {
    // console.log(task)
    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask])

    const res = await fetch('http://localhost:3001/task', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task),

    })

    const data = await res.json()
    setTasks([...tasks, data])
  }


  const onDelete = async (id) => {
    const res = await fetch(`http://localhost:3001/task/${id}`, {
      method: 'DELETE'
    })
    res.status === 200 ? setTasks(tasks.filter((t) => t.id !== id)) : alert('error')

  }


  const setReminder = async (id) => {
    const taskToToggle = await fetchtask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res = await fetch(`http://localhost:3001/task/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask),
    })
    const data = await res.json()
    setTasks(tasks.map((t) =>
      t.id === id ? { ...t, reminder: !t.reminder } : t
    ))
  }
  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} isVisible={showAddTask} />

      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={onDelete} onToggle={setReminder} /> : <h1>No task found </h1>

      }
    </div>
  );
}

export default App;
