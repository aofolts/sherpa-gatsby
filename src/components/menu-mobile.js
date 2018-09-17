import React from 'react'
import css from '../less/menu-mobile.module.less'
import {Link} from 'gatsby'
import {withHeaderContext} from './context-header'

const Menu = ({menuItems,isOpen}) => {
  const items = menuItems.map((item,i) => {
    const {
      title,
      path
    } = item

    const classes = [
      css.menuItem,
      isOpen ? css.loadedMenuItem : null
    ].join(' ')

    return (
      <li key={title} className={classes}>
        <Link to={path}>
          {title}
        </Link>
      </li>
    )
  })

  return (
    <ul className={css.menu}>
      {items}
    </ul>
  )
}

const MobileMenu = ({headerContext}) => {
  const {
    isOpen
  } = headerContext

  const classes = [
    css.mobileMenu,
    isOpen ? css.openMobileMenu : null
  ].join(' ')

  return (
    <ul className={classes}>
      <Menu {...headerContext}/>
    </ul>
  )
}

export default withHeaderContext(MobileMenu)