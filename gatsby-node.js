const path = require("path");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const workTemplate = path.resolve(`src/templates/single-work.js`);

  const workPages = graphql(`
    {
      allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "content/work/"}}
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
        component: workTemplate
      })
    })
  })

  const journalTemplate = path.resolve(`src/templates/single-journal.js`);

  const journalPages = graphql(`
    {
      allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "content/journal/"}}
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
        component: journalTemplate
      })
    })
  })

  return Promise.all([
    workPages,
    journalPages
  ])
}