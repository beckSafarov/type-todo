import { Task } from "../interfaces"
import sortBy from 'lodash.sortby'
import { FilterTypes } from "../types"

export const capitalize = (word:string):string|undefined => {
  if(!word) return 
  return word[0].toLocaleUpperCase()+word.slice(1)
}

export const sortTasks = (sort: {by:string, order:string}, currTasks: Task[]): Task[] => {
  switch (sort.by) {
    case 'status':
      const undones = currTasks.filter((task: Task) => !task.done)
      const dones = currTasks.filter((task: Task) => task.done)
      if (sort.order === 'asc') {
        return [...undones, ...dones]
      }
      return [...dones, ...undones]
    case 'title':
      const sorted = sortBy(currTasks, ['title'])
      return sort.order === 'asc' ? sorted : sorted.reverse()
    case 'date':
      if (sort.order === 'asc') {
        return currTasks.sort((x, y) => x.date.getTime() - y.date.getTime())
      }
      return currTasks.sort((x, y) => y.date.getTime() - x.date.getTime())
    default:
      return currTasks
  }
}

export const filterTasks = (filter: { by: string }, currTasks: Task[]) => {
  switch (filter.by) {
    case 'complete':
      return currTasks.filter((task) => task.done)
    case 'incomplete':
      return currTasks.filter((task) => !task.done)
    default:
      return currTasks
  }
}




