import React, { Component } from "react"
import { Link, graphql } from "gatsby"

// Utilites
import kebabCase from "lodash/kebabCase"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default class IndexPage extends Component {
  state = {
    currentTags: "fourth"
  }

  render() {
    const data = this.props.data

    return (
      <Layout>
        <SEO title="Blog" />
        <h2>{this.state.currentTags}</h2>
        <section>
          {data.allMarkdownRemark.group.map(tag => (
            <div key={tag.fieldValue}>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue}
              </Link>
            </div>
          ))}
        </section>

        <section>
          {data.allMarkdownRemark.edges.map(({ node }) => {
            if (node.frontmatter.tags.includes(this.state.currentTags)){
              return (
                <Link to={node.fields.slug}>
                  <h3 class="post-index" key={node.id}>
                    {node.frontmatter.title}
                  </h3>
                  <p>{node.frontmatter.date}</p>
                  <p>{node.excerpt}</p>
                  <p>{node.frontmatter.tags}</p>
                  <hr />
                </Link>
              )
            }
          })}
        </section>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMM, YYYY")
            tags
          }
          fields {
            slug
          }
          excerpt
        }
      }
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
