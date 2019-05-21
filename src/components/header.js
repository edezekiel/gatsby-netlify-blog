import { Link } from "gatsby"
import React from "react"

import Nav from './nav'

const Header = ({ siteTitle }) => (
  <header>
    <Link to="/">{siteTitle}</Link>
    <Nav />
  </header>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
