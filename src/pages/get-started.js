import React,{Component} from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import Hero from '../components/hero-secondary'
import Wrap from '../components/wrap'
import Section from '../components/section'
import css from '../less/packages.module.less'
import {Helmet} from 'react-helmet'
import RichContent from '../components/rich-content'
import packageCss from '../less/package-overview.module.less'

css.package = packageCss

const Intro = ({packages,activePackage,setActivePackageById}) => {
  const navItems = packages.map(({
    level,
    id
  }) => {
    const navItemClasses = [
      css.navItem,
      id === activePackage.id ? css.activeNavItem : null
    ].join(' ')

    const handleClick = () => setActivePackageById(id)

    return (
      <li key={id} className={navItemClasses} onClick={handleClick}>
        {level}
      </li>
    )
  })

  const Nav = () => {
    return (
      <nav className={css.nav}>
        <ul className={css.navMenu}>
          {navItems}
        </ul>
      </nav>
    )
  }

  return (
    <Section name='intro'>
      <Wrap width='small'>
        <h2>Websites For Any Business</h2>
        <p>Whether you're considering your first website or planning a complex project, I can help, with packages designed to help you grow online.</p>
        <Nav/>
      </Wrap>
    </Section>
  )
}

const PackagesSection = ({packages,activePackage}) => {
  const packageElements = packages.map(({
    id,
    title,
    icon,
    useCase,
    html
  }) => {
    const wrapClasses = [
    id === activePackage.id ? css.activePackage : css.inactivePackage
    ].join(' ')

    return (
      <Wrap key={id} width='small' className={wrapClasses}>
        <div className={css.package.intro}>
          <img srcSet={icon} alt={`${title} Package Icon`} className={css.packageIcon}/>
          <h2>{title}</h2>
          <p>Use Cases: {useCase}</p>
        </div>
        <RichContent html={html} wrapClassName={css.package.mainContent}/>
      </Wrap>
    )
  })

  return (
    <Section name='packages' className={css.packagesSection}>
      {packageElements}
    </Section>
  )
}

class Page extends Component {

  constructor(props) {
    super(props)

    const {
      allMarkdownRemark
    } = props.data

    this.packages = allMarkdownRemark.edges.map(({node}) => {
      return {
        ...node,
        ...node.frontmatter,
       icon: node.frontmatter.icon.childImageSharp.sizes.srcSet
      }
    })
  
    this.state = {
      activePackage: this.packages[0]
    }
  }

  setActivePackageById = id => {
    this.setState({
      activePackage: this.packages.find(item => item.id === id)
    })
  }

  render() {
    const {
      featuredImage
    } = this.props.data

    return (
      <Layout>
        <Helmet>
          <title>Get Stared: Website Packages For Small Businesses &amp; Nonprofits</title>
          <meta name='description' content="Whether you're considering your first website or planning a complex project, I can help, with packages for most budgets."/>
        </Helmet>
        <Hero title='Get Started' image={featuredImage}/>
        <Intro 
          packages={this.packages} 
          activePackage={this.state.activePackage}
          setActivePackageById={this.setActivePackageById}
        />
        <PackagesSection 
          packages={this.packages} 
          activePackage={this.state.activePackage}
        />
      </Layout>
    )
  }
}

export default Page

export const pageQuery = graphql`
  {
    featuredImage: imageSharp(
      original: {
        src: {regex: "/snaking-river-mountains/"}
      }
    ) {
      sizes(maxWidth: 1920) {
        ...GatsbyImageSharpSizes
      }
    }
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "data/packages/"}}
    	sort: {
        fields: [
          frontmatter___price
        ]
      }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            level
            price
            useCase
            icon {
              childImageSharp {
                sizes(maxWidth: 250) {
                  srcSet
                }
              }
            }
          }
        }
      }
    }
  }
`;