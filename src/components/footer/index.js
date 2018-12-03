import React from 'react'
import css from 'less/footer/index.module.less'
import FooterBar from './bar'
import SectionContact from './section-contact'

const Footer = () => {
  return (
    <footer id='footer' className={css.footer}>
      <SectionContact/>
      <FooterBar/>
    </footer>
  )
}

export default Footer