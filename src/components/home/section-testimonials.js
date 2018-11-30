import React from 'react'
import {graphql} from 'gatsby'
import css from 'less/section-testimonials.module.less'

const TestimonialSection = ({
  data
}) => {
  return (
    <section id='testimonials' className={css.section}>
    </section>
  )
}

// export default props => (
//   <StaticQuery
//     query={query}
//     render={data => <TestimonialSection data={data} {...props}/>}
//   />
// )

// const query = graphql`
//   {

//   } 
// `