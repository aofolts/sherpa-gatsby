import React from 'react'
import {graphql,StaticQuery} from 'gatsby'
import css from 'less/home/home.module.less'
import BlogCard from '../../components/card-blog'

const HomeJournalSection = ({posts}) => {
  const cards = posts.map(post => {
    const {
      frontmatter,
      id
    } = post

    const data = {
      ...frontmatter,
      featuredImage: frontmatter.featuredImage.childImageSharp
    }
 
    return <BlogCard key={id} {...data}/>
  })

  return (
    <section id='journal' className={css.journalSection}>
      <div className='wrapMain'>
        <h2 className={css.journalSectionHeadline}>Latest Articles</h2>
        <div className='thirdsGrid'>
          {cards}
        </div>
      </div>
    </section>
  )
}