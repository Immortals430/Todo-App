import type { tasks } from "./app";

export interface taskProps  {
    setForm :  React.Dispatch<React.SetStateAction<boolean>>,
    tasks : Array<tasks> | [],
    setTask: React.Dispatch<React.SetStateAction<Array<tasks> | []>>,
    loading: boolean
}