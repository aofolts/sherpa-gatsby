import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import css from '../less/page-process.module.less'

const IntroSection = () => {
  return (
    <section id='intro'>
      <div className='wrapMain'>
        <div className={css.introContent}>
          <h1 className={css.introHeadline}>How I make Hard-Working Websites™, from A-Z.</h1>
          <p className={css.introCopy}>Find out how following a structured web design process can help you deliver more successful websites faster and more efficiently.</p>
        </div>
      </div>
    </section>
  )
}

const StagesSection = ({
  steps
}) => {
  const modules = steps.map(({
    title,
    html
  }) => {
    return (
      <li key={title} className={css.stage}>
        <h2 className={css.stageTitle}>{title}</h2>
        <div className={css.stageDescription} dangerouslySetInnerHTML={{__html: html}}/>
      </li>
    )
  })

  return (
    <section id='stages' className={css.stagesSection}>
      <div className={css.stagesWrap}>
        <div className={css.stages}>
          {modules}
        </div>
      </div>
    </section>
  )
}

const ProcessPage = ({
  data
}) => {
  const {
    steps
  } = data

  return (
    <Layout hasHero={false}>
      <IntroSection/>
      <StagesSection steps={steps.edges.map(step => step.node)}/>
    </Layout>
  )
}

export default ProcessPage

export const query = graphql`
  {
    steps: allMarkdownRemark(
      filter: {
        fileAbsolutePath: {regex: "/data/process/"}
      }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          html
        }
      }
    }
  }
`