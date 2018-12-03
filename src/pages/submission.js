import React from 'react'
import css from 'less/notfound.module.less'
import gif from 'images/success.gif'
import {Link} from 'gatsby'

const Success = () => (
  <div className={css.page}>
    <div className={css.container}>
      <div className={css.media}>
        <img src={gif} alt='Retro computer kid thumbs up' className='mediaBackground'/>
      </div>
      <div className={css.content}>
        <h1 className={css.headline}>Message sent!</h1>
        <p>Ready to dive back in?</p>
        <Link to='/' className={css.button}>
          Return Home
        </Link>
      </div>
    </div>
  </div>
)

export default Success
