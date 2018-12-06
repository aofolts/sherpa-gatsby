import React from 'react'
import css from './section-intro.module.less'
import Markdown from 'components/markdown'

const IntroSection = ({
  data
}) => {
  return (
    <section id='intro' className={css.section}>
      <div className={css.wrap}>
        <div className={css.content}>
          <h2 className={css.headline}>{data.headline}</h2>
          <Markdown className={css.overview} content={data.overview}/>
        </div>
      </div>
    </section>
  )
}

export default IntroSection