import React from 'react'
import Hero from 'components/hero-home'
import Layout from 'components/layout'
import WorkSection from 'components/home/section-work'
import JournalSection from 'components/home/section-journal'
import {Helmet} from 'react-helmet'
import ProblemSection from 'components/home/section-problem'
import SolutionSection from 'components/home/section-solution'
import ServicesSection from 'components/home/section-services'

const HomePage = ({data}) => {
  const description = "Andrew Folts is a web designer and developer based in Rochester, New York who works one-on-one with small businesses and nonprofits to plan, build, and manage Hard-Working Websites™."

  return (
    <Layout >
      <Helmet>
        <title>Sherpa Design Co. | Small Business Web Designer &amp; Developer | New York</title>
        <meta name='description' content={description}/>
      </Helmet>
      <Hero/>
      <ProblemSection/>
      <SolutionSection/>
      <ServicesSection/>
      <WorkSection/>
      <JournalSection/>
    </Layout>
  )
}

export default HomePage