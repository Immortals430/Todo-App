import { FadeLoader } from "react-spinners";
import { RiDeleteBin6Fill } from "react-icons/ri";
import type { taskListProps } from "../types/tasklist";
import nothingFound from "../assets/nothing_found.webp"

export default function TaskList({ loading, tasks, setTask }: taskListProps) {
  const deleteTask = (i: number) => {
    let task = tasks.filter((_, index) => i != index);
    setTask(task);
    localStorage.setItem("tasks", JSON.stringify(task));
  };

  if (!loading && tasks.length == 0)
    return (
      <div className="sm:h-[318px] h-[414px] justify-center flex items-center">
        <img
          src={nothingFound}
          alt="nothing found"
          className="object-cover h-full"
        />
      </div>
    );

  return (
    <>
      {loading ? (
        <div className="sm:h-[318px] h-[414px] justify-center flex items-center">
          <FadeLoader />
        </div>
      ) : (
        <div className="sm:h-[318px] h-[414px]">
          {tasks.map((obj, i) => (
            <div className="mb-2.5 " key={i}>
              <div className="py-6 px-8 bg-white flex items-center gap-x-7">
                <div className="flex flex-auto justify-between  sm:items-center sm:flex-row gap-x-7 w-2/3 flex-col">
                  <h5 className="font-bold">{obj.task}</h5>
                  <div className="text-zinc-500">{obj.date}</div>
                </div>

                <div className="flex-auto flex justify-end items-center w-1/3 ">
                  <RiDeleteBin6Fill
                    className="cursor-pointer"
                    color="#f7052e"
                    onClick={() => deleteTask(i)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
