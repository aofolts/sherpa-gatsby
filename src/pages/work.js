import React from 'react'
import {graphql} from 'gatsby'
import Layout from 'components/layout'
import Hero from 'components/hero-secondary'
import css from 'less/page-work.module.less'
import WorkCard from 'components/card-work'
import {Helmet} from 'react-helmet'
import Button from 'components/button'

const Intro = () => {
  return (
    <section id='intro' style={{textAlign: 'center'}}>
      <div className='wrapSmall'>
        <h2>Helping Small Businesses Grow</h2>
        <p>I love building long-term relationships and growing with my clients! Whether you're planning a complex website or just need a hand getting a simple landing page up, I'm here to help.</p>
        <Button label='Get Started' link={{page: '/get-started'}}/>
      </div>
    </section>
  )
}

const Archive = ({posts}) => {
  const cards = posts.map(post => {
    return (
      <WorkCard key={post.title} {...post} />
    )
  })

  return (
    <section id='archive' className={css.archiveSection}>
      <div className='wrapMain'>
        <div className='thirdsGrid'>
          {cards}
        </div>
      </div>
    </section>
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
        <meta name='description' content="Helping small businesses grow: I love building long-term relationships that help my clients grow. Here's what I've been working on recently."/>
        <meta name='keywords' content='packages,web design,web development'/>
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