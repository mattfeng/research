exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              title
            }
            slug
          }
        }
      }
    }
  `)

  data.allMdx.edges.forEach(edge => {
    const slug = edge.node.slug
    console.log(slug)
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/post.js`),
      context: { slug: slug },
    })
  })
}
