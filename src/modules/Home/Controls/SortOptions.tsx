import React, { useState } from 'react'
import s from './Controls.module.scss'
import { CheckOption } from '../../../interfaces';
import { SortOptionsProps } from '../../../types';

const sortRows = {
  main: [
    { value: 'date', name: 'date', label: 'Date' },
    { value: 'status', name: 'status', label: 'Status' },
    { value: 'title', name: 'title', label: 'Title' },
  ],
  secondary: [
    { value: 'asc', name: 'asc', label: 'Ascending' },
    { value: 'desc', name: 'desc', label: 'Descending' },
  ],
}

const SortOptions = ({onSortChange}:SortOptionsProps) => {
  const [sort, setSort] = useState({
    by: 'date',
    order: 'desc',
  })

  const handleSortClick = (field: string, value: string) => {
    const changes = {
      ...sort,
      [field]: value,
    }
    setSort(changes)
    onSortChange(changes)
  }
  
  return (
    <>
      <div className={s.row}>
        {sortRows.main.map((sortOption: CheckOption, i: number) => (
          <div key={i}>
            <input
              value={sortOption.value}
              name={sortOption.name}
              type='radio'
              onClick={() => handleSortClick('by', sortOption.value)}
              checked={sort.by === sortOption.value}
            />
            <label htmlFor={sortOption.name}> {sortOption.label}</label>
          </div>
        ))}
      </div>
      <div className={s.row}>
        {sortRows.secondary.map((sortOption: CheckOption, i: number) => (
          <div key={i}>
            <input
              value={sortOption.value}
              name={sortOption.name}
              type='radio'
              onClick={() => handleSortClick('order', sortOption.value)}
              checked={sort.order === sortOption.value}
            />
            <label> {sortOption.label}</label>
          </div>
        ))}
      </div>
    </>
  )
}

export default SortOptions
