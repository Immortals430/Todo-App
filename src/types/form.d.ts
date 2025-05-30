import type { tasks } from "./app";

export interface formProp {
  form: boolean;
  setForm: React.Dispatch<React.SetStateAction<boolean>>;
  setLoading:React.Dispatch<React.SetStateAction<boolean>>
  updateTask : () => void
}