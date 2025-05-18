import React, { useEffect, useRef, useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import type { formProp } from "../types/form";
import type { tasks } from "../types/app";

export default function Form({ form, setForm, setLoading, updateTask }: formProp) {
  const taskRef = useRef<HTMLInputElement | null>(null);
  const dateRef = useRef<HTMLInputElement | null>(null);
  const categoryRef = useRef<HTMLSelectElement | null>(null);
  const [loadingTimer, setLoadingTimer] = useState<number>(0)

  useEffect(() => {
    return () => clearTimeout(loadingTimer)
  }, [])

  // add task
  const addTask = (e: React.FormEvent) => {
    e.preventDefault();

    if (taskRef.current && dateRef.current && categoryRef.current) {
      const task: string = taskRef.current.value;
      const date: string = dateRef.current.value;
      const category: string = categoryRef.current.value;

      let tasks: Array<tasks> | [] = JSON.parse(
        localStorage.getItem("tasks") || "[]"
      );

      const newTask: Array<tasks> = [{ task, date, category }, ...tasks];
      localStorage.setItem("tasks", JSON.stringify(newTask));
      setLoading(true);
      updateTask()
      setLoadingTimer(setTimeout(() => setLoading(false) , 500))
      setForm(false);
    
    }
  };

  return (
    <Dialog open={form} onClose={setForm} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full  justify-center p-4 text-center items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <h1 className="font-bold text-2xl mb-3">Add Task Details</h1>
              <input
                ref={taskRef}
                type="text"
                placeholder="Task..."
                className="p-2 w-full border-b-1 mb-4 outline-0"
              />

              <label htmlFor="due-date" className="font-bold mb-3">
                Due Date:{" "}
              </label>
              <input
                ref={dateRef}
                type="date"
                id="due-date"
                className="outline-0 cursor-pointer mb-3"
              />
              <br />

              <label htmlFor="category" className="font-bold">
                Category:{" "}
              </label>
              <select id="category" ref={categoryRef} className="outline-0">
                <option disabled selected>
                  Choose Category
                </option>
                <option value="personal">Personal</option>
                <option value="shopping">Shopping</option>
                <option value="Work">Work</option>
              </select>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={addTask}
                className="inline-flex w-full justify-center rounded-md bg-[#157f3d] px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-[#126e35] sm:ml-3 sm:w-auto cursor-pointer"
              >
                Add
              </button>
              <button
                type="button"
                data-autofocus
                onClick={() => setForm(false)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
