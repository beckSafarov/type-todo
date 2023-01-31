import { Sort } from "../interfaces";

export type TaskType = { id: string; title: String; date: Date; done: Boolean }
export type SortOptionsProps = {
  onSortChange: React.Dispatch<
    React.SetStateAction<{ by: string; order: string }>
  >
}
export type FilterOptionsProps = {
  onFilterChange: React.Dispatch<React.SetStateAction<{ by: string }>>
}

export type ControlsProps = SortOptionsProps & FilterOptionsProps

export type FilterTypes= 'complete' | 'incomplete' | 'none'