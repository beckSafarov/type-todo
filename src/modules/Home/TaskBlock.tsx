import { TaskBlockFace } from "../../interfaces"
import s from './Home.module.scss'

const formatDate = (date: Date) => {
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  const hour = date.getHours()
  const minutes = date.getMinutes()
  return `${month}/${day}/${year} ${hour}:${minutes}`
}

export const TaskBlock = ({ task, onToggle }: TaskBlockFace) => {
  const createdAt = formatDate(task.date)
  
  return (
    <div className={s.taskText}>
      <div className={s.leftSide}>
        <span onClick={() => onToggle(task)} className={s.icon}>
          {task.done ? '☑️' : '🔘'}
        </span>
        {!task.done ? <span>{task.title}</span> : <del>{task.title}</del>}
      </div>
      <span className={s.date}>{createdAt}</span>
    </div>
  )
}
