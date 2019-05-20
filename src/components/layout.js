/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from './footer'

const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `
  )
  return (
    <>
    <Header siteTitle={data.site.siteMetadata.title} />
    <main>{children}</main>
    <Footer />
    </>
  )
}


export default Layout
