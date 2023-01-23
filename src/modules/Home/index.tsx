import { useState } from 'react'
import s from './Home.module.scss'

type TaskType = {title: String, date?: Date, done?: Boolean}
interface Task {title: String, date?: Date, done?: Boolean}
interface Event {target: {value: string}}

export default function Home() {
  const [tasks, setTasks] = useState(Array<TaskType>)
  const [newTask, setNewTask] = useState({title: ''})

  const handleTaskChange = (e: Event) => setNewTask({title: e.target.value})

  const handleTaskAdd = () => {
    if(!newTask) return
    setTasks([
      ...tasks,
      { title: newTask.title, date: new Date(), done: false },
    ])
    setNewTask({ title: '' })
  }
  
  // const handleTaskToggle = ({task:Task}) => {
  //   setTasks()
  // }

  const handleClearTasks = () => {
    window.confirm('Are you sure?') && setTasks([])
  }

  return (
    <div className={s.container}>
      <div className={s.tasksContainer}>
        <h2>Enter today's tasks!</h2>
        <div className={s.inputContainer}>
          <input
            value={newTask.title}
            onChange={handleTaskChange}
            name='taskInput'
            placeholder='Write the task'
          />
          <button onClick={handleTaskAdd}>Enter</button>
        </div>
        <div className={s.tasksList}>
          {tasks.map((task: Task, i: number) => (
            <div className={s.taskText} key={i}>
              {!task.done ? (
                <>
                  <span className={s.icon}>🔘</span>
                  <span>{task.title}</span>
                </>
              ) : (
                <>
                  <span className={s.icon}>☑️</span>
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
