import React,{Fragment} from 'react'
import {graphql} from 'gatsby'
import {withLayout} from 'components/layout'
import Hero from 'components/hero-secondary'

const Page = ({
  data
}) => {
  const {
    page
  } = data

  return (
    <Fragment>
      <Hero title={page.title} background={page.featuredImage}/>
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
    featuredImage {
      ...heroImage
    }
    seo {
      ...seoFields
    }
  }
`