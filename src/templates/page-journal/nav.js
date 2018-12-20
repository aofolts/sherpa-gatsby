import React from 'react'
import css from './nav.module.less'

const Nav = ({
  context
}) => {
  const data = {
    audiences: ['Everyone','Clients','Freelancers']
  }

  const items = data.audiences.map(audience => {
    const handleClick = () => context.setActiveAudience(audience)
    const isActive = audience === context.activeAudience

    const itemClasses = [
      css.menuItem,
      isActive ? css.activeMenuItem : null
    ].join(' ')

    return (
      <li key={audience} className={itemClasses} onClick={handleClick}>
        {audience}
      </li>
    )
  })

  return (
    <nav id='nav-audience' className={css.nav}>
      <ul className={css.menu}>
        {items}
      </ul>
    </nav>   
  )
}

export default Nav