import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import Hero from '../components/hero-secondary'
import Wrap from '../components/wrap'

const SingleWork = ({data}) => {

  const {
    markdownRemark: remark
  } = data

  const {
    frontmatter,
    html
  } = remark

  const {
    title,
    featuredImage
  } = frontmatter

  return (
    <Layout>
      <Hero title={title} image={featuredImage}/>
      <Wrap width='blog'>
        <div dangerouslySetInnerHTML={{__html: html}}/>
      </Wrap>
    </Layout>
  )
}

export default SingleWork

export const pageQuery = graphql`
  query WorkByPath($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
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
`;