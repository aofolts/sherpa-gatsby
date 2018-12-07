import React from 'react'
import BackgroundImage from 'components/image-background'
import {graphql} from 'gatsby'
import css from 'less/home/section-about.module.less'
import Note from 'components/note'

const ImageFrame = () => {
  const frameProps = {
    className: css.imageFrame,
    viewBox: '0 0 100 100',
    preserveAspectRatio: 'none'
  }

  return (
    <svg {...frameProps}>
      <polygon points="1 20,97 12,85 96,5 85" vectorEffect='non-scaling-stroke'/>
    </svg>
  )
}

const SectionAbout = ({
  data
}) => {
  return (
    <section id='about' className={css.section}>
      <div className={css.wrap}>
        <div className={css.imageWrap}>
          <Note className={css.note} arrowClassName={css.arrow}>
            I once carried my bike up three flights of stairs every day for a year. You can bet I’ll apply the same crazy work ethic to your project!
          </Note>
          <div className={css.media}>
            <ImageFrame/>
            <BackgroundImage {...data.aboutImage} className={css} alt='Andrew carrying bike.'/>
          </div>
        </div>
        <div className={css.text}>
          <h2 className={css.headline}>Hey, friend. Nice to meet ya’. Let’s get to know each other!</h2>
          <div className={css.paragraph}>
            <p><i>A bit about me: I’m a runner, backpacker, and  full-on sushi addict (seriously…please send help).</i></p>
            <p>Since 2014, I’ve built Hard-Working Websites™ and developed impactful digital brands for over 35 businesses. Have a project in mind? <a href='#contact'>Drop me a message</a> below. Let’s get the ball rolling!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionAbout

export const homeSectionAboutFragment = graphql`
  fragment homeSectionAbout on ContentfulLayoutPageHome {
    aboutImage {
      ...imageMediumFluid
    }
  }
`