import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from "../components/layout"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark

  return (
    <Layout>
      <h2>{`Post${totalCount === 1 ? "" : "s"} tagged with `}
      <u>{tag}</u>:
      {` ${totalCount}`}</h2>

      <ul>
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title } = node.frontmatter
          return (
            <li key={slug}>
              <Link to={slug}>{title}</Link>
            </li>
          )
        })}
        </ul>
        {}
        <h3><Link to="/blog">All tags</Link></h3>
      </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
