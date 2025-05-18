import Header from "./Component/Header";
import Pagination from "./Component/Pagination";
import Task from "./Component/Task";
import Form from "./Component/Form";
import Filter from "./Component/Filter";
import { useEffect, useState } from "react";
import type { tasks } from "./types/app";
import { paginate } from "./utility/pagination";

function App() {
  const [form, setForm] = useState(false);
  const [tasks, setTask] = useState<Array<tasks> | []>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  // update task
  const updateTask = () => {
    const tasks: Array<tasks> | [] = JSON.parse(
      localStorage.getItem("tasks") || "[]"
    );
    setTask(paginate(tasks, page));
  }

  useEffect(() => {
    setLoading(true);
    let laodingTimer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    updateTask()

    return () => clearTimeout(laodingTimer)
  }, [page]);

  return (
    <>
      <div className="container m-auto">
        <Header />
        <Filter setTask={setTask} setLoading={setLoading} />
        <Task
          setForm={setForm}
          tasks={tasks}
          setTask={setTask}
          loading={loading}
        />
        <Pagination tasks={tasks} page={page} setPage={setPage} />
      </div>
      <Form form={form} setForm={setForm} setLoading={setLoading} updateTask={updateTask} />
    </>
  );
}

export default App;
