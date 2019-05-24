import { Link } from "gatsby"
import React from "react"

const Nav = ({ siteTitle }) => (
  <nav>
    <Link to="/" id="nav-title">
      <h2>{siteTitle}</h2>
    </Link>
    <Link to="/" id="nav-blog">
      <h2>Blog</h2>
    </Link>
    <Link to="/page-2/" id="nav-projects">
      <h2>Projects</h2>
    </Link>
    <Link to="/about" id="nav-about">
      <h2>About</h2>
    </Link>
  </nav>
)

Nav.defaultProps = {
  siteTitle: ``,
}

export default Nav
