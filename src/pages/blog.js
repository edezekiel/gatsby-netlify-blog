import React, { Component } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default class IndexPage extends Component {
  state = {
    allTags: this.props.data.allMarkdownRemark.group.map(
      item => item.fieldValue
    ),
    currentTag: null,
  }

  setTag = e => {
    this.setState({ currentTag: e.target.value })
  }

  resetTags = () => {
    this.setState({ currentTag: null })
  }

  render() {
    const data = this.props.data
    return (
      <Layout>
        <SEO title="Blog" />
        <h2>{this.state.currentTag === null ? "All Posts" : `${this.state.currentTag}`}</h2>
        <section>
          <button onClick={this.resetTags}>All Posts</button>
          {data.allMarkdownRemark.group.map(tag => (
            <button
              key={tag.fieldValue}
              value={tag.fieldValue}
              onClick={this.setTag}
            >
              {tag.fieldValue}
            </button>
          ))}
        </section>

        <section>
          {data.allMarkdownRemark.edges.map(({ node }) => {
            if (!(this.state.currentTag === null)) {
              if (node.frontmatter.tags.includes(this.state.currentTag)) {
                return (
                  <Link to={node.fields.slug} slug={node.fields.slug}>
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
            } else {
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
