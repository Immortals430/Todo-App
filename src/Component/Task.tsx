
import type { taskProps } from "../types/tasks";
import TaskList from "./TaskList";

export default function Task({ setForm, tasks, setTask, loading }: taskProps) {


  return (
    <div className="task max-w-[900px] m-auto mb-15">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-3xl font-[verdana]">Tasks</h1>
        <div
          className="bg-[#157f3d] py-1.5 px-4 text-white rounded-md cursor-pointer"
          onClick={() => setForm((prev) => !prev)}
        >
          Add Task
        </div>
      </div>
      <TaskList loading={loading} tasks={tasks} setTask={setTask} />
    </div>
  );
}
