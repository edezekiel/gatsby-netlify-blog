import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({ data }) => (
  <Layout>
    <SEO title="Ed Ezekiel | Projects" />
    <h2>My Site's Files</h2>
    <table>
      <thead>
        <tr>
          <th>relativePath</th>
          <th>prettySize</th>
          <th>extension</th>
          <th>birthTime</th>
        </tr>
      </thead>
      <tbody>
        {data.allFile.edges.map(({ node }, index) => (
          <tr key={index}>
            <td>{node.relativePath}</td>
            <td>{node.prettySize}</td>
            <td>{node.extension}</td>
            <td>{node.birthTime}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </Layout>
)

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`

export default SecondPage
