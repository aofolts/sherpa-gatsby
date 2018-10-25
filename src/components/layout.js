import React,{Fragment} from 'react'
import Header from './header'
import Footer from './footer'
import {Helmet} from 'react-helmet'
import favicon from '../images/favicon.png'

const CrazyEggTracking = () => {
  return (
    <script type="text/javascript" src="//script.crazyegg.com/pages/scripts/0080/6735.js" async="async"></script>
  ) 
}

const Layout = ({
  children
}) => {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <link rel='shortcut icon' type='image/png' href={favicon}/>
        <link rel="stylesheet" href="https://use.typekit.net/dxm1wgv.css"></link>
      </Helmet>
      <Header/>
      {children}
      <Footer/>
      <CrazyEggTracking/>
    </Fragment>
  )
}

export default Layout