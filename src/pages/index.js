import React from 'react'
import {graphql} from 'gatsby'
import Hero from 'components/hero-home'
import Layout from 'components/layout'
import {Helmet} from 'react-helmet'
import ProblemSection from 'components/home/section-problem'
import SolutionSection from 'components/home/section-solution'
import ServicesSection from 'components/home/section-services'
import TestimonialsSection from 'components/home/section-testimonials'
import SectionAbout from 'components/home/section-about'
import {pick} from 'lodash'

const HomePage = ({data}) => {
  const description = "Andrew Folts is a digital strategist who works one-on-one with small businesses to plan, build, and manage Hard-Working Websites™."

  const {
    layout
  } = data

  return (
    <Layout>
      <Helmet>
        <title>Sherpa Design Co. | Hard-Working Websites™ | Rochester, New York</title>
        <meta name='description' content={description}/>
      </Helmet>
      <Hero/>
      <ProblemSection/>
      <SolutionSection/>
      <ServicesSection/>
      <TestimonialsSection data={pick(layout,['testimonials'])}/>
      <SectionAbout data={pick(layout,['aboutImage'])}/>
    </Layout>
  )
}

export const query = graphql`
  {
    layout: contentfulLayoutPageHome(
      internalName: {eq: "Home Page Layout"}
    ) {
      testimonials {
        ...testimonial
      }
      ...homeSectionAbout
    }
  }
`

export default HomePage