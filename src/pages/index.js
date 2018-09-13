import React from 'react'
import {Link} from 'gatsby'
import Hero from '../components/hero-home'
import Layout from '../components/layout'
import Section from '../components/section'
import Wrap from '../components/wrap'
import WorkSection from '../components/section-home-work'

import css from '../less/home.module.less'
import designIcon from '../icons/icon-service-design.svg';
import codingIcon from '../icons/icon-service-coding.svg';
import writingIcon from '../icons/icon-service-writing.svg';

const Intro = props => {
  return (
    <Section name='intro' className={css.intro}>
      <Wrap width='small'>
        <h2>Hi there, I'm Andrew.</h2>
        <p>I’m a Rochester, New York-based freelance <Link to='/about'>web designer</Link> and developer who works one-on-one with business owners to plan, build, and manage high-performing websites.</p>
      </Wrap>
    </Section>
  )
}

const Services = props => {
  const itemsData = [
    {
      title: 'Web Design',
      copy: "I’ll combine unique aspects of your business into a clear digital identity that helps you connect with and engage your audience.",
      icon: designIcon  
    },
    {
      title: 'Copywriting',
      copy: "The web moves fast. We’ll work together to deliver messaging that captures attention and encourages people to take action.",
      icon: writingIcon  
    },
    {
      title: 'Web Development',
      copy: "Webites I build are 100% customized to your requirements, so you’ll have all the features you need to be successful online.",
      icon: codingIcon  
    }
  ]

  const items = itemsData.map(({title,copy,icon}) => {
    return (
      <article key={title} className={css.serviceCard}>
        <img src={icon} alt={title} className={css.serviceIcon}/>
        <div className={css.serviceCardContent}>
          <h3 className={css.serviceCardTitle}>{title}</h3>
          <p className={'p2'}>{copy}</p>
        </div>
      </article>
    )
  })
  const gridClasses = [
    css.servicesGrid,'thirdsGrid'
  ].join(' ')

  return (
    <Section name='services' className={css.servicesSection}>
      <Wrap>
        <div className={gridClasses}>
          {items}
        </div>
      </Wrap>
    </Section>
  )
}

const IndexPage = ({data}) => {

  return (
    <Layout>
      <Hero/>
      <Intro/>
      <Services/>
      <WorkSection/>
    </Layout>
  )
}

export default IndexPage