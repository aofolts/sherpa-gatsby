import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import Hero from '../components/hero-secondary'
import Wrap from '../components/wrap'
import Section from '../components/section'
import css from '../less/page-work.module.less'
import WorkCard from '../components/card-work'
import {Helmet} from 'react-helmet'

const Intro = () => {
  return (
    <Section name='intro' style={{textAlign: 'center'}}>
      <Wrap width='small'>
        <h2>Helping Small Businesses Grow</h2>
        <p>I love building long-term relationships that help my clients grow. Here's what I've been working on recently.</p>
      </Wrap>
    </Section>
  )
}

const Archive = ({posts}) => {
  const cards = posts.map(post => {
    return (
      <WorkCard key={post.title} {...post} />
    )
  })

  return (
    <Section name='archive' className={css.archiveSection}>
      <Wrap>
        <div className='thirdsGrid'>
          {cards}
        </div>
      </Wrap>
    </Section>
  )
}

const WorkTemplate = ({data}) => {
  const {
    allMarkdownRemark,
    imageSharp
  } = data

  const posts = allMarkdownRemark.edges.map(({node}) => {
    const {
      frontmatter,
      html
    } = node

    return {
      ...frontmatter,
      html,
      featuredImage: frontmatter.featuredImage.childImageSharp
    }
  })

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Work | Sherpa | Web Designer &amp; Developer | New York</title>
      </Helmet>
      <Hero title='Recent Projects' image={imageSharp}/>
      <Intro/>
      <Archive posts={posts}/>
    </Layout>
  )
}

export default WorkTemplate

export const pageQuery = graphql`
  {
    imageSharp(
      original: {
        src: {regex: "/houses-mountains/"}
      }
    ) {
      sizes(maxWidth: 1920) {
        ...GatsbyImageSharpSizes
      }
    }
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "data/work/"}}, 
      sort: {
        order: DESC, 
        fields: [frontmatter___date]}, 
      limit: 9
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            excerpt
            path
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
    }
  }
`