import React from 'react'
import {Link} from 'gatsby'
import css from 'less/nav-main-brand.module.less'

const Logo = () => {
  const logoPathProps = {
    style: {
      fill: '#34D49D'
    },
    vectorEffect: "non-scaling-stroke"
  }

  return (
    <svg className={css.brandLogo} alt='sherpa logo' viewBox="0 0 1600 1600">
      <title>logo</title>
      <g id="navMainLogoPath">
        <path {...logoPathProps} d="M609.53,591A153.56,153.56,0,0,0,723.59,876.15l181.67-72.67a78.56,78.56,0,0,1,58.36,145.89L338,1199.61V380.39l425-170V360l75-30V99.61l-575,230v980.78L991.47,1019A153.56,153.56,0,0,0,877.41,733.85L695.74,806.52a78.56,78.56,0,0,1-58.36-145.88L1263,410.39v819.22l-425,170V1238.8L797.5,1255,763,1267.94v242.45l575-230V299.61Z"/>
      </g>
    </svg>
  )
}

const Brand = () => {
  return (
    <Link className={css.brand} to='/'>
      <Logo/>
      <div className={css.brandName}>
        sherpa.
      </div>
    </Link>
  )
}

export default Brand