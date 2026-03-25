import { useState } from "react";
import API from "../services/api";

export default function TaskForm({ refresh }) {
  const [task, setTask] = useState({
    title: "",
    deadline: "",
    importance: "low",
  });

  const submit = async () => {
    await API.post("/tasks", task);
    refresh();
  };

  return (
    <div>
      <input placeholder="Task" onChange={(e)=>setTask({...task,title:e.target.value})}/>
      <input type="date" onChange={(e)=>setTask({...task,deadline:e.target.value})}/>
      <select onChange={(e)=>setTask({...task,importance:e.target.value})}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button onClick={submit}>Add Task</button>
    </div>
  );
}