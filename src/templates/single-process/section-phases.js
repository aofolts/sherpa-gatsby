import React from 'react'
import css from './section-phases.module.less'
import Phase from './phase'

const PhasesSection = ({
  data
}) => {
  if (!data.subProcesses) return null

  const phases = data.subProcesses.map((entry,index) => {
    return (
      <Phase key={entry.id} entry={entry} phaseNumber={index + 1}/>
    )
  })

  return (
    <section id='phases' className={css.section}>
      <div className={css.wrap}>
        <div className={css.content}>
          {phases}
        </div>
      </div>
    </section>
  )
}

export default PhasesSection

