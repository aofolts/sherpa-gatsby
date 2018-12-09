import React from 'react'
import css from './meta.module.less'

const Meta = ({
  data
}) => {
  const readTime = Math.ceil(data.content.split(' ').length / 300) + ' min read'

  return (
    <div className={css.meta}>
      <div className={css.publishDate}>
        {data.fullPublishDate}
      </div>
      <div className={css.readTime}>
        {readTime}
      </div>
    </div>
  )
}

export default Meta