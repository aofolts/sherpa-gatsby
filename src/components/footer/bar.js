import React from 'react'
import css from 'less/footer/bar.module.less'

const FooterBar = () => {
  return (
    <div className={css.bar}>
      <div className={css.copyright}>© {new Date().getFullYear()} Sherpa Design Co.</div>
    </div>
  )
}

export default FooterBar