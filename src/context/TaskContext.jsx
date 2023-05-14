import {createContext, useState, useEffect} from 'react'
import {Task as data} from '../data/Task'

export const TaskContext = createContext()

export function TaskContextProvider(props) {

  const [task, setTask] = useState([]);

  const creatTask = (taskForm)=>{

    if (taskForm.title!='' && taskForm.description!='') {
      
      setTask([...task,
        {name:taskForm.title +" "+ (task.length+1),
        id:(task.length+1),
        description:taskForm.description +" "+ (task.length+1)
        }
      ]);
    }
  }

  const deleteTask = (idTask) => {
    
    setTask(task.filter( n=> n.id!== idTask));

  }

  useEffect(() => {
    setTask(data);
  }, []);

  return (
    <TaskContext.Provider value={{
      task,
      creatTask,
      deleteTask
    }}>
      {props.children}
    </TaskContext.Provider>
  )
}

