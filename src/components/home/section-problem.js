import React from 'react'
import css from 'less/home/section-intro.module.less'

const Intro = props => {
  return (
    <section id='intro' className={css.intro}>
      <div className='wrapSmall'>
        <h2>Not all sites are created equal.</h2>
        <p>More than fancy effects, your business needs a strategic digital 
experience that drives interaction, generates high-quality leads, 
and ultimately wins you lots of loyal customers.</p>
      </div>
    </section>
  )
}

export default Intro