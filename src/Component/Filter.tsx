import { useEffect, useState } from "react";
import type { tasks } from "../types/app";
import type { filterProps } from "../types/filter";
import { paginate } from "../utility/pagination";

export default function Filter({ setTask, setLoading }: filterProps) {
  const [loadingTimer, setLoadingTimer] = useState(1)
  useEffect(() => {
    return () => clearInterval(loadingTimer)
  }, [])

  const filter = (category: string) => {
    setLoading(true)
    setLoadingTimer(setTimeout(() => setLoading(false), 500))
    let tasks: Array<tasks> | [] = JSON.parse(
      localStorage.getItem("tasks") || "[]"
    );
    tasks = tasks.filter((obj) => obj.category == category);
    setTask(paginate(tasks, 1));
  };

  return (
    <div className="filters flex justify-center gap-0.5 max-w-[550px] m-auto mb-10">
      <div
        className="bg-[#c6d3c2] flex-auto p-1 text-center w-1/3 cursor-pointer "
        onClick={() => filter("personal")}
      >
        Personal
      </div>
      <div
        className="bg-[#c6d3c2] flex-auto p-1 text-center w-1/3 cursor-pointer"
        onClick={() => filter("shopping")}
      >
        Shopping
      </div>
      <div
        className="bg-[#c6d3c2] flex-auto p-1 text-center w-1/3 cursor-pointer"
        onClick={() => filter("work")}
      >
        Work
      </div>
    </div>
  );
}
