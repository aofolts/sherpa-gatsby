import React,{Component} from 'react'
import css from 'less/home/section-testimonials.module.less'
import BackgroundImage from 'components/image-background'
import {graphql} from 'gatsby'
import topoPattern from 'svg/topo-map.svg'

const Cards = ({
  data,
  activeTestimonialId
}) => {
  const cards = data.testimonials.map(({
    quoteHeadline,
    quoteBody,
    id
  }) => {
    const cardClasses = [
      css.card,
      activeTestimonialId === id ? css.activeCard : css.inactiveCard
    ].join(' ')

    return (
      <div key={id} className={cardClasses}>
        <h2 className={css.quoteHeadline}>"{quoteHeadline}"</h2> 
        <p className={css.quoteBody}>{quoteBody.quoteBody}</p>
      </div>
    )
  })

  return (
    <div className={css.quotes}>
      {cards}
    </div>
  )
}

const Nav = ({
  data,
  setActiveTestimonialById,
  activeTestimonialId
}) => {
  const items = data.testimonials.map(({
    id,
    author
  }) => {
    const itemClasses = [
      css.menuItem,
      activeTestimonialId === id ? css.activeMenuItem : css.inactiveMenuItem
    ].join(' ')

    return (
      <li key={id} className={itemClasses}>
        <div className={css.authorMedia}>
          <BackgroundImage {...author.photo} className={css.authorPhoto}/>
        </div>
        <div className={css.authorName}>
          {author.fullName}
        </div>
        <div className={css.authorTitle}>
          {author.title}
        </div>
      </li>
    )
  })

  return (
    <nav className={css.nav}>
      <ul className={css.menu}>
        {items}
      </ul>
    </nav>
  )
}

class TestimonialSection extends Component {

  constructor(props) {
    super(props)
  
    const {
      data
    } = props

    this.state = {
      activeTestimonialId: data.testimonials[0].id
    }
  }

  setActiveTestimonialById = id => {
    this.setState({
      activeTestimonialId: id
    })
  }

  render() {
    const {
      setActiveTestimonialById
    } = this

    const {
      data
    } = this.props

    const {
      activeTestimonialId
    } = this.state

    return (
      <section id='testimonials' className={css.section}>
        <svg className={css.topoPattern}>
          <use xlinkHref={`#${topoPattern.id}`}/>
        </svg>
        <div className={css.wrap}>
          <Cards data={data} activeTestimonialId={activeTestimonialId}/>
          <Nav data={data} {...{activeTestimonialId,setActiveTestimonialById}}/>
        </div>
      </section>
    )
  }
}

export const testimonialFragment = graphql`
  fragment testimonial on ContentfulTestimonial {
    id
    quoteHeadline
    quoteBody {
      quoteBody
    }
    author {
      id
      fullName
      firstName
      lastName
      email
      title
      company
      photo {
        ...smallFluidImage
      }
    }
  }
`

export default TestimonialSection