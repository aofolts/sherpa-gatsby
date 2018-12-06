import React from 'react'
import PropTypes from 'prop-types'

const Markdown = ({
  content,
  className,
  id
}) => {
  const atts = {
    className: [className].join(' '),
    dangerouslySetInnerHTML: {
      __html: content.childMarkdownRemark.html
    },
    id
  }

  return (
    <div {...atts}/>
  )
}

export default Markdown

Markdown.propTypes = {
  className: PropTypes.string,
  content: PropTypes.shape({
    childMarkdownRemark: PropTypes.shape({
      html: PropTypes.string.isRequired
    })
  }),
  id: PropTypes.string
}