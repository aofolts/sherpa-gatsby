import React from 'react'
import PropTypes from 'prop-types'
import css from './index.module.less'
import BackgroundImage from 'components/image-background'

const SecondaryHero = ({
  title,
  backgroundImage
}) => {
  return (
    <section className={css.hero}>
      <BackgroundImage {...backgroundImage} className={css.background}/>
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
    fluid: PropTypes.object
  })
}

export default SecondaryHero