import React, { useState } from 'react'
import { ControlsProps } from '../../../types'
import { capitalize } from '../../../utils'
import s from './Controls.module.scss'
import FilterOptions from './FilterOptions'
import SortOptions from './SortOptions'

const Controls = ({ onSortChange, onFilterChange }: ControlsProps) => {
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
