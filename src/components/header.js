import React from 'react'
import css from '../less/header.module.less'
import Nav from './nav'

const Header = props => {

  return (
    <header className={css.header}>
      <Nav/>
    </header>
  )
}

export default Header
