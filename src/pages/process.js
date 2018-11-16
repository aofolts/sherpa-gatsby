import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import css from '../less/page-process.module.less'
import Image from 'gatsby-image'

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
    html,
    frontmatter
  }) => {
    const {
      title,
      featuredImage
    } = frontmatter

    return (
      <li key={title} className={css.stage}>
        <div className={css.stageContent}>
          <div className={css.stageMedia}>
            <Image className={[css.stageImage,'mediaBackground'].join(' ')} {...featuredImage.childImageSharp}/>
          </div>
          <h2 className={css.stageTitle}>{title}</h2>
          <div className={css.stageDescription} dangerouslySetInnerHTML={{__html: html}}/>
        </div>
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
      <div className={css.mainWrap}>
        <IntroSection/>
        <StagesSection steps={steps.edges.map(step => step.node)}/>
      </div>
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
            featuredImage {
              childImageSharp {
                fluid {
                  base64
                  src
                  aspectRatio
                  srcSet
                  srcSetWebp
                  sizes
                }
              }
            }
          }
          html
        }
      }
    }
  }
`