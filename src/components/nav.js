import { Link } from "gatsby"
import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons"

const Nav = ({ siteTitle }) => (
  <nav>
    <Link to="/" id="nav-title">
      <FontAwesomeIcon icon={faUserAstronaut} size="3x" />
    </Link>
    <Link to="/blog" id="nav-blog">
      <h2>Blog</h2>
    </Link>
    <Link to="/projects" id="nav-projects">
      <h2>Work</h2>
    </Link>
    <Link to="/about" id="nav-about">
      <h2>Me</h2>
    </Link>
  </nav>
)

Nav.defaultProps = {
  siteTitle: ``,
}

export default Nav
