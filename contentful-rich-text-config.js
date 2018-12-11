const {BLOCKS,INLINES,MARKS} = require('@contentful/rich-text-types')
const {getPageUrl} = require('./src/utilities/router')

exports.gatsbyTransformerContentfulRichText = {
  resolve: `@contentful/gatsby-transformer-contentful-richtext`,
  options: {
    renderOptions: {
      renderNode: {
        [INLINES.ENTRY_HYPERLINK]: node => {
          const target = node.data.target
          const fields = target.fields
          const text   = node.content.reduce((text,node) => {
            return text + node.value
          },'')

          const page = {
            slug: fields.slug['en-US'],
            type: target.sys.contentType.sys.id
          }

          return `<a href='${getPageUrl(page)}'>${text}</a>`
        },
      },
    }
  }
}