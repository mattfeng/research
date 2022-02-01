const _ = require("lodash")

module.exports = {
  pathPrefix: "/research",
  siteMetadata: {
    title: `Research`,
    description: `Research.`,
    author: `@mattfeng`,
    siteUrl: `https://mattfeng.tech/research/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
              showCaptions: true,
              wrapperStyle: fluidResult =>
                `flex:${_.round(fluidResult.aspectRatio, 2)};`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              theme: `solarized-light`,
            },
          },
        ],
        remarkPlugins: [
          [
            require("remark-math"),
            {
              strict: `ignore`,
            },
          ],
        ],
        rehypePlugins: [
          [
            require(`rehype-katex`),
            {
              macros: {
                "\\tr": "{#1}^\\mathsf{T}",
              },
            },
          ],
        ],
      },
    },
  ],
}
