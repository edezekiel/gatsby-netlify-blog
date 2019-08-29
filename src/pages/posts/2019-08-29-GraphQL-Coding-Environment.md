---
date: 2019-08-29
title: "Learning GraphQL"
published: false
tags: ["graphql", "webdev", "beginners"]
canonical_url:
cover_image: ../../images/coverImages/2019-08-29-cover-image.jpeg
---

## My Experience Working With GraphQL

A few months ago I embarked on upgrading my personal website from a React/Rails stack to a Gatsby site. One reason for this switch is because I wanted to get more familiar with [GraphQL](https://graphql.org/).

Today, my personal site uses GraphQL queries to load data instead of calls to a REST API. For example,
here's the query I call on to populate each blog post "show" page:

```javascript
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        cover_image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
`
```
### What's Going On Here?

This query above pulls exactly the data I need to build a blog post show page. My site stores all of the raw data I need (markdown files and images) in the frontend repository itself. Thus, the query just calls on files in the frontend application when building pages. 

Gatsby's [tutorial](https://www.gatsbyjs.org/tutorial/part-six/) explains it best: 

> Gatsby lets you use GraphQL to query your data and map the query results to pages—all at build time. 



1. **Editor**
   - VSCode
2. **VSCode Extensions**
   - Apollo GraphQL - apollographql.vscode-apollo
   - GraphQL - prisma.vscode-graphql
   - Prisma - prisma.prisma
3. **npm packages**

   - graphql
   - graphql-cli
   - apollo-boost
   - react-apollo
   - prisma

4. **Applications**
   - graphql-playground

---

##
