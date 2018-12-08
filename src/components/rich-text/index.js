import React from 'react'
import css from './index.module.less'

const RichText = ({
  className,
  html,
  isLongform
}) => {
  const classes = [
    isLongform ? css.longform : css.richText,
    className
  ].join(' ')

  return (
    <div className={classes} dangerouslySetInnerHTML={{__html: html}}/>
  )
}

export default RichText