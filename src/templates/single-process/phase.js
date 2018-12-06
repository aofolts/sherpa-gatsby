import React from 'react'
import Markdown from 'components/markdown'
import css from './phase.module.less'
import BackgroundImage from 'components/image-background'

const Timeline = ({
  phaseNumber
}) => {
  return (
    <div className={css.timeline}>
      <div className={css.phaseNumber}>
        <div className={css.phaseNumberText}>
          {phaseNumber}
        </div>
      </div>
      <svg className={css.timelinePath} viewBox='0 0 10 10' preserveAspectRatio='false' style={{height: '100%'}}>
        <path 
          d='m 5 0 l 0 10' 
          vectorEffect='non-scaling-stroke' 
          strokeWidth='2px' 
          strokeDasharray='10px,10px'
          stroke='#ccc'
          strokeLinecap='square'/>
      </svg>
    </div>
  )
}

const Content = ({
  entry
}) => {
  return (
    <div className={css.content}>
      <h2 className={css.title}>{entry.title}</h2>
      <Markdown className={css.overview} content={entry.overview}/>
      <div className={css.featuredMedia}>
        <BackgroundImage className={css.featuredImage} {...entry.featuredImage}/>
      </div>
      <Markdown className={css.contentBody} content={entry.content}/>
    </div>    
  )
}

const Phase = ({
  entry,
  phaseNumber
}) => {
  return (
    <article key={entry.id} className={css.phase}>
      <Timeline phaseNumber={phaseNumber}/>
      <Content entry={entry}/>
    </article>
  )
}

export default Phase