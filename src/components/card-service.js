import React from 'react'
import css from 'less/card-service.module.less'
import Icon from 'components/icon'
import {Link} from 'gatsby'

const ServiceCard = ({entry}) => { 
  return (
    <article key={entry.title} className={css.card}>
      <Icon name={entry.icon} className={css.icon}/>
      <div className={css.content}>
        <h3 className={css.title}>{entry.title}</h3>
        <p className={css.description}>{entry.description}</p>
        <Link className={css.cta} to={entry.link}>
          {entry.cta}
        </Link>
      </div>
    </article> 
  )
}

export default ServiceCard