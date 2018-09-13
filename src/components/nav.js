import React from 'react'
import {Link} from 'gatsby'
import css from '../less/nav.module.less'

const Nav = props => {

  return (
    <nav className={css.nav}>
      <Link className={css.siteName} to='/'>
        sherpa.
      </Link>
    </nav>
  )
}

export default Nav
