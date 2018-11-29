import React from 'react'

const files = require.context('../svg',false,/\.svg$/)
files.keys().forEach(files)

const Icon = ({ 
  name, 
  className 
}) => {
  return (
    <svg className={`${className}`}>
      <use xlinkHref={`#icon-${name}`}></use>
    </svg>
  )
}

export default Icon