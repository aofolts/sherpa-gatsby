import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import Hero from '../components/hero-secondary'

import Section from '../components/section'
import css from '../less/page-work.module.less'
import BlogCard from '../components/card-blog'
import {Helmet} from 'react-helmet'

const Intro = () => {
  return (
    <Section name='intro' style={{textAlign: 'center'}}>
      <div className='wrapSmall'>
        <h2>Sharing Knowledge</h2>
        <p>Tune in for weekly tips on everything web—from design and development to starting a freelance career, networking locally, and growing a small business online.</p>
      </div>
    </Section>
  )
}

const Archive = ({posts}) => {
  const cards = posts.map(post => {
    return (
      <BlogCard key={post.title} {...post} />
    )
  })

  return (
    <Section name='archive' className={css.archiveSection}>
      <div className='wrapMain'>
        <div className='thirdsGrid'>
          {cards}
        </div>
      </div>
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
        <title>Journal: Weekly Tips For Small Businesses &amp; Freelancers</title>
        <meta name='description' content="Tune in for weekly tips on everything web—from design and development to starting a freelance career, networking locally, and growing a small business online."/>
      </Helmet>
      <Hero title='Latest Articles' image={imageSharp}/>
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
        src: {regex: "/rowboat-mountains/"}
      }
    ) {
      sizes(maxWidth: 1920) {
        ...GatsbyImageSharpSizes
      }
    }
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "data/journal/"}}, 
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
            category
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