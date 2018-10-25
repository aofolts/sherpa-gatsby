import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import Hero from '../components/hero-secondary'
import Wrap from '../components/wrap'
import richText from '../less/rich-text.module.less'
import {Helmet} from 'react-helmet'
import css from '../less/single-work.module.less'
import Section from '../components/section'

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
      <Section name='testimonial'>
        <Wrap width='blog'>
          <Testimonial {...{author,quote}}/>
        </Wrap>
      </Section>
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
      <Section name='content' className={css.contentSection}>
        <Wrap width='blog'>
          <div className={richText.container} dangerouslySetInnerHTML={{__html: html}}/>
        </Wrap>
      </Section>
    </Layout>
  )
}

export default SingleWork

export const pageQuery = graphql`
  query WorkByPath($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      html
      excerpt
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        tags
        ...workTestimonial
        featuredImage {
          childImageSharp {
            sizes(maxWidth: 1920) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`

export const workTestimonialFragment = graphql`
  fragment workTestimonial on frontmatter_2 {
    testimonial {
      author {
        name
        title
        photo {
          childImageSharp {
            original {
              src
            }
          }
        }
      }
      quote
    }
  }
`