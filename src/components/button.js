import React from 'react'
import css from '../less/buttons.module.less'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'

const buttonTypeClasses = {
  primary: css.primaryButton,
  primaryLight: css.primaryLightButton
}

const Button = ({
  label,
  link,
  type
}) => {
  const buttonClass = [
    buttonTypeClasses[type]
  ].join(' ')

  const {
    page,
    url
  } = link

  if (page) {
    return (
      <Link className={buttonClass} to={page}>
        {label}
      </Link>
    )
  }

  return (
    <div className={buttonClass}>{label}</div>
  )
}

export default Button

Button.defaultProps = {
  type: 'primary'
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['primary','primaryLight'])
}