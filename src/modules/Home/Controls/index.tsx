import React, { useState } from 'react'
import { capitalize } from '../../../utils'
import s from './Controls.module.scss'
import FilterOptions from './FilterOptions'
import SortOptions from './SortOptions'

type Props = {
  onSortChange: React.Dispatch<
    React.SetStateAction<{ by: string; order: string }>
  >
  onFilterChange: React.Dispatch<React.SetStateAction<{ by: string }>>
}

const Controls = ({ onSortChange, onFilterChange }: Props) => {
  const [activeTab, setActiveTab] = useState('sort')

  const getTabClass = (currTab: string) => {
    return activeTab === currTab
      ? `${s.controlTabBtn} ${s.active}`
      : s.controlTabBtn
  }

  const tabs = ['sort', 'filter']

  return (
    <div className={s.controls}>
      <div className={s.controlsMenu}>
        {tabs.map((tabName: string, i: number) => (
          <button
            key={i}
            onClick={() => setActiveTab(tabName)}
            className={getTabClass(tabName)}
          >
            {capitalize(tabName)}
          </button>
        ))}
      </div>
      <div className={s.controlsOptions}>
        {activeTab === 'sort' ? <SortOptions onSortChange={onSortChange}/> : <FilterOptions onFilterChange={onFilterChange} />}
      </div>
    </div>
  )
}

export default Controls
