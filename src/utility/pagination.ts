import type { tasks } from "../types/app"


export const paginate = (tasks : Array<tasks> | [], page : number) => {
    let limit = 4
    let skip = (page - 1) * limit
    return tasks.slice(skip, skip + limit)

}