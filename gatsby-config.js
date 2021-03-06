module.exports = {
  siteMetadata: {
    title: `MTGA Pathway`,
    description: `Find the closest competitive or meta MTGA decks you are closest to building with your current collection.`,
    author: `Mark Alaniz`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MTGA Pathway`,
        short_name: `mtgapathway`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/app-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-netlify-headers`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
