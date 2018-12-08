import React from 'react'
import css from 'less/home/hero.module.less'
import {Link} from 'gatsby'
import Image from 'gatsby-image'

const Buttons = () => {
  const data = [
    {
      label: 'Plan Yours',
      link: '/get-started'
    },
    {
      label: "Contact Me",
      link: '/#contact'
    }
  ]

  const buttonElements = data.map((button,i) => {
    const {
      label,
      link
    } = button

    const buttonClasses = [
      css.button,
      css[`button${i + 1}`],
      i === 0 ? 'primaryButton' : 'secondaryLightButton'
    ].join(' ')

    return (
      <Link to={link} key={label} className={buttonClasses}>{label}</Link>
    )
  })

  return (
    <div className={css.buttons}>
      {buttonElements}
    </div>
  )
}

const Background = props => {
  const outterClasses = [
    'mediaBackground',
    css.background
  ].join(' ')

  return (
    <Image
      {...props}
      className={'mediaBackground'}
      outerWrapperClassName={outterClasses}
      alt='Mountains'
    />
  )
}

const HomeHero = ({
  data
}) => {
  return (
    <section className={css.hero}>
      <Background {...data.backgroundImage}/>
      <div className={css.contentContainer}>
        <div className={css.content}>
          <h1 className={css.headline}>Growing Businesses Need Hard-Working Websites™</h1>
          <Buttons/>
        </div>
      </div>
    </section>
  )
}

export default HomeHero