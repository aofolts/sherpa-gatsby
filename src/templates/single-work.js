import React from 'react'
import {graphql} from 'gatsby'
import Layout from 'components/layout'
import Hero from 'components/hero-secondary'
import richText from 'less/rich-text.module.less'
import {Helmet} from 'react-helmet'
import css from 'less/single-work.module.less'

export const Testimonial = ({author,quote}) => {
  const {
    photo,
    name,
    title
  } = author

  const imgSrc = photo.childImageSharp.original.src

  return (
    <div className={css.testimonial}>
      <div className={css.quote}>"{quote}"</div>
      <div className={css.testimonialMeta}>
        <div className={css.avatar}>
          <img className='mediaBackground' src={imgSrc} alt={`${name} Avatar`}/>
        </div>
        <div className={css.testimonialInfo}>
          <div className={css.testimonialAuthor}>{name}</div>
          <div className={css.testimonialAuthorTitle}>{title}</div>
        </div>
      </div>
    </div>
  )
}

const TestimonialSection = ({author,quote}) => {
   if (quote !== `TK`) {
    return (
      <section id='testimonial'>
        <div className='wrapSmall'>
          <Testimonial {...{author,quote}}/>
        </div>
      </section>
    )
   }
   return null
}

const SingleWork = ({data}) => {
  const {
    markdownRemark: remark
  } = data

  const {
    frontmatter,
    html,
    excerpt
  } = remark

  const {
    title,
    featuredImage,
    tags,
    testimonial: testimonialData
  } = frontmatter

  const metaTags = tags ? tags.join(',') : 'Sherpa Design Co.,journal'

  return (
    <Layout>
      <Helmet>
        <title>{`${title} | Sherpa Design Co.`}</title>
        <meta name='description' content={excerpt}/>
        <meta name='keywords' content={metaTags}/>
      </Helmet>
      <Hero title={title} image={featuredImage.childImageSharp}/>
      <TestimonialSection {...testimonialData}/>
      <section id='content' className={css.contentSection}>
        <div className='wrapSmall'>
          <div className={richText.container} dangerouslySetInnerHTML={{__html: html}}/>
        </div>
      </section>
    </Layout>
  )
}

export default SingleWork