/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
    title: `Josef Hartsough`,
    siteUrl: `https://www.josefhartsough.dev`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-node-reload",
  ],
};
