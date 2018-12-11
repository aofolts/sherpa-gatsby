const {BLOCKS,INLINES,MARKS} = require('@contentful/rich-text-types')

exports.gatsbyTransformerContentfulRichText = {
  resolve: `@contentful/gatsby-transformer-contentful-richtext`,
  options: {
    renderOptions: {
      renderNode: {
        [INLINES.EMBEDDED_ENTRY]: node => {
          console.log(node)
          return `<div class='custom-entry' />${
            node.data.target.fields.name['en-US']
          }</div>`
        },
      },
    }
  }
}