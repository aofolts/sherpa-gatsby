import React from 'react'
import css from 'less/nav.module.less'
import {withHeaderContext} from '.'
import MobileMenu from './menu-mobile'
import { withLayoutContext } from '../layout';
import Toggle from './nav-main-toggle'
import Brand from './brand'

const Nav = ({
  headerContext,
  layoutContext
}) => {
  const {
    isDocked,
    mobileMenuIsOpen,
    toggleMobileMenu,
    dockedPosition
  } = headerContext

  const {
    pageYOffset,
    scrollDirection
  } = layoutContext

  const navClasses = [
    css.nav,
    isDocked ? css.dockedNav : css.scrollingNav,
    pageYOffset >= 400 ? css.transitionalNav : null,
    scrollDirection === 'up' && pageYOffset > 800 ? css.scrollingVisibleNav : null,
    isDocked && dockedPosition === 'relative' ? css.relativeDockedNav : null
  ].join(' ')

  return (
    <nav className={navClasses}>
      <Brand/>
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
