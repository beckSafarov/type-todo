import { TaskBlockFace } from "../../interfaces"
import s from './Home.module.scss'

export const TaskBlock = ({ task, onToggle }: TaskBlockFace) => {
  return (
    <div className={s.taskText}>
      <span onClick={() => onToggle(task)} className={s.icon}>
        {task.done ? '☑️' : '🔘'}
      </span>
      {!task.done ? <span>{task.title}</span> : <del>{task.title}</del>}
    </div>
  )
}
