import React,{Fragment} from 'react'
import {graphql} from 'gatsby'
import {withLayout} from 'components/layout'
import Hero from 'components/hero-secondary'
import css from './index.module.less'
import Card from 'components/card-journal-entry'
import TestimonialsSection from 'components/section-testimonials'

const ArchiveSection = ({
  data
}) => {
  const cards = data.journalEntries.map(entry => {
    return <Card key={entry.id} entry={entry}/>
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

const JournalPage = ({
  data
}) => {
  const {
    page
  } = data

  const journalEntries = data.journalEntries.edges.map(entry => entry.node)

  return (
    <Fragment>
      <Hero title={page.title} backgroundImage={page.featuredImage}/>
      <ArchiveSection data={{journalEntries}}/>
      <TestimonialsSection pattern={false} className={css.testimonialsSection}/>
    </Fragment>
  )
}

export const query = graphql`
  {
    page: contentfulPage(slug: {eq: "journal"}) {
      ...pageFields
    }
    journalEntries: allContentfulJournalEntry(
      limit: 9
    ) {
      edges {
        node {
          ...journalEntryCard
        }
      }
    }
  }
`

export default withLayout(JournalPage)