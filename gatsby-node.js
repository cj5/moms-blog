exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
            title
          }
        }
      }
    }
  `)
  data.allContentfulBlogPost.edges.forEach(edge => {
    const slug = edge.node.slug
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/blog-post-contentful.js`),
      context: { slug: slug },
    })
  })
}
