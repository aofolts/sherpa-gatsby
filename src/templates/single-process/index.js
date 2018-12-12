import React from 'react'
import {graphql} from 'gatsby'
import Layout from 'components/layout'
import Hero from 'components/hero-secondary'
import IntroSection from './section-intro'
import PhasesSection from './section-phases'
import {getPageUrl} from 'utilities/router'

const SingleProcess = ({
  data
}) => {
  const {
    page
  } = data

  const meta = {
    title: `${page.title} | ${data.site.meta.title} | ${data.site.meta.location}`,
    description: page.overview.overview,
    url: getPageUrl(page),
    image: {
      url: page.featuredImage.fluid.src
    }
  }

  return (
    <Layout meta={meta}>
      <Hero title={page.title} subTitle='Process' backgroundImage={page.featuredImage}/>
      <IntroSection data={{...page}}/>
      <PhasesSection data={{...page}}/>
    </Layout> 
  )
}

export default SingleProcess

export const query = graphql`
  query processSlug($slug: String!) {
    site {
      ...siteMeta
    }
    page: contentfulProcess(slug: {eq: $slug}) {
      ...processInfo
      featuredImage {
        ...heroImage
      }
      subProcesses {
        ...processInfo
        featuredImage {
          ...largeFluidImage
        }
      }
    }
  }
`

export const processInfoFragment = graphql`
  fragment processInfo on ContentfulProcess {
    id
    title
    slug
    headline
    internal {
      type
    }
    overview {
      overview
      childMarkdownRemark {
        html
      }
    }
    content {
      childMarkdownRemark {
        html
      }
    }
  }
`