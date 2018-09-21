import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import Hero from '../components/hero-secondary'
import Wrap from '../components/wrap'
import {Helmet} from 'react-helmet'

const Page = ({data}) => {

  const {
    markdownRemark: remark
  } = data

  const {
    frontmatter,
    html
  } = remark

  const {
    title,
    featuredImage,
    seo
  } = frontmatter

  return (
    <Layout>
      <Helmet>
        <title>{seo.title}</title>
        <meta name='description' content={seo.description}/>
      </Helmet>
      <Hero title={title} image={featuredImage.childImageSharp}/>
      <Wrap width='blog'>
        <div className='longformContent' dangerouslySetInnerHTML={{__html: html}}/>
      </Wrap>
    </Layout>
  )
}

export default Page

export const pageQuery = graphql`
  query pageByPath($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      frontmatter {
        path
        title
        featuredImage {
          childImageSharp {
            sizes(maxWidth: 1920) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        seo {
          title
          description
        }
      }
      html
    }
  }
`;