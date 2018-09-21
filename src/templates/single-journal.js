import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import Hero from '../components/hero-secondary'
import Wrap from '../components/wrap'
import richContent from '../less/rich-content.module.less'
import {Helmet} from 'react-helmet'

const SingleJournal = ({data}) => {

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
    tags
  } = frontmatter

  const metaTags = tags ? tags.join(',') : 'Sherpa Design Co.,work'
  
  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={excerpt}/>
        <meta name='keywords' content={metaTags}/>
      </Helmet>
      <Hero title={title} image={featuredImage.childImageSharp}/>
      <Wrap width='blog'>
        <div className={richContent.container} dangerouslySetInnerHTML={{__html: html}}/>
      </Wrap>
    </Layout>
  )
}

export default SingleJournal

export const pageQuery = graphql`
  query journalByPath($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      html
      excerpt
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        tags
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