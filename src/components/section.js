import React from 'react'
import PropTypes from 'prop-types'

export default class Section extends React.Component {

  constructor(props) {
    super(props) 

    this.id = `${props.name}Section`
  }

  render() {
    const {
      style,
      className,
      children
    } = this.props

    return ( 
      <section id={this.id} className={className} style={style}>
        {children}
      </section>
    )
  }

}

Section.propTypes = {
  name: PropTypes.string.isRequired
}

Section.defaultProps = {

}