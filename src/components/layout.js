import React,{Fragment} from 'react'
import Header from './header'
import Footer from './footer'
import {Helmet} from 'react-helmet'
import favicon from '../images/favicon.png'

const gaScript = `
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-106772115-3"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-106772115-3');
  </script>
`

const Layout = ({
  children
}) => {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <link rel='shortcut icon' type='image/png' href={favicon}/>
        {gaScript}
      </Helmet>
      <Header/>
      {children}
      <Footer/>
    </Fragment>
  )
}

export default Layout