import React from 'react'
import css from './hero.module.less'
import BackgroundImage from 'components/image-background'

const FeaturedImage = ({
  data
}) => {
  return (
    <div className={css.featuredMediaSection}>
      <div className={css.featuredMedia}>
        <div className={css.featuredMediaBackground}>
          <BackgroundImage {...data.image} className={css.featuredImage}/>
        </div>
      </div>
    </div>
  )
}

const TextContent = ({
  data
}) => {
  return (
    <div className={css.textContent}>
      <h1 className={css.title}>{data.title}</h1>
      <p className={css.summary}>
        <span className={css.summaryPrepend}>
          TL;DR:
        </span> {data.summary}
      </p>
    </div>
  )
}

const Hero = ({
  data
}) => {
  return (
    <section id='hero' className={css.section}>
      <div className={css.container}>
        <div className={css.wrap}>
          <TextContent data={data}/>
          <FeaturedImage data={{image: data.featuredImage}}/>
        </div>
      </div>
    </section>
  )
}

export default Hero