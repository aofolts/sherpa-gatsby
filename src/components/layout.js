import React,{Component} from 'react'
import Header from './header'
import Footer from './footer'
import {Helmet} from 'react-helmet'
import favicon from 'images/favicon.png'
import PropTypes from 'prop-types'
import {getPageUrl} from 'utilities/router'

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
      hasHero,
      meta
    } = this.props

    const headerProps = {
      dockedPosition: hasHero === false ? 'relative' : null
    }

    return (
      <LayoutContext.Provider value={this.state}>
        <div id='layout'>
          <Helmet>
            <title>{meta.title}</title>
            <meta charSet="UTF-8" />
            <meta name='description' content={meta.description}/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta property="og:title" content={meta.title}></meta>
            <meta property="og:description" content={meta.description}/>
            <meta property="og:image" content={meta.image.url}/>
            <meta property="og:url" content={meta.url}/>
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

Layout.propTypes = {
  meta: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    image: PropTypes.shape({
      url: PropTypes.string
    })
  })
}

export function withLayout(Component) {
  return props => {
    const {
      data 
    } = props
 
    const {
      page
    } = data

    const meta = {
      title: page.seo.title,
      description: page.seo.description.description,
      url: getPageUrl(page),
      image: {
        url: page.featuredImage.fluid.src
      }
    }
 
    // Patch for Contentful + GraphQL single reference field 
    // with multiple types issue: #10090
    if (page && page.layout) {
      data.page.layout = page.layout[0] || page.layout
    }
 
    return (
      <Layout meta={meta}>
        <Component {...props}/>
      </Layout>
    )
  }
}