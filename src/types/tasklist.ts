import type { tasks } from "./app";

export interface taskListProps {
  loading: boolean;
  tasks: Array<tasks> | [];
  setTask: React.Dispatch<React.SetStateAction<Array<tasks> | []>>;
}
