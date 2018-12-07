import React,{Fragment} from 'react'
import {graphql} from 'gatsby'
import {withLayout} from 'components/layout'
import Hero from 'components/hero-secondary'
import css from './index.module.less'
import TestimonialsSection from 'components/section-testimonials'

const ContentSection = ({
  data
}) => {
  const content = data.content.childMarkdownRemark.html

  return (
    <section id='section-content' className={css.section}>
      <div className={css.wrap}>
        <div className={css.content} dangerouslySetInnerHTML={{__html: content}}/>
      </div>
    </section>
  )
}

const Page = ({
  data
}) => {
  const {
    page
  } = data

  return (
    <Fragment>
      <Hero title={page.title} background={page.featuredImage}/>
      <ContentSection data={{...page.layout}}/>
      <TestimonialsSection className={css.testimonialsSection} pattern={false}/>
    </Fragment>    
  )
}

export default withLayout(Page)

export const query = graphql`
  query pageBySlug($slug: String!) {
    page: contentfulPage(slug: {eq: $slug}) {
      ...pageFields
    }
  }
`

export const pageFieldsFragment = graphql`
  fragment pageFields on ContentfulPage {
    id
    title
    slug
    layout {
      ...contentfulMarkdown
    }
    internal {
      type
    }
    featuredImage {
      ...heroImage
    }
    seo {
      ...seoFields
    }
  }
`

export const contentfulMarkdownFragment = graphql`
  fragment contentfulMarkdown on ContentfulMarkdown {
    id
    content {
      childMarkdownRemark {
        html
      }
    }
  }
`