import { useCallback, useEffect, useState } from 'react'
import s from './Home.module.scss'
import { v4 as uuidv4 } from 'uuid'
import Controls from './Controls';
type TaskType = { id: string, title: String; date?: Date; done?: Boolean }
interface Task {id: string, title: String, date?: Date, done?: Boolean}
interface Event {target: {value: string}}
interface KeyBoardEvent {code: string}

export default function Home() {
  const [tasks, setTasks] = useState(Array<TaskType>)
  const [newTask, setNewTask] = useState({title: ''})
  const [sort, setSort] = useState({by: 'date', order: 'desc'})
  const [filter, setFilter] = useState({by: 'none'})

  useEffect(()=>{
    window.addEventListener('keyup', handleKeyUp)
    return ()=>window.removeEventListener('keyup', handleKeyUp)
  },[newTask])
  
 
  const handleTaskChange = (e: Event) => setNewTask({title: e.target.value})

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
    if(!newTask.title) return
    setTasks([
      ...tasks,
      { id: uuidv4(), title: newTask.title, date: new Date(), done: false },
    ])
    setNewTask({ title: '' })
  }

  const handleKeyUp = (e: KeyBoardEvent) => {
    if (e.code === 'Enter' && newTask.title) handleTaskAdd()
  }

  const sortTasks = (currTasks:Task[]):Task[] => { 
    if(sort.by === 'status'){
      const undones = currTasks.filter((task: Task) => !task.done)
      const dones = currTasks.filter((task: Task) => task.done)
      if(sort.order === 'asc'){
        return [...undones, ...dones]
      }
      return [...dones, ...undones]
    }
    return currTasks
  }

  const getTasks = useCallback(() => {
    return sortTasks(tasks)
  }, [tasks, sort])

  const handleClearTasks = () => setTasks([])

  return (
    <div className={s.container}>
      <div className={s.tasksContainer}>
        <h2>Enter today's tasks!</h2>
        <Controls onSortChange={setSort} onFilterChange={setFilter}/>
        <div className={s.inputContainer}>
          <input
            value={newTask.title}
            onChange={handleTaskChange}
            name='taskInput'
            placeholder='Write the task'
          />
        </div>
        <div className={s.tasksList}>
          {getTasks().map((task: Task, i: number) => (
            <div className={s.taskText} key={i}>
              {!task.done ? (
                <>
                  <span
                    onClick={() => handleToggleTask(task)}
                    className={s.icon}
                  >
                    🔘
                  </span>
                  <span>{task.title}</span>
                </>
              ) : (
                <>
                  <span
                    onClick={() => handleToggleTask(task)}
                    className={s.icon}
                  >
                    ☑️
                  </span>
                  <del>{task.title}</del>
                </>
              )}
            </div>
          ))}
        </div>
        <button className={s.btn} onClick={handleClearTasks}>
          Clear
        </button>
      </div>
    </div>
  )
}
