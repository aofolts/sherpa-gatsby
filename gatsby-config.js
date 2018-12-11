const {gatsbyTransformerContentfulRichText} = require('./contentful-rich-text-config.js')

let contentfulConfig

try {
  // Load the Contentful config from the .contentful.json
  contentfulConfig = require('./.contentful')
} catch (_) {}

// Overwrite the Contentful config with environment variables if they exist
contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID || contentfulConfig.spaceId,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN || contentfulConfig.accessToken,
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the delivery token need to be provided.'
  )
}

module.exports = {
  siteMetadata: {
    title: 'Sherpa Design Co.',
    siteUrl: `https://www.sherpadesign.co`,
    location: 'Rochester, NY'
  },
  plugins: [
    gatsbyTransformerContentfulRichText,
    'gatsby-plugin-svg-sprite',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-less',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-106772115-3",
        head: false,
        anonymize: true,
        respectDNT: true
      },
    },
  ]
}
