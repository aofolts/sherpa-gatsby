import React from 'react'
import css from 'less/home/section-intro.module.less'

const Intro = props => {
  return (
    <section id='intro' className={css.intro}>
      <div className={css.wrap}>
        <div className={css.content}>
          <h2>Not all sites are created equal.</h2>
          <p>More than fancy effects, your business needs a strategic digital 
  experience that promotes interaction, generates high-quality leads, 
  and ultimately wins you lots of loyal customers!</p>
        </div>
      </div>
    </section>
  )
}

export default Intro