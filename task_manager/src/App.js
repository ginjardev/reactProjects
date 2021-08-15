import './App.css';
import Header from './Header';
import Tasks from './Tasks';
import {useState} from 'react'
import AddTask from './AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Study React',
        day: 'August 14th 7:00pm',
        reminder: true
    },
    {
        id: 2,
        text: 'Study Java',
        day: 'August 15th 7:00pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Study JavaScript',
        day: 'August 16th 7:00pm',
        reminder: false
    }
])

//add task 
const addTask = (task) => {
  const id = Math.floor(Math.random() * 1000) + 1

  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}
//delete task
const deleteTask = (id) => {
  setTasks(tasks.filter(task => task.id !== id))
}

//toggle reminder
const toggleReminder = (id) => {
  setTasks(
    tasks.map(
      task => task.id === id ? {...task, reminder 
        : !task.reminder } : task
    )
  )
}

  return (
    <div className="container">
      <Header title="Task Manager" onAdd={() => setShowAddTask(!showAddTask)} showAdd ={showAddTask}/>
      {showAddTask && <AddTask addTask ={addTask}/>}
      {tasks.length > 0 ? 
      <Tasks tasks={tasks} onDelete={deleteTask} toggle={toggleReminder}/> : 
      ("No Tasks To Display")}
    </div>
  );
}

export default App;
