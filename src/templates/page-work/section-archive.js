import React from 'react'
import css from './section-archive.module.less'
import {StaticQuery,graphql} from 'gatsby'
import Card from './card'

const ArchiveSection = ({
  data
}) => {
  const projects = data.projects.edges.map(entry => entry.node)

  const cards = projects.map(entry => {
    return (
      <Card key={entry.id} entry={entry}/> 
    )
  })

  return (
    <section id='section-archive' className={css.section}>
      <div className={css.wrap}>
        <div className={css.grid}>
          {cards}
        </div>
      </div>
    </section>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
    {
      projects: allContentfulProject(limit: 9) {
        edges {
          node {
            ...projectCard
          }
        }
      }
    }
  `}
    render={data => <ArchiveSection data={data} {...props}/>}
  />
)