import React, {Component} from 'react'
import Link from '../link'
import css from 'less/menu-main.module.less'

const menuItems = [
  {
    title: 'Work',
    link: '/work'
  },
  {
    title: 'My Story',
    link: '/about'
  },
  {
    title: 'Journal',
    link: '/journal'
  },
  {
    title: 'Contact',
    link: '/#contact'
  }
]

class MainMenu extends Component {
  render() {
    const items = menuItems.map(({
      title,
      link
    }) => {
      return (
        <li key={title} className={css.menuItem}>
          <Link className={css.menuItemTitle} to={link}>{title}</Link>
        </li>
      )
    })
    return (
      <ul id='mainMenu' className={css.mainMenu}>
        {items}
      </ul>
    )
  }
}

export default MainMenu