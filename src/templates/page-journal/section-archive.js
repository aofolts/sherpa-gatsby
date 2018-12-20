import React from 'react'
import css from './section-archive.module.less'
import Card from 'components/card-journal-entry'

const ArchiveSection = ({
  data,
  context
}) => {
  const cards = data.journalEntries.map(entry => {
    const isActive = entry.audience === context.activeAudience

    const itemClasses = [
      css.gridItem,
      isActive ? null : css.inactiveGridItem
    ].join(' ')

    return (
      <div key={entry.id} className={itemClasses}>
        <Card entry={entry}/>
      </div>
    )
  })

  return (
    <section id='section-archive' className={css.section}>
      <div className={css.wrap}>
        <div className={css.grid}>
          {cards}
        </div>
      </div>
    </section>
  )
}

export default ArchiveSection