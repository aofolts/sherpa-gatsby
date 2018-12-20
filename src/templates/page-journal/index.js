import React,{Fragment,useState} from 'react'
import {graphql} from 'gatsby'
import {withLayout} from 'components/layout'
import Hero from 'components/hero-secondary'
import css from './index.module.less'
import Nav from './nav'
import ArchiveSection from './section-archive'

const JournalPage = ({
  data
}) => {
  const {
    page
  } = data

  const [activeAudience,setActiveAudience] = useState('Everyone')
  const context = {
    activeAudience,
    setActiveAudience 
  }

  const journalEntries = data.journalEntries.edges.map(entry => entry.node)

  return (
    <Fragment>
      <Hero title={page.title} backgroundImage={page.featuredImage}/>
      <Nav context={context}/>
      <ArchiveSection data={{journalEntries}} context={context}/>
    </Fragment>
  )
}

export const query = graphql`
  {
    page: contentfulPage(slug: {eq: "journal"}) {
      ...pageFields
    }
    journalEntries: allContentfulJournalEntry(
      limit: 9,
      sort: {
        fields: [publishDate],
        order: DESC
      }
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