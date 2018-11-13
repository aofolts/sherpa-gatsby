import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import Hero from '../components/hero-secondary'

import richText from '../less/rich-text.module.less'
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
      <div className='wrapSmall'>
        <div className={richText.container} dangerouslySetInnerHTML={{__html: html}}/>
      </div>
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