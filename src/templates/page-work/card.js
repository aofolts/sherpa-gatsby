import React from 'react'
import css from './card.module.less'
import BackgroundImage from 'components/image-background'
import Link from 'components/link'

const Card = ({
  entry
}) => {
  return (
    <Link className={css.link} page={entry}>
      <article className={css.card}>
        <div className={css.browserBar}>
          <div className={css.browserDot}/>
          <div className={css.browserDot}/>
          <div className={css.browserDot}/>
        </div>
        <div className={css.media}>
          <BackgroundImage {...entry.featuredImage}/>
        </div>
        <div className={css.details}>
          <h3>{entry.title}</h3>
          <p className={css.description}>{entry.description.description}</p>
          <div className={css.readMore}>Read More</div>
        </div>
      </article>
    </Link>
  )
}

export default Card

export const projectCardFragment = graphql`
  fragment projectCard on ContentfulProject {
    ...projectInfo
    featuredImage {
      ...imageMediumFluid
    }
  }
`