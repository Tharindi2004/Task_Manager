import { useEffect, useState } from "react";
import API from "../services/api";
import TaskForm from "../components/taskform";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await API.get("/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <TaskForm refresh={fetchTasks} />

      {tasks.map((t) => (
        <div key={t._id}>
          <h3>{t.title}</h3>
          <p>Priority: {t.priorityScore}</p>
        </div>
      ))}
    </div>
  );
}