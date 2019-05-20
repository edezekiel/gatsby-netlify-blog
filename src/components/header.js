import { Link } from "gatsby"
import React from "react"

import Nav from './nav'

const Header = ({ siteTitle }) => (
  <header>
    <h1>
      <Link to="/">
        {siteTitle}
      </Link>
    </h1>
    <Nav />
  </header>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
