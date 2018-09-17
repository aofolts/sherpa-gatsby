import React from 'react'
import {Link} from 'gatsby'
import css from '../less/nav.module.less'
import {withHeaderContext} from './context-header'

const Toggle = ({toggleMobileMenu,isOpen}) => {
  const toggleClasses = [
    css.toggle,
    isOpen ? css.activeToggle : null
  ].join(' ')

  return (
    <div className={toggleClasses} onClick={toggleMobileMenu}>
      <div className={css.toggleBars}>
        <div className={css.topToggleBar}/>
        <div className={css.middleToggleBar}/>
        <div className={css.bottomToggleBar}/>
      </div>
    </div>
  )
}

const Nav = props => {

  return (
    <nav className={css.nav}>
      <Link className={[css.siteName,css.scrollingSiteName].join(' ')} to='/'>
        sherpa.
      </Link>
      <Toggle {...props.headerContext}/>
    </nav>
  )
}

export default withHeaderContext(Nav)
