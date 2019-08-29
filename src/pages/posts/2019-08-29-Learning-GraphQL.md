---
date: 2019-08-29
title: "Learning GraphQL"
published: false
tags: ["graphql", "webdev", "beginners"]
canonical_url:
cover_image: ../../images/coverImages/2019-08-29-cover-image.jpeg
---

##Using GraphQL In My Personal Website

A few months ago I embarked on upgrading my personal website from a React/Rails stack to a Gatsby site. One reason for this switch is because I wanted to get more familiar with [GraphQL](https://graphql.org/).


##GraphQL Queries - Get the Data You Need

GraphQL is a query language that lets you request the exact data you want. For example, here's a query from my blog that pulls exactly the data I need to build a blog post show page:

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
 
My site stores all data (markdown files and images) in the frontend repository itself. Using GraphQL can I pull this data and programmatically build pages.

With the previous version of my site, I had to make an API call to a specific Rails endpoints. Then the frontend had to accomodated whatever data was in the response. Sometimes I had to make multiple HTTP requests to get all the data I needed for one component. 

##GraphQL Works Great With Static Sites
As noted above, my site queries the frontend to build blog post pages. This all happens at build time. In other words, I have a static site that uses GraphQL.

Gatsby's [tutorial](https://www.gatsbyjs.org/tutorial/part-six/) explains it best: 

> Gatsby lets you use GraphQL to query your data and map the query results to pages—all at build time. 

That's why this site loads blazingly fast! 🔥

##Pull Data From Anywhere


Using GraphQL on the frontend lets you pull data _from basically anywhere you want._ This is a really powerful idea that I'm still wrapping my head around. 

I'm currently working through the [React + Apollo GraphQL Tutorial](https://www.howtographql.com/react-apollo/0-introduction/). This tutorial walks you through building a fullstack React/Express clone of hackernews that uses GraphQL. Unlike my static site, the hackernews clone pulls data from a backend API (Express). Even so, I can still use GraphQL queries to get the exact data I want:

```javascript
export const FEED_QUERY = gql`
  {
    feed {
      links {
        id
        createdAt
        url
        description
        postedBy {
          id
          name
        }
        votes {
          id
          user {
            id
          }
        }
      }
    }
  }
`;
```
The Apollo client helps send this query to my Express server. As long as the Express server is also set up to accept GraphQL queries I'll get back the data I want.

##My GraphQL Coding Environment

These are the tools I use when working on GraphQL projects:

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
