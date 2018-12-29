import React from 'react'
import {graphql} from 'gatsby'
import Layout from 'components/layout'
import ContentSection from './section-content'
import TestimonialsSection from 'components/section-testimonials'
import css from './index.module.less'
import { getPageUrl } from 'utilities/router'
import Hero from './hero'

const SingleJournal = ({
  data
}) => {
  const {
    page
  } = data

  const meta = {
    title: page.title,
    description: 'Description',
    url: getPageUrl(page),
    image: {
      url: page.featuredImage.fluid.src
    }
  }

  const content = page.content.childContentfulRichText.html

  const heroData = {
    title: page.title,
    summary: page.summary.summary,
    featuredImage: page.featuredImage
  }
  
  return ( 
    <Layout meta={meta}>
      <Hero data={heroData}/>
      <ContentSection data={{...data,content}}/> 
      <TestimonialsSection className={css.testimonialsSection} pattern={false}/>
      {/* TODO: Add previous/next story section */}
    </Layout>
  )
}

export default SingleJournal

export const pageQuery = graphql`
  query journalBySlug($slug: String!) {
    page: contentfulJournalEntry(slug: {eq: $slug}) {
      ...journalEntryInfo
      featuredImage {
        ...heroImage
      }
    }
  } 
`

export const journalInfoFragment = graphql`
  fragment journalEntryInfo on ContentfulJournalEntry {
    id
    title
    slug
    __typename
    dayNumber: publishDate(formatString: "D")
    month: publishDate(formatString: "MMMM")
    year: publishDate(formatString: "Y")
    fullPublishDate: publishDate(formatString: "MMMM D, Y")
    audience
    category
    tags
    summary {
      summary
    }
    content {
      childContentfulRichText {
        html
      }
    }
  }
`