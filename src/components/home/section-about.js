import React from 'react'
import BackgroundImage from 'components/image-background'
import {graphql} from 'gatsby'
import css from 'less/home/section-about.module.less'

const SectionAbout = ({
  data
}) => {
  return (
    <section id='about' className={css.section}>
      <div className={css.wrap}>
        <div className={css.imageWrap}>
          <div className={css.media}>
            <svg className={css.imageFrame} viewBox='0 0 100 100' stroke='black' preserveAspectRatio='none'>
              <polygon points="1 20,97 12,85 97,5 85" vectorEffect='non-scaling-stroke'/>
            </svg>
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