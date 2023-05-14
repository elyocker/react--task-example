import TaskCard from './TaskCard'
import {TaskContext} from '../context/TaskContext'
import {useContext} from 'react'

function TaskList() {
    const {task, deleteTask} = useContext(TaskContext)
    if (task.length===0) {
        return <h2 className=' font-bold text-white text-center text-4xl'>No hay tareas</h2>;
    }

  return (
    <div  className='grid grid-cols-4 gap-2'>
        {
            task.map((task, key)=> (
                <TaskCard key={key} task={task} deleteTask={deleteTask}/>
            ))
        }
    </div>
  )
}

export default TaskList