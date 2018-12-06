const path = require('path')

const templates = {
  page: path.resolve('./src/templates/page.js'),
  single: {
    process: path.resolve('./src/templates/single-process/index.js')
  },
  pages: {
  }
}

exports.createPages = ({graphql,actions}) => {
  const {
    createPage
  } = actions

  // const createPages = new Promise((resolve,reject) => {
  //   resolve(
  //     graphql(
  //       `
  //         {
  //           pages: allContentfulPage {
  //             edges {
  //               node {
  //                 slug
  //                 layout {
  //                   internal {
  //                     type
  //                   }
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       `
  //     ).then(({
  //       errors,
  //       data
  //     }) => {
  //       if (errors) {
  //         console.log(errors)
  //         reject(errors)
  //       }
 
  //       const pages = data.pages.edges.map(entry => entry.node)

  //       const getPageTemplate = entry => {
  //         // gatsby-source-contentful single reference field bug
  //         const layoutType = entry.layout[0].internal.type

  //         if (layoutType === 'ContentfulLayoutProcess') return templates.pages.process
  //         return templates.pages[entry.slug] || templates.page
  //       }

  //       const getPagePath = entry => {
  //         return entry.slug === 'home' ? '/' : `/${entry.slug}`
  //       }

  //       pages.forEach(entry => {
  //         createPage({
  //           path: getPagePath(entry),
  //           component: templates.single.process,
  //           context: {
  //             slug: entry.slug
  //           }
  //         })
  //       })
  //     })
  //   )
  // })

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

  return Promise.all([
    //createPages,
    createProcessPages
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