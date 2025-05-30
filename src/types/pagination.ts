import type { tasks } from "./app";

export interface paginationProps {
  tasks: Array<tasks> | [],
  page: number,
  setPage: React.Dispatch<React.SetStateAction<number>>
}