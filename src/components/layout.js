import React,{Fragment} from 'react'
import Header from './header'
import Footer from './footer'
import {Helmet} from 'react-helmet'
import favicon from '../images/favicon.png'

const Layout = props => {

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sherpa | Web Designer &amp; Developer | New York</title>
        <link rel='shortcut icon' type='image/png' href={favicon}/>
      </Helmet>
      <Header/>
      {props.children}
      <Footer/>
    </Fragment>
  )
}

export default Layout