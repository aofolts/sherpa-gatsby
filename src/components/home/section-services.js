import React from 'react'
import css from 'less/home/section-services.module.less'
import ServiceCard from 'components/card-service'
import curvyLine from 'svg/curvy-horizontal-path.svg'

const Intro = () => {
  return (
    <div className={css.intro}>
      <h2 className={css.headline}>Could you be doing <i>better</i> online?</h2>
      <p className={css.paragraph}>If you’re ready to make a change, but you’re not sure where to start (and DIY won't cut it), I’m here to help. We’ll work one-on-one to define the problem and develop an ideal solution.</p>
      <svg className={css.curvyPath}>
        <use xlinkHref={`#${curvyLine.id}`}/>
      </svg>
    </div>
  )
}

const Services = () => {
  const data = {
    services: [
      {
        title: 'Digital Strategy',
        description: 'Research, interviews, timelines, and insights that give you a crystal-clear path forward.',
        icon: 'target',
        cta: 'Get Strategic',
        link: '/digital-strategy'
      },
      {
        title: 'Landing Page',
        description: 'A lean, mean 1-pager that has a single purpose: increasing event signups, selling a book, etc.',
        icon: 'rocket',
        cta: 'Make a splash',
        link: '/landing-pages'
      },
      {
        title: 'Custom Website',
        description: 'Stop renting. Let’s build a unique digital home for your business that truly engages customers.',
        icon: 'website',
        cta: 'Build a home',
        link: '/custom-websites'
      }
    ]
  }

  const cards = data.services.map(entry => {
    return (
      <ServiceCard entry={entry}/>
    )
  })

  return (
    <div className={css.services}>
      {cards}
    </div>
  )
}

const ServicesSection = () => {
  return (
    <section id='services' className={css.section}>
      <div className={css.wrap}>
        <Intro/>
        <Services/>
      </div>
    </section>
  )
}

export default ServicesSection