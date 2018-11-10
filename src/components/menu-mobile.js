import React,{Component} from 'react'
import css from '../less/menu-mobile.module.less'
import {Link} from 'gatsby'
import {withHeaderContext} from './header'
import MainMenu from './menu-main'

class MobileMenu extends Component {
  render() {
    const {
      mobileMenuIsOpen
    } = this.props.headerContext

    const classes = [
      css.mobileMenu,
      mobileMenuIsOpen ? css.openMobileMenu : null
    ].join(' ')

    return (
      <div id='mobileMenu' className={classes}>
        <MainMenu/>
      </div>
    )
  }
}

export default withHeaderContext(MobileMenu)