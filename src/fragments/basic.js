import {graphql} from 'gatsby'

export const siteMetaFragment = graphql`
  fragment siteMeta on Site {
    meta: siteMetadata {
      title
      url: siteUrl,
      location
    }
  }
`

export const seoFragment = graphql`
  fragment seoFields on ContentfulSeo {
    title
    description {
      description
    }
  }
`