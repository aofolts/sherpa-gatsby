import React from 'react'
import PropTypes from 'prop-types'
import css from 'less/hero-secondary.module.less'
import Image from 'gatsby-image'

const Background = props => {
  const outterClasses = [
    'mediaBackground',
    css.background
  ].join(' ')

  return (
    <Image
      {...props}
      className={outterClasses}
      alt='Mountains'
    />
  )
}

const SecondaryHero = ({title,background}) => {

  return (
    <section className={css.hero}>
      <Background {...background}/>
      <div className={css.contentContainer}>
        <div className={css.content}>
          <h1 className={css.headline}>{title}</h1>
        </div>
      </div>
    </section>
  )
}

SecondaryHero.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    sizes: PropTypes.object.isRequired
  })
}

export default SecondaryHero