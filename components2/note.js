import React from 'react'
import Icon from 'components/icon'
import css from 'less/note.module.less'

const Note = ({
  children,
  className,
  arrowClassName
}) => {
  const noteClasses = [
    css.note,
    className
  ].join(' ')

  const arrowClasses = [
    css.arrow,
    arrowClassName
  ].join(' ')

  return (
    <div className={noteClasses}>
      <div className={css.text}>
        {children}
      </div>
      <Icon name='tip-arrow' className={arrowClasses}/>
    </div>
  )
}

export default Note