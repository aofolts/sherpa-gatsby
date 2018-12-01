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

const AuthorPhotos = ({
  data,
  activeTestimonialId,
  setActiveTestimonialById
}) => {
  const photos = data.testimonials.map(({
    id,
    author
  }) => {
    const itemClasses = [
      css.authorAvatar,
      activeTestimonialId === id ? css.activeAuthorAvatar : css.inactiveAuthorAvatar
    ].join(' ')

    const handleClick = () => setActiveTestimonialById(id)

    return (
      <li key={id} className={itemClasses} onClick={handleClick}>
        <BackgroundImage {...author.photo} className={css.authorPhoto}/>
      </li>
    )
  })

  return (
    <ul className={css.authorAvatars}>
      {photos}
    </ul>
  )
}

const AuthorDetails = ({
  data,
  activeTestimonialId
}) => {
  const details = data.testimonials.map(({
    id,
    author
  }) => {
    const itemClasses = [
      css.authorDetails,
      activeTestimonialId === id ? css.activeAuthorDetails : css.inactiveAuthorDetails
    ].join(' ')

    return (
      <li key={id} className={itemClasses}>
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
    <ul className={css.authorsDetails}>
      {details}
    </ul>
  )
}


const Nav = ({
  data,
  setActiveTestimonialById,
  activeTestimonialId
}) => {
  const authorProps = {
    data,
    setActiveTestimonialById,
    activeTestimonialId
  }

  return (
    <nav className={css.nav}>
      <AuthorPhotos {...authorProps}/>
      <AuthorDetails {...authorProps}/>
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