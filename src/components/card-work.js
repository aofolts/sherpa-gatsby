import React from 'react'
import {Link} from 'gatsby'
import css from '../less/card-blog.module.less'
import Image from 'gatsby-image'

const BlogCard = ({
  title,
  excerpt,
  path,
  featuredImage,
  category
}) => {

  return (
    <article className={css.card} >
      <Link to={path}>
        <div className={css.media}>
          <Image 
            alt={title} 
            sizes={featuredImage.sizes}
            outerWrapperClassName='mediaBackground'
            className='mediaBackground'
          />
        </div>
        <div className={css.content}>
          {/* <h4 className={css.category}>#{category}</h4> */}
          <h3 className={css.title}>{title}</h3>
          <p className={[css.excerpt,'p2'].join(' ')} dangerouslySetInnerHTML={{__html: excerpt}}/>
          <p className={['textLink p2',css.readMore].join(' ')}>View Project</p>
        </div>
      </Link>
    </article>
  )
}

export default BlogCard