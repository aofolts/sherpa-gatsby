const path = require('path')

const templates = {
  page: path.resolve('./src/templates/page/index.js'),
  single: {
    journal: path.resolve('./src/templates/single-journal/index.js'),
    process: path.resolve('./src/templates/single-process/index.js')
  },
  pages: {
    home: path.resolve('./src/templates/home/index.js'),
    journal: path.resolve('./src/templates/journal/index.js')
  }
}

exports.createPages = ({graphql,actions}) => {
  const {
    createPage
  } = actions

  const createPages = new Promise((resolve,reject) => {
    resolve(
      graphql(
        `
          {
            pages: allContentfulPage {
              edges {
                node {
                  slug
                  layout {
                    __typename
                  }
                }
              }
            }
          }
        `
      ).then(({
        errors,
        data
      }) => {
        if (errors) {
          console.log(errors)
          reject(errors)
        }
 
        const pages = data.pages.edges.map(entry => entry.node)

        const getPageTemplate = entry => {
          // gatsby-source-contentful single reference field bug
          const layoutType = entry.layout[0]['__typename']

          if (layoutType === 'ContentfulLayoutPageHome') return templates.pages.home
          if (entry.slug === 'journal') return templates.pages.journal
          return templates.pages[entry.slug] || templates.page
        }

        const getPagePath = entry => {
          return entry.slug === 'home' ? '/' : `/${entry.slug}`
        }

        pages.forEach(entry => {
          createPage({
            path: getPagePath(entry),
            component: getPageTemplate(entry),
            context: {
              slug: entry.slug
            }
          })
        })
      })
    )
  })

  const createProcessPages = new Promise((resolve,reject) => {
    resolve(
      graphql(
        `
          {
            pages: allContentfulProcess {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `
      ).then(({
        errors,
        data
      }) => {
        if (errors) {
          console.log(errors)
          reject(errors)
        }

        const pages = data.pages.edges.map(entry => entry.node)

        pages.forEach(entry => {
          createPage({
            path: `/process/${entry.slug}`,
            component: templates.single.process,
            context: {
              slug: entry.slug
            }
          })
        })
      })
    )
  })

  const createJournalPages = new Promise((resolve,reject) => {
    resolve(
      graphql(
        `
          {
            pages: allContentfulJournalEntry {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `
      ).then(({
        errors,
        data
      }) => {
        if (errors) {
          console.log(errors)
          reject(errors)
        }
  
        const pages = data.pages.edges.map(entry => entry.node)
  
        pages.forEach(entry => {
          createPage({
            path: `/journal/${entry.slug}`,
            component: templates.single.journal,
            context: {
              slug: entry.slug
            }
          })
        })
      })
    )
  })

  return Promise.all([
    createPages,
    createProcessPages,
    createJournalPages
  ])
}


exports.onCreateWebpackConfig = ({
  actions
}) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [
        path.resolve('./src'), 
        'node_modules'
      ],
    },
    stats: {
      moduleTrace: false,
    }
  })
}