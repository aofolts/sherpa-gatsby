import React from 'react'
import RichText from 'components/rich-text'
import css from './section-content.module.less'

const ContentSection = ({
  data
}) => {
  return (
    <section id='content' className={css.section}>
      <div className={css.wrap}>
        <div className={css.content}>
          <RichText html={data.content} isLongform={true}/>
        </div>
      </div>
    </section>
  )
}

export default ContentSection