import React from 'react'
import Hero from 'components/hero-home'
import Layout from 'components/layout'
import WorkSection from 'components/home/section-work'
import JournalSection from 'components/home/section-journal'
import {Helmet} from 'react-helmet'
import ProblemSection from 'components/home/section-problem'
import SolutionSection from 'components/home/section-solution'

// const Services = props => {
//   const itemsData = [
//     {
//       title: 'Web Design',
//       copy: "I’ll combine unique aspects of your business into a clear digital identity that helps you connect with and engage your audience.",
//       Icon: DesignIcon
//     },
//     {
//       title: 'Copywriting',
//       copy: "The web moves fast. We’ll work together to deliver messaging that captures attention and encourages people to take action.",
//       Icon: WritingIcon
//     },
//     {
//       title: 'Web Development',
//       copy: "Webites I build are 100% customized to your requirements, so you’ll have all the features you need to be successful online.",
//       Icon: CodingIcon
//     }
//   ]

//   const items = itemsData.map(({title,copy,Icon}) => {
//     return (
//       <article key={title} className={css.serviceCard}>
//         <Icon alt={title} className={css.serviceIcon}/>
//         <div className={css.serviceCardContent}>
//           <h3 className={css.serviceCardTitle}>{title}</h3>
//           <p className={'p2'}>{copy}</p>
//         </div>
//       </article>
//     )
//   })
//   const gridClasses = [
//     css.servicesGrid,'thirdsGrid'
//   ].join(' ')

//   return (
//     <Section name='services' className={css.servicesSection}>
//       <div className='wrapMain'>
//         <div className={gridClasses}>
//           {items}
//         </div>
//       </div>
//     </Section>
//   )
// }

const IndexPage = ({data}) => {
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
      <WorkSection/>
      <JournalSection/>
    </Layout>
  )
}

export default IndexPage