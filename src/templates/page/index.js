import React,{Fragment} from 'react'
import {graphql} from 'gatsby'
import {withLayout} from 'components/layout'
import Hero from 'components/hero-secondary'
import css from './index.module.less'
import TestimonialsSection from 'components/section-testimonials'
import RichText from 'components/rich-text'

const ContentSection = ({
  data
}) => {
  return (
    <section id='section-content' className={css.section}>
      <div className={css.wrap}>
        <RichText 
          html={data.content} 
          className={css.content} 
          isLongform={true}/>
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

  const {
    layout 
  } = page

  // Deprecated: switching to Contentful rich text only
  const content = layout.content.childMarkdownRemark        
    ? layout.content.childMarkdownRemark.html
    : layout.content.childContentfulRichText.html

  return (
    <Fragment>
      <Hero title={page.title} backgroundImage={page.featuredImage}/>
      <ContentSection data={{content}}/>
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
      ...contentfulRichTextMaster
      ## Deprecated: switching to Contentful rich text only
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

export const contentfulRichTextMasterFragment = graphql`
  fragment contentfulRichTextMaster on ContentfulRichTextMaster {
    content: childContentfulRichTextMasterContentRichTextNode {
      childContentfulRichText {
        html
      }
    }
  }
`

// Deprecated: switching to Contentful rich text
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