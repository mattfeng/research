import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { Link, graphql } from "gatsby"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
import { MDXRenderer } from "gatsby-plugin-mdx"
import * as styles from "../styles/post.module.scss"

require("katex/dist/katex.min.css")
deckDeckGoHighlightElement()

const Image = ({ width, children }) => {
  if (!width) {
    width = "400px"
  }

  const style = {
    width,
    margin: "0 auto",
  }

  console.log(children)

  return (
    <div className={styles.imageContainer}>
      <div style={style}>{children[0]}</div>
      {children.slice(1)}
    </div>
  )
}

const SPACE = () => {
  return <>&ensp;</>
}

const shortcodes = { Link, SPACE, Image }

const Layout = ({ data }) => {
  const post = data.mdx
  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{post.body}</MDXRenderer>
        </MDXProvider>
      </div>
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
