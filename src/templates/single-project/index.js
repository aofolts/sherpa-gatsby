import React from 'react'
import {graphql} from 'gatsby'
import Layout from 'components/layout'
import Hero from 'components/hero-secondary'
import css from './index.module.less'
import BackgroundImage from 'components/image-background'
import ContentSection from './section-content'
import {getPageUrl} from 'components/link'

export const Testimonial = ({
  entry
}) => {
  const {
    author,
    quoteHeadline,
    quoteBody
  } = entry

  return (
    <div className={css.testimonial}>
      <h2 className={css.quoteHeadline}>"{quoteHeadline}"</h2>
      <div className={css.quoteBody}>{quoteBody.quoteBody}</div>
      <div className={css.testimonialMeta}>
        <div className={css.avatar}>
          <BackgroundImage {...author.photo}/>
        </div>
        <div className={css.testimonialInfo}>
          <div className={css.testimonialAuthor}>{author.fullName}</div>
          <div className={css.testimonialAuthorTitle}>{author.title}</div>
        </div>
      </div>
    </div>
  )
}

const TestimonialSection = ({entry}) => {
  return (
    <section id='testimonial' className={css.testimonialSection}>
      <div className={css.testimonialWrap}>
        <div className={css.testimonialContainer}>
          <Testimonial entry={entry}/>
        </div>
      </div>
    </section>
  )
}

const SingleProject = ({data}) => {
  const {
    page
  } = data

  const metaForLayout = {
    title: page.title,
    description: page.description.description,
    url: getPageUrl(page),
    image: {
      url: page.featuredImage.fluid.src
    }
  }

  const content = page.content.childContentfulRichText.html

  return (
    <Layout meta={metaForLayout}>
      <Hero title={page.title} backgroundImage={page.featuredImage}/>
      <ContentSection data={{content}}/>
      <TestimonialSection entry={page.testimonial}/>
    </Layout>
  )
}

export default SingleProject

export const query = graphql`
  query projectBySlug($slug: String!) {
    page: contentfulProject(slug: {eq: $slug}) {
      ...projectInfo 
      featuredImage {
        ...heroImage
      }
    }
  }
`

export const projectInfoFragment = graphql`
  fragment projectInfo on ContentfulProject {
    id
    title
    slug
    __typename
    client
    launchDate
    fullLaunchDate: launchDate(formatString: "MMMM D, Y")
    description {
      description
    }
    testimonial {
      ...testimonial
    }
    content {
      childContentfulRichText {
        html
      }
    }
  }
`