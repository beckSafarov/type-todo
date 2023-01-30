export interface Task {
  id: string
  title: String
  date?: Date
  done?: Boolean
}
export interface Event {
  target: { value: string }
}
export interface KeyBoardEvent {
  code: string
}
export interface CheckOption {
  value: string
  name: string
  label: string
}
export interface Sort {
  by: string
  order: string
}
export interface TaskBlockFace {
  task: Task
  onToggle: (task: Task) => void
}