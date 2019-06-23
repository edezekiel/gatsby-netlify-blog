import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Nav from "./nav"
import Footer from "./footer"

function Layout({ children }) {
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
      <header>
        <Nav siteTitle={data.site.siteMetadata.title} />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
