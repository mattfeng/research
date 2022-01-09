module.exports = {
  siteMetadata: {
    title: `Research`,
    description: `Research.`,
    author: `@mattfeng`,
    siteUrl: `https://mattfeng.tech/research/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
