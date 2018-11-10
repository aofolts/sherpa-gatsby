import React from 'react'
import {Link as GatsbyLink} from 'gatsby'
import PropTypes from 'prop-types'

const Link = ({
  page,
  url,
  to,
  className,
  children
}) => {
  if (to) {
    return (
      <GatsbyLink 
        className={className}
        to={to}
      >
        {children}
      </GatsbyLink>
    )
  }
  else if (url) {
    return (
      <a 
        className={className}
        href={url}
        target='__black'
      >
        {children}
      </a>
    )
  }
  else {
    return <div {...{className}}>{children}</div>
  }
}

Link.propTypes = {
  url: PropTypes.string,
  to: PropTypes.string
}

export default Link