const path = require(`path`)
const _ = require("lodash")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages`})

    createNodeField({
      node,
      name: `slug`,
      value: `${slug.slice(0, slug.length - 1)}.md`,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 2000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
        }
      }
    }
  `).then(result => {
    const posts = result.data.allMarkdownRemark.edges

    // Create post detail pages using slugs for the path
    posts.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve('src/templates/blog-post.js'),
        context: {
          slug: node.fields.slug,
        }
      })
    })
  })
}
