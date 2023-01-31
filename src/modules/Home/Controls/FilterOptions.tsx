import React, { useState } from 'react'
import s from './Controls.module.scss'
import { CheckOption } from '../../../interfaces'
import { FilterOptionsProps } from '../../../types'

const filterOptions = [
  { value: 'complete', name: 'Complete', label: 'Complete' },
  { value: 'incomplete', name: 'Incomplete', label: 'Incomplete' },
  { value: 'none', name: 'none', label: 'No Filter' },
]

const FilterOptions = ({onFilterChange}:FilterOptionsProps) => {
  const [filter, setFilter] = useState({ by: 'none' })

  const handleChange = (value:string) => {
    setFilter({by:value})
    onFilterChange({by:value})
  }

  return (
    <div className={s.row}>
      {filterOptions.map((option: CheckOption, i: number) => (
        <div key={i}>
          <input
            value={option.value}
            name={option.name}
            type='radio'
            onChange={() => handleChange(option.value)}
            // onClick={() => handleChange(option.value)}
            checked={filter.by === option.value}
          />
          <label htmlFor={option.name}> {option.label}</label>
        </div>
      ))}
    </div>
  )
}
export default FilterOptions