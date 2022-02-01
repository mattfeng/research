import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { Link, graphql } from "gatsby"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
import { MDXRenderer } from "gatsby-plugin-mdx"
import * as styles from "../styles/post.module.scss"

require("katex/dist/katex.min.css")
deckDeckGoHighlightElement()

const shortcodes = { Link }

const Layout = ({ data }) => {
  const post = data.mdx
  return (
    <div className={styles.mainContainer}>
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{post.body}</MDXRenderer>
      </MDXProvider>
    </div>
  )
}

export default Layout

export const query = graphql`
  query ($slug: String!) {
    mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        title
      }
    }
  }
`
