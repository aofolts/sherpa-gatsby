import React,{Fragment} from 'react'
import Header from './header'
import Footer from './footer'
import {Helmet} from 'react-helmet'
import favicon from '../images/favicon.png'

const Layout = ({
  children
}) => {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <link rel='shortcut icon' type='image/png' href={favicon}/>
      </Helmet>
      <Header/>
      {children}
      <Footer/>
    </Fragment>
  )
}

export default Layout