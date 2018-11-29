import React from 'react'
import {Link,graphql,StaticQuery} from 'gatsby'
import {Testimonial} from 'templates/single-work'
import css from 'less/home/section-work.module.less'

const HomeWorkSection = ({title,excerpt,path,testimonial}) => {
  return (
    <section id='work' className={css.section}>
      <div className='wrapSmall'>
        <article>
          <Link to={path}>
            <div className={css.content}>
            <h4>Recent Work</h4>
              <h2>Great Dames</h2>
              <Testimonial {...testimonial}/>
              {/* <h4 className={css.workSectionSubTitle}>Latest Work</h4>
              <h2 className={css.workSectionTitle}>{title}</h2>
              <p className={css.workSectionExcerpt} dangerouslySetInnerHTML={{__html: excerpt}}/> */}
              <div className={['primaryLightButton',css.button].join(' ')}>
                View Project
              </div>
            </div>
          </Link>
        </article>
      </div>
    </section>
  )
}

export default () => (
  <StaticQuery
    query={
      graphql`
        {
          allMarkdownRemark(
            filter: {fileAbsolutePath: {regex: "content/work/"}}
            sort: {
              order:DESC
              fields: [frontmatter___date]
            }
            limit: 1
          ) {
            edges {
              node {
                frontmatter {
                  title
                  excerpt
                  path
                  ...workTestimonial
                }
              }
            }
          }
        }
      `
    }
    render={data => {
      const node = data.allMarkdownRemark.edges[0].node

      return <HomeWorkSection {...node.frontmatter}/>
    }}
  />
)