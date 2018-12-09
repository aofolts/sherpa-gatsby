import React from 'react'
import RichText from 'components/rich-text'
import css from './section-content.module.less'
import Meta from './meta'

const ContentSection = ({
  data
}) => {
  return (
    <section id='content'>
      <div className={css.wrap}>
        <Meta data={{...data}}/>
        <div className={css.content}>
          <RichText html={data.content} isLongform={true}/>
        </div>
      </div>
    </section>
  )
}

export default ContentSection