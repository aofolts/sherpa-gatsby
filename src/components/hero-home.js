import React from 'react'
import css from '../less/hero-home.module.less'
import {Link,graphql,StaticQuery} from 'gatsby'
import Image from 'gatsby-image'

const Buttons = () => {
  const data = [
    {
      label: 'Tell Me More',
      link: '/get-started'
    },
    {
      label: "Let's Talk",
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
      css[`button${i + 1}`]
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

const HomeHero = props => {
  const {
    imageSharp: heroImage 
  } = props.data

  return (
    <section className={css.hero}>
      <Background {...heroImage}/>
      <div className={css.contentContainer}>
        <div className={css.content}>
          <h1 className={css.headline}>Every Small Businesses Needs a Hard-Working Website™</h1>
          <Buttons/>
        </div>
      </div>
    </section>
  )
}

export default props => (
  <StaticQuery
    query={
      graphql`
        {
          imageSharp(original: {
            src: {
              regex: "/myimage/"
            }
          }) {
            sizes(maxWidth: 1920) {
              ...GatsbyImageSharpSizes_noBase64
            }
          }
        }
      `
    }
    render={data => <HomeHero data={data} {...props}/>}
  />
)