import React, { Component } from "react"
import { Link, graphql } from "gatsby"

// Utilites
import kebabCase from "lodash/kebabCase"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default class IndexPage extends Component {

  state = {
    allTags: this.props.data.allMarkdownRemark.group.map(item => item.fieldValue),
    currentTag: null
  }

  setTag = (e) => {
    console.log(e.target.value)
    this.setState({ currentTag: e.target.value })
  }

  render() {
    const data = this.props.data
    console.log(this.state.currentTag)
    return (
      <Layout>
        <SEO title="Blog" />
        <h2>{this.state.currentTag}</h2>
        <section>
          {data.allMarkdownRemark.group.map(tag => (
              <button
                key={tag.fieldValue}
                value={tag.fieldValue}
                onClick={this.setTag}>
                {tag.fieldValue}
              </button>
          ))}
        </section>

        <section>
          {data.allMarkdownRemark.edges.map(({ node }) => {
            if (!(this.state.currentTag === null)) {
              if (node.frontmatter.tags.includes(this.state.currentTag)){
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
