import React from 'react'
import {Link} from 'gatsby'
import css from '../less/nav.module.less'
import {withHeaderContext} from './header'
import Logo from '../svg/logo'
import MobileMenu from './menu-mobile'
import { withLayoutContext } from './layout';
import Toggle from '../components/nav-main-toggle'

const Nav = ({
  headerContext,
  layoutContext
}) => {
  const {
    isDocked,
    mobileMenuIsOpen,
    toggleMobileMenu
  } = headerContext

  const {
    pageYOffset,
    scrollDirection
  } = layoutContext

  const navClasses = [
    css.nav,
    isDocked ? css.dockedNav : css.scrollingNav,
    pageYOffset >= 400 ? css.transitionalNav : null,
    scrollDirection === 'up' && pageYOffset > 800 ? css.scrollingVisibleNav : null
  ].join(' ')

  return (
    <nav className={navClasses}>
      <Link className={css.brand} to='/'>
        <Logo className={css.brandLogo} alt='sherpa logo'/>
        <div className={css.brandName}>
          sherpa.
        </div>
      </Link>
      <MobileMenu/>
      <Toggle {...{toggleMobileMenu,mobileMenuIsOpen}}/>
    </nav>
  )
}

export default withHeaderContext(
  withLayoutContext(
    Nav
  )
)
