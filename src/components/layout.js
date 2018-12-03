import React,{Component} from 'react'
import Header from './header'
import Footer from './footer'
import {Helmet} from 'react-helmet'
import favicon from 'images/favicon.png'

export const LayoutContext = React.createContext(null)

export function withLayoutContext(Component) {
  return props => {
    return (
      <LayoutContext.Consumer>
        {context => <Component {...props} layoutContext={context}/>} 
      </LayoutContext.Consumer>
    )
  }
}

class Layout extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      scrollDirection: null,
      pageYOffset: null
    }
  }

  updateScroll = () => {
    let scrollDirection

    if (window.pageYOffset > this.state.pageYOffset) {
      scrollDirection = 'down'
    } else {
      scrollDirection = 'up'
    }

    this.setState({
      pageYOffset: window.pageYOffset,
      scrollDirection
    })
  }

  componentDidMount() {
    this.setState({
      pageYOffset: window.pageYOffset
    })

    window.addEventListener('scroll',e => this.updateScroll())
  }

  render() {
    const {
      children,
      hasHero
    } = this.props

    const headerProps = {
      dockedPosition: hasHero === false ? 'relative' : null
    }

    return (
      <LayoutContext.Provider value={this.state}>
        <div id='layout'>
          <Helmet>
            <meta charSet="utf-8" />
            <link rel='shortcut icon' type='image/png' href={favicon}/>
            <link rel="stylesheet" href="https://use.typekit.net/dxm1wgv.css"></link>
          </Helmet>
          <Header {...headerProps}/>
          {children}
          <Footer/>
        </div>
      </LayoutContext.Provider>
    )
  }
}

export default Layout