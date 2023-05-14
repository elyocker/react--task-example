import { useState, useContext } from "react";
import {TaskContext} from '../context/TaskContext'

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");  
  const {creatTask} =useContext(TaskContext);

  const handleSumbit = (e) => {
    e.preventDefault();
    creatTask({
        title,
        description
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSumbit} className="bg-slate-800 p-10 mb-4 rounded-xl">
        <h1 className="text-white font-bold capitalize text-2xl mb-3">Nueva tarea</h1>
        <input
          className="w-full bg-slate-200 text-black p-3 mb-2 "
          placeholder="Escribe un titulo"
          onChange={(e) => setTitle(e.target.value)}
        value={title}
        />
        <textarea placeholder="escribe la descripcion"
        className="w-full bg-slate-200 text-black p-3 mb-2 "
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        ></textarea>
        <button className="bg-blue-600 text-white rounded-md px-2 py-1 ml-36 hover:bg-blue-500"
        >Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
