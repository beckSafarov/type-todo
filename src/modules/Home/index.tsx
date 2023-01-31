import { useEffect, useMemo, useState } from 'react'
import s from './Home.module.scss'
import { v4 as uuidv4 } from 'uuid'
import Controls from './Controls'
import { Task, Event, KeyBoardEvent } from '../../interfaces'
import { TaskType } from '../../types'
import { TaskBlock } from './TaskBlock'
import { filterTasks, sortTasks } from '../../utils'

export default function Home() {
  const [tasks, setTasks] = useState(Array<TaskType>)
  const [newTask, setNewTask] = useState({ title: '' })
  const [sort, setSort] = useState({ by: 'date', order: 'desc' })
  const [filter, setFilter] = useState({ by: 'none' })

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp)
    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [newTask])

  const handleTaskChange = (e: Event) => setNewTask({ title: e.target.value })

  const handleToggleTask = (task: Task) => {
    setTasks((tasks: TaskType[]) => {
      return tasks.map((currTask: Task) => {
        return task.id === currTask.id
          ? { ...currTask, done: !currTask.done }
          : currTask
      })
    })
  }

  const handleTaskAdd = () => {
    if (!newTask.title) return
    setTasks([
      ...tasks,
      { id: uuidv4(), title: newTask.title, date: new Date(), done: false },
    ])
    setNewTask({ title: '' })
  }

  const handleKeyUp = (e: KeyBoardEvent) => {
    if (e.code === 'Enter' && newTask.title) handleTaskAdd()
  }

  const tasksSorted = useMemo(() => {
    const sortedTasks = sortTasks(sort, tasks)
    const filteredTasks = filterTasks(filter, sortedTasks)
    return filteredTasks
  }, [tasks, sort.by, sort.order, filter.by])

  const handleClearTasks = () => setTasks([])

  return (
    <div className={s.container}>
      <div className={s.tasksContainer}>
        <h2>Enter today's tasks!</h2>
        <Controls onSortChange={setSort} onFilterChange={setFilter} />
        <div className={s.inputContainer}>
          <input
            value={newTask.title}
            onChange={handleTaskChange}
            name='taskInput'
            placeholder='Write the task'
          />
        </div>
        <div className={s.tasksList}>
          {tasksSorted.map((task: Task, i: number) => (
            <TaskBlock task={task} onToggle={handleToggleTask} key={i}/>
          ))}
        </div>
        <button className={s.btn} onClick={handleClearTasks}>
          Clear
        </button>
      </div>
    </div>
  )
}
