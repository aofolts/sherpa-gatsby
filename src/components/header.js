import React,{Component,createContext} from 'react'
import css from '../less/header.module.less'
import Nav from './nav'
import { withLayoutContext } from './layout';

export const HeaderContext = createContext(null)

export function withHeaderContext(Component) {
  return props => (
    <HeaderContext.Consumer>
      {context => <Component {...props} headerContext={context}/>}
    </HeaderContext.Consumer>
  )
}

class Header extends Component {

  state = {
    isDocked: null,
    isHidden: null,
    scrollingNavIsHidden: null,
    mobileMenuIsOpen: false
  }
  
  setIsDocked = (wasDocked) => {
    const isDocked = this.props.layoutContext.pageYOffset < 200 

    if (isDocked !== wasDocked || wasDocked === null) {
      this.setState({
        isDocked
      })
    }
  }

  toggleMobileMenu = () => {
    console.log('toggle')
    this.setState({
      mobileMenuIsOpen: !this.state.mobileMenuIsOpen
    })
  } 

  componentDidMount() {
    this.setIsDocked(null)
  }

  componentDidUpdate(prevProps, prevState) {
    this.setIsDocked(prevState.isDocked)
  }
  
  render() {
    const {
      state
    } = this

    const {
      isDocked
    } = this.state

    const headerClasses = [
      css.header,
      isDocked ? css.dockedHeader : css.scrollingHeader
    ].join(' ')

    const context = {
      ...this.state,
      toggleMobileMenu: this.toggleMobileMenu
    }

    return (
      <HeaderContext.Provider value={context}>
        <header className={headerClasses}>
          <Nav/>
        </header>
      </HeaderContext.Provider>
    )
  }
}

export default withLayoutContext(Header)
