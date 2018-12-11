import React,{Fragment} from 'react'
import {graphql} from 'gatsby'
import Hero from 'components/hero-home'
import {withLayout} from 'components/layout'
import ProblemSection from './section-problem'
import SolutionSection from './section-solution'
import ServicesSection from './section-services'
import TestimonialsSection from 'components/section-testimonials'
import SectionAbout from './section-about'
import {pick} from 'lodash'

const HomePage = ({
  data
}) => {
  const {
    page
  } = data

  const {
    layout
  } = page

  return (
    <Fragment>
      <Hero data={{backgroundImage: page.featuredImage}}/>
      <ProblemSection/>
      <SolutionSection/>
      <ServicesSection/>
      <TestimonialsSection/>
      <SectionAbout data={pick(layout,['aboutImage'])}/>
    </Fragment>
  )
}

export const query = graphql`
  {
    page: contentfulPage(slug: {eq: "home"}) {
      ...pageFields
      layout {
        ... on ContentfulLayoutPageHome {
          testimonials {
            ...testimonial
          }
          ...homeSectionAbout
        }
      }
    }
  }
`

export default withLayout(HomePage)