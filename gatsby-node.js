const path = require("path");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const workPages = graphql(`
    {
      allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "data/work/"}}
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: path.resolve(`src/templates/single-work.js`)
      })
    })
  })

  const journalPages = graphql(`
    {
      allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "data/journal/"}}
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: path.resolve(`src/templates/single-journal.js`)
      })
    })
  })

  const pages = graphql(`
    {
      allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "data/pages/"}}
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              templateType
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      // const {
      //   templateType
      // } = node.frontmatter

      createPage({
        path: node.frontmatter.path,
        component: path.resolve(`src/templates/page-basic.js`)
      })
    })
  })

  return Promise.all([
    workPages,
    journalPages
  ])
}