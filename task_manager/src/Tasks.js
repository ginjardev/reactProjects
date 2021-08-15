import Task from './Task'

const Tasks = ({tasks, onDelete, toggle}) => {
    return (
        <>
          {tasks.map(task => <Task key={task.id} task={task} 
          onDelete={onDelete}
          onToggle={toggle}/>)}  
        </>
    )
}

export default Tasks
