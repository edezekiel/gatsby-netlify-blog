import React from 'react'
import { Link } from 'gatsby'

const Nav = () => (
  <nav>
    <ul>
      <li><Link to="/">Go back to the homepage</Link></li>
      <li><Link to="/page-2/">Go to page 2</Link></li>
    </ul>
  </nav>
)

export default Nav
