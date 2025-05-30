import type { tasks } from "./app"

export interface filterProps  {
    setTask : React.Dispatch<React.SetStateAction<Array<tasks> | []>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
}