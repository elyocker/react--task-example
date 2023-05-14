import React,{useContext} from 'react'
import {TaskContext} from '../context/TaskContext'


function TaskCard({task}) {
  const {deleteTask} = useContext(TaskContext)
  return (
   
    <div className='bg-slate-800 text-white p-4 rounded-md'>
        <div>
            <h2 className='text-xl font-bold capitalize'>{task.name}</h2>
            <p className='text-gray-400 text-sm'>{task.description}</p>
            <button
            className='bg-red-600 px-2 py-1 mt-4 rounded-md hover:bg-red-500'
            onClick={() => deleteTask(task.id)}
            >Delete</button>
        </div>
    </div>
    
  )
}

export default TaskCard