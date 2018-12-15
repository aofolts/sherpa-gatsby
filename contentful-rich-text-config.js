const {BLOCKS,INLINES,MARKS} = require('@contentful/rich-text-types')
const {getPageUrl} = require('./src/utilities/router')

exports.gatsbyTransformerContentfulRichText = {
  resolve: `@contentful/gatsby-transformer-contentful-richtext`,
  options: {
    renderOptions: {
      renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: node => {
          return `<img class='contentful-embedded-asset' src="${
            node.data.target.fields.file['en-US'].url
          }"/>`
        },
        [INLINES.ASSET_HYPERLINK]: node => {
          return `<img class='custom-asset' src="${
            node.data.target.fields.file['en-US'].url
          }"/>`
        },
        [INLINES.ENTRY_HYPERLINK]: node => {
          const target = node.data.target
          const fields = target.fields
          const text   = node.content.reduce((text,node) => {
            return text + node.value
          },'')

          // Hotfix for nested marks issue
          if (!fields || !fields.slug) return text + ': Slug undefined'

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