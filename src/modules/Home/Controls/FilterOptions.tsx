import React, { useState } from 'react'
import s from './Controls.module.scss'

type Props = {
  onFilterChange: React.Dispatch<React.SetStateAction<{ by: string }>>
}

interface CheckOption {
  value: string
  name: string
  label: string
}
const filterOptions = [
  { value: 'comp', name: 'Complete', label: 'Complete' },
  { value: 'incomp', name: 'Incomplete', label: 'Incomplete' },
  { value: 'none', name: 'none', label: 'No Filter' },
]

const FilterOptions = ({onFilterChange}:Props) => {
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
            onClick={() => handleChange(option.value)}
            checked={filter.by === option.value}
          />
          <label htmlFor={option.name}> {option.label}</label>
        </div>
      ))}
    </div>
  )
}
export default FilterOptions