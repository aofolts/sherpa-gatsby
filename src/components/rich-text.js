import React from 'react'
import css from 'less/rich-text.module.less'
import PropTypes from 'prop-types'

const RichContent = ({html,wrapClassName}) => {
  const atts = {
    className: [css.container,wrapClassName].join(' '),
    dangerouslySetInnerHTML: {
      __html: html
    }
  }

  return (
    <div {...atts}/>
  )
}

export default RichContent

RichContent.propTypes = {
  className: PropTypes.string,
  html: PropTypes.string.isRequired
}