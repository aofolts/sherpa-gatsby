import React,{Component} from 'react'
import css from '../less/header.module.less'
import Nav from './nav'
import {HeaderContext} from './context-header'
import MobileMenu from './menu-mobile'

const menuItems = [
  {
    title: 'Get Started',
    path: '/get-started'
  },
  {
    title: 'About',
    path: '/about'
  },
  {
    title: 'Work',
    path: '/work'
  },
  {
    title: 'Journal',
    path: '/journal'
  }
]

class Header extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      isOpen: false,
      menuItems
    }
  }

  toggleMobileMenu = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    const contextObject = {
      ...this.state,
      toggleMobileMenu: this.toggleMobileMenu
    }

    return (
      <HeaderContext.Provider value={contextObject}>
        <header className={css.header}>
          <Nav/>
          <MobileMenu/>
        </header>
      </HeaderContext.Provider>
    )
  }
}

export default Header
