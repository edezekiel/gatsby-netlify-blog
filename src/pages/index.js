import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi there</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>{data.allMarkdownRemark.totalCount} Posts</p>
  </Layout>
)


export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
