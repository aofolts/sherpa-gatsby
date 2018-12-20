import React from 'react'
import css from './index.module.less'
import BackgroundImage from 'components/image-background'
import Link from 'components/link'
import {graphql} from 'gatsby'

const Card = ({
  entry
}) => {
  return (
    <article className={css.card}>
      <Link page={entry} className={css.link}>
        <div className={css.media}>
          <BackgroundImage {...entry.featuredImage} className={css.background}/>
        </div>
        <div className={css.details}>
          <div className={css.category}>{entry.category}</div>
          <h3 className={css.title}>{entry.title}</h3>
          <div className={css.publishDate}>
            {entry.fullPublishDate}
          </div>
        </div>
      </Link>
    </article>
  )
}

export default Card

export const journalEntryCardFragment = graphql`
  fragment journalEntryCard on ContentfulJournalEntry {
    ...journalEntryInfo
    featuredImage {
      ...imageMediumFluid
    }
  }
`