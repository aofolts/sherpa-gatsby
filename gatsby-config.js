module.exports = {
  siteMetadata: {
    title: 'Sherpa Design Co.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-less',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1400,
            },
          },
        ],
      },
    },
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `icons`,
        path: `${__dirname}/src/icons`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'work',
        path: `${__dirname}/src/data/work`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'journal',
        path: `${__dirname}/src/data/journal`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'pages',
        path: `${__dirname}/src/data/pages`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      name: 'packages',
      options: {
        path: `${__dirname}/src/data/packages`,
      }
    }
  ]
}
