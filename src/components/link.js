import React from 'react'
import {Link as GatsbyLink} from 'gatsby'
import PropTypes from 'prop-types'

export const getPagePath = page => {
  let base = ''
  let slug = page.slug

  switch (page['__typename']) {
    case 'ContentfulProcess': base = '/process'; break;
    case 'ContentfulJournalEntry': base = '/journal'; break;
    case 'ContentfulProject': base = '/projects'; break;
    default: base = '';
  }

  if (slug === 'home') slug = ''

  return `${base}/${slug}`
}

export const getPageUrl = page => {
  const path = getPagePath(page)

  return `https://www.sherpadesign.co${path}`
}

const Link = ({
  page,
  to,
  url,
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
  if (page) {
    const path = getPagePath(page)

    return (
      <GatsbyLink 
        className={className}
        to={path}
      >
        {children}
      </GatsbyLink>
    )
  }
  if (url) {
    if (url[0] === '/') {
      return (
        <GatsbyLink 
          className={className}
          to={url}
        >
          {children}
        </GatsbyLink>
      )
    }
    else {
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
  }
  return <div {...{className}}>{children}</div>
}

Link.propTypes = {
  url: PropTypes.string
}

export default Link