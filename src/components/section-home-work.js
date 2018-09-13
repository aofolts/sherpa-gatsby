import React from 'react'
import {Link,graphql,StaticQuery} from 'gatsby'
import css from '../less/home.module.less'
import Section from './section'
import Wrap from './wrap'
import pattern from '../images/pattern-abstract-shapes.svg'

const HomeWorkSection = ({title,excerpt,path}) => {
  return (
    <Section name='work' className={css.workSection}>
      <div 
        className={css.workSectionBackground}
        style={{backgroundImage: `url(${pattern})`}}
      />
      <Wrap width='small'>
        <article>
          <Link to={path}>
            <div className={css.workSectionContent}>
              <h4 className={css.workSectionSubTitle}>Latest Work</h4>
              <h2 className={css.workSectionTitle}>{title}</h2>
              <p className={css.workSectionExcerpt} dangerouslySetInnerHTML={{__html: excerpt}}/>
              <div className='primaryLightButton'>
                View Project
              </div>
            </div>
          </Link>
        </article>
      </Wrap>
    </Section>
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
          ) {
            edges {
              node {
                frontmatter {
                  title
                  excerpt
                  path
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