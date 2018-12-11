import React,{Fragment} from 'react'
import {graphql} from 'gatsby'
import {withLayout} from 'components/layout'
import Hero from 'components/hero-secondary'
import css from './index.module.less'
import TestimonialsSection from 'components/section-testimonials'
import ArchiveSection from './section-archive'

const Page = ({
  data
}) => {
  const {
    page
  } = data

  return (
    <Fragment>
      <Hero title={page.title} backgroundImage={page.featuredImage}/>
      <ArchiveSection/>
      <TestimonialsSection className={css.testimonialsSection} pattern={false}/>
    </Fragment>    
  )
}

export default withLayout(Page)

export const query = graphql`
  {
    page: contentfulPage(slug: {eq: "work"}) {
      ...pageFields
    }
  }
`