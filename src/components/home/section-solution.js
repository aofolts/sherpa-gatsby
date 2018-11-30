import React from 'react'
import css from 'less/home/section-solution.module.less'
import Icon from 'components/icon'

const Stats = () => {
  const data = {
    stats: [
      {
        headline: 'Order Up!',
        paragraph: 'Helped a restaurant rank #1 in Google search results.',
        stat: 'No. 1'
      },
      {
        headline: 'Big Ideas',
        paragraph: 'Sold out an entrepreneureal ideas competition.',
        stat: 'RSVP'
      },
      {
        headline: 'Time Saved',
        paragraph: 'Reduced time admins spent managing content by 82%.',
        stat: '-82%'
      }
    ]
  }

  const items = data.stats.map(({
    headline,
    paragraph,
    stat
  }) => {
    return (
      <li key={stat} className={css.statItem}>
        <div className={css.stat}>{stat}</div>
        <div className={css.statItemText}>
          <h5 className={css.statItemHeadline}>{headline}</h5>
          <p className={css.statItemParagraph}>{paragraph}</p>
        </div>
      </li>
    )
  })

  return (
    <ul className={css.stats}>
      {items}
    </ul>
  )
}

const Tip = ({
  children,
  className
}) => {
  return (
    <div className={className}>
      <div>
        {children}
      </div>
      <Icon name='tip-arrow' className={css.aboutTipArrow}/>
    </div>
  )
}

const About = () => {
  return (
    <div className={css.about}>
      <Tip className={css.aboutTip}>
        Need a website?<br/>I can help.
      </Tip>
      <h2>I’m Andrew, a <u>digital strategist</u>, designer, and coder who goes from concept to launch.</h2>   
      <p>Nothing’s worse than a half-finished project. (Yikes!) But not to worry. I handle all the technical legwork—so my clients can count on a consistent end-product.</p>
      <p>Here are a few examples...</p>
    </div>
  )
}

const SolutionSection = props => {
  return (
    <section id='needs' className={css.section}>
      <div className={css.wrap}>
        <About/>
        <Stats/>
      </div>
    </section>
  )
}

export default SolutionSection