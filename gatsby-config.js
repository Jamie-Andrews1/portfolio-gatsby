
module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `projects`,
      path: `${__dirname}/src/projects/`,
    },
  },
  {
    resolve: `gatsby-plugin-postcss`,
    options: {
      cssLoaderOptions: {
        camelCase: false,
      },
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images/`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `cv`,
      path: `${__dirname}/static/`,
    },
  },
  {
    resolve: "gatsby-remark-external-links",
        options: {
          target: "_blank",
          rel: "noopener noreferrer"
        }
  }
],
  siteMetadata: {
    title: 'Jamie Andrews',
    desctription: 'web dev portfolio'
  }
}
