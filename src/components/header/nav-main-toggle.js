import React from 'react'
import {withHeaderContext} from '.'
import css from 'less/nav-main-toggle.module.less'

const Toggle = ({
  headerContext
}) => {
  const {
    toggleMobileMenu,
    mobileMenuIsOpen
  } = headerContext

  const toggleClasses = [
    css.toggle,
    mobileMenuIsOpen ? css.activeToggle : null
  ].join(' ')

  return (
    <div className={toggleClasses} onClick={toggleMobileMenu}>
      <div className={css.bars}>
        <div className={css.topBar}/>
        <div className={css.middleBar}/>
        <div className={css.bottomBar}/>
      </div>
    </div>
  )
}

export default withHeaderContext(Toggle)