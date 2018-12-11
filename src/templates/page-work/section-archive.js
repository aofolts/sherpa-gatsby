import React from 'react'
import css from './section-archive.module.less'
import { StaticQuery } from 'gatsby'
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
    query={query}
    render={data => <ArchiveSection data={data} {...props}/>}
  />
)

const query = graphql`
  {
    projects: allContentfulProject(limit: 9) {
      edges {
        node {
          ...projectCard
        }
      }
    }
  }
`